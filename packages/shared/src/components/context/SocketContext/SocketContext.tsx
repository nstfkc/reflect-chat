"use client";

import type {
  Channel,
  Message,
  Reaction,
  User,
  UserProfile,
  UserStatusKind,
} from "db";
import { ReactNode, createContext, useContext, useEffect } from "react";
import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import { ConfigContext } from "../ConfigContext/ConfigContext";
import { useUser } from "../../../auth";
import { Subject } from "../../../utils/Subject";
import { useSubjectValue } from "../../../utils/useSubjectValue";

export type UserIsTypingPayload = { userId: number } & (
  | { kind: "channel"; channelId: number }
  | { kind: "thread"; conversationId: number }
  | { kind: "dm"; receiverId: number }
);

type EmitEvents = {
  "user-connected": ({ user }: { user: User }) => void;
  "channel-created": (channel: Channel) => void;
  "last-seen-message": (params: { userId: number; message: Message }) => void;
  "message:create": (message: Partial<Message>) => void;
  "message:update": (message: Partial<Message>) => void;
  "user-typing": (payload: UserIsTypingPayload) => void;
  "update-user-status": (payload: {
    userStatusId: number;
    userStatus: UserStatusKind;
  }) => void;
  "update-user-profile": (payload: {
    userProfile: UserProfile;
    userId: number;
  }) => void;
  "reaction:create": (reaction: Reaction) => void;
  "reaction:delete": (reaction: Reaction) => void;
};

export type ListenEvents = {
  "user-connected": ({ user }: { user: User }) => void;
  "channel-created": (channel: Channel) => void;
  "new-mention": (props: { message: Message }) => void;
  /*  */
  "message:created": (message: Message) => void;
  "message:updated": (message: Message) => void;
  "reaction:created": (reaction: Reaction) => void;
  "reaction:deleted": (reaction: Reaction) => void;
  "user-typing": (payload: UserIsTypingPayload) => void;
  "update-user-status": (payload: {
    userStatusId: number;
    userStatus: UserStatusKind;
  }) => void;
  "update-user-profile": (payload: {
    userProfile: UserProfile;
    userId: number;
  }) => void;
};

export type InternalSocket = Socket<ListenEvents, EmitEvents>;

interface SocketContextValue {
  socket: InternalSocket | null;
  getSocket: () => InternalSocket | null;
  connected: boolean;
}

export const SocketContext = createContext({} as SocketContextValue);

const socketSubject = new Subject<InternalSocket | null>(null);

let called = false;
function createSocket(socketUrl: string, userId: number) {
  if (called) {
    return;
  }
  called = true;
  if (socketSubject.getValue()) {
    return;
  }
  const socket = io(socketUrl, {
    query: { userId: userId },
    forceNew: false,
  });

  socket.on("connect", () => {
    console.log("SOCKET CONNECTED!", socket.id);
    socket.emit("user-connected", { userId });
    socketSubject.next(socket);
  });

  socket.on("disconnect", () => {
    console.log("SOCKET DISCONNECTED!", socket.id);
    called = false;
    socket.emit("user-disconnected", { userId });
  });
}

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider = (props: SocketProviderProps) => {
  const { children } = props;
  const { socketUrl } = useContext(ConfigContext);
  const socket = useSubjectValue(socketSubject);
  const { user } = useUser();

  useEffect(() => {
    createSocket(socketUrl, user?.id);
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
        connected: socket?.connected,
        getSocket: () => socketSubject.getValue(),
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
