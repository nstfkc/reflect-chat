"use client";

import { MessageMedia, MessageWithMedia, User } from "../../../types/global";
import type { Channel, Message } from "db";
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
import { useUser } from "../../../auth";

type EmitEvents = {
  "user-connected": ({ user }: { user: User }) => void;

  "channel-created": (channel: Channel) => void;
  "last-seen-message": (params: { userId: string; message: Message }) => void;
  /*  */
  "message:create": (message: Partial<Message>, medias: MessageMedia[]) => void;
};

export type ListenEvents = {
  "user-connected": ({ user }: { user: User }) => void;
  "channel-created": (channel: Channel) => void;
  "new-mention": (props: { message: Message }) => void;
  /*  */
  "message:created": (message: MessageWithMedia) => void;
};

export type InternalSocket = Socket<ListenEvents, EmitEvents>;

interface SocketContextValue {
  socket: InternalSocket | null;
  connected: boolean;
}

export const SocketContext = createContext({} as SocketContextValue);

function useSocket(userId: string) {
  const { socketUrl } = useContext(ConfigContext);
  const [connected, setConnected] = useState(false);
  const socketRef = useRef<InternalSocket | null>(null);

  useEffect(() => {
    const socket = io(socketUrl, {
      query: { userId: userId },
    });

    socket.on("error", (err) => {
      console.log("SOCKET_ERROR", err);
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
      return null;
    };
  }, [userId, socketUrl]);

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
  const { user } = useUser();
  const { socket, connected } = useSocket(user?.publicId);

  return (
    <SocketContext.Provider value={{ socket, connected }}>
      {children}
    </SocketContext.Provider>
  );
};
