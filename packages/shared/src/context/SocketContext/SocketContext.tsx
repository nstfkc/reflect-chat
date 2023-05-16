"use client";

import { MessageMedia, MessageV1WithMedia } from "@/types/global";
import type { Channel, User, MessageV1 } from "db";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import { UserContext } from "../UserContext/UserContext";
import { ConfigContext } from "../ConfigContext/ConfigContext";

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

interface SocketContextValue {
  socket: InternalSocket | null;
  connected: boolean;
}

export const SocketContext = createContext<{}>({} as SocketContextValue);

function useSocket(userId: string) {
  const { apiUrl } = useContext(ConfigContext);
  const [connected, setConnected] = useState(false);
  const socketRef = useRef<InternalSocket | null>(null);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const socket = io({ query: { userId: userId }, host: apiUrl });

    socket.on("error", (err) => {
      console.log(err);
    });

    // log socket connection
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);
      setConnected(true);
      (socketRef as any).current = socket;

      socket.emit("user-connected", { userId });
    });
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [userId]);

  return {
    connected,
    socket: socketRef.current,
  };
}

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider = (props: SocketProviderProps) => {
  const { children } = props;
  const { user } = useContext(UserContext);
  const { socket, connected } = useSocket(user.id);

  return (
    <SocketContext.Provider value={{ socket, connected }}>
      {children}
    </SocketContext.Provider>
  );
};
