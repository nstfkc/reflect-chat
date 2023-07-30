"use client";

import type {
  Channel,
  Message,
  Reaction,
  User,
  UserProfile,
  UserStatusKind,
} from "db";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import { ConfigContext } from "../ConfigContext/ConfigContext";
import { useUser } from "../../../auth";

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
  connected: boolean;
  debug: VoidFunction;
}

export const SocketContext = createContext({} as SocketContextValue);

function useSocket(userId: number) {
  const { socketUrl } = useContext(ConfigContext);
  const [socket] = useState<InternalSocket | null>(() => {
    const socket = io(socketUrl, {
      query: { userId: userId },
    });

    console.log({ socket });

    socket.on("error", (err) => {
      console.log("SOCKET_ERROR", err);
    });

    socket.on("reconnect_error", (error) => {
      console.log("reconnect_error", { error });
      // ...
    });

    socket.io.on("reconnect_failed", (error: any) => {
      console.log("reconnect_failed", { error });
      // ...
    });
    // log socket connection
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);

      socket.emit("user-connected", { userId });
    });
    socket.on("disconnect", () => {
      console.log("SOCKET DISCONNECTED!", socket.id);

      socket.emit("user-disconnected", { userId });
    });

    setInterval(() => {
      socket.emit("ping");
    }, 2000);
    return socket;
  });

  const debug = () => {
    console.log("DEBUG", { socket });
  };

  return {
    connected: socket?.connected ?? false,
    socket,
    debug,
  };
}

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider = (props: SocketProviderProps) => {
  const { children } = props;
  const { user } = useUser();
  const { socket, connected } = useSocket(user?.id);

  return (
    <SocketContext.Provider
      value={{
        socket,
        connected,
        debug: () => console.log("DEBUG", { socket }),
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
