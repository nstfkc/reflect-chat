"use client";

import { MessageMedia, MessageV1WithMedia } from "@/types/global";
import type { Channel, User, MessageV1 } from "db";
import { ReactNode, createContext, useEffect, useRef, useState } from "react";
import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import useSWR from "swr";

type EmitEvents = {
  "user-connected": ({ user }: { user: User }) => void;

  "channel-created": (channel: Channel) => void;
  "last-seen-message": (params: { userId: string; message: MessageV1 }) => void;
  /*  */
  "message:create": (
    message: Partial<MessageV1>,
    medias: MessageMedia[]
  ) => void;
};
export type ListenEvents = {
  "user-connected": ({ user }: { user: User }) => void;
  "channel-created": (channel: Channel) => void;
  "new-mention": (props: { message: MessageV1 }) => void;
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
    if (!user) {
      return;
    }
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
  }, [user]);

  return {
    connected,
    socket: socketRef.current,
  };
}

const fetchUser = (): Promise<User> =>
  fetch("/_api/me").then((res) => res.json());

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider = (props: SocketProviderProps) => {
  const { children } = props;
  const { data: user, isLoading } = useSWR("/me", fetchUser);
  const { socket, connected } = useSocket(user);

  if (isLoading) {
    return null;
  }

  return (
    <SocketContext.Provider value={{ socket, connected, user }}>
      {children}
    </SocketContext.Provider>
  );
};
