"use client";

import { MessageMedia, MessageWithMedia } from "../../../types/global";
import type { Channel, Message, User } from "db";
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
  "user-typing": (payload: { userId: string; channelOrUserId: string }) => void;
};

export type ListenEvents = {
  "user-connected": ({ user }: { user: User }) => void;
  "channel-created": (channel: Channel) => void;
  "new-mention": (props: { message: Message }) => void;
  /*  */
  "message:created": (message: MessageWithMedia) => void;
  "user-typing": (payload: { userId: string; channelOrUserId: string }) => void;
};

export type InternalSocket = Socket<ListenEvents, EmitEvents>;

interface SocketContextValue {
  socket: InternalSocket | null;
  connected: boolean;
}

export const SocketContext = createContext({} as SocketContextValue);

function useSocket(userId: string) {
  const { socketUrl } = useContext(ConfigContext);
  const [socket, setSocket] = useState<InternalSocket | null>(null);
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
      setSocket(socket);

      socket.emit("user-connected", { userId });
    });
    socket.on("disconnect", () => {
      console.log("SOCKET DISCONNECTED!", socket.id);

      socket.emit("user-disconnected", { userId });
    });
    return () => {
      if (socket) {
        socket.disconnect();
      }
      return null;
    };
  }, [userId, socketUrl]);

  if (socket === null) {
    return {
      socket,
      connected: false,
    };
  }

  return {
    connected: socket?.connected ?? false,
    socket,
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
