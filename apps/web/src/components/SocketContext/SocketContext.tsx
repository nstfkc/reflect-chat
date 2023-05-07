"use client";

import { MessageMedia, MessageV1WithMedia } from "@/types/global";
import type {
  Channel,
  DirectMessage,
  Message,
  User,
  MessageV1,
} from "@prisma/client";
import { ReactNode, createContext, useEffect, useRef, useState } from "react";
import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";

type EmitEvents = {
  "user-connected": ({ user }: { user: User }) => void;
  "dm-sent": (
    dm: Partial<DirectMessage>,
    media: Partial<MessageMedia>[]
  ) => void;
  "channel-created": (channel: Channel) => void;
  "last-seen-message": (params: { userId: string; message: Message }) => void;
  /*  */
  "message:create": (
    message: Partial<MessageV1>,
    medias: MessageMedia[]
  ) => void;
};
export type ListenEvents = {
  "user-connected": ({ user }: { user: User }) => void;
  "dm-received": (dm: DirectMessage, medias: MessageMedia[]) => void;
  "channel-created": (channel: Channel) => void;
  "new-mention": (props: { message: Message }) => void;
  /*  */
  "message:created": (message: MessageV1WithMedia) => void;
};

export type InternalSocket = Socket<ListenEvents, EmitEvents>;

export const SocketContext = createContext<{
  socket: InternalSocket | null;
  connected: boolean;
  user: User | null;
}>({ socket: null, connected: false, user: null });

function useSocket(user: User) {
  const [connected, setConnected] = useState(false);
  const socketRef = useRef<InternalSocket | null>(null);

  useEffect(() => {
    const socket = io({ query: { userId: user.id } });

    socket.on("error", (err) => {
      console.log(err);
    });

    // log socket connection
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);
      setConnected(true);
      (socketRef as any).current = socket;

      socket.emit("user-connected", { user });
    });

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  return {
    connected,
    socket: socketRef.current,
  };
}

interface SocketProviderProps {
  children: ReactNode;
  user: User;
}

export const SocketProvider = (props: SocketProviderProps) => {
  const { children, user } = props;
  const { socket, connected } = useSocket(user);

  return (
    <SocketContext.Provider value={{ socket, connected, user }}>
      {children}
    </SocketContext.Provider>
  );
};
