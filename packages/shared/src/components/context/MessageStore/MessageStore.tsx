import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useSocket } from "../SocketContext";
import { MessageWithMedia } from "../../../types/global";

interface MessageStoreContextValue {
  setActiveChannelId: (id: string) => void;
}

const MessageStoreContext = createContext({} as MessageStoreContextValue);

export const MessageStore = ({ children }: PropsWithChildren) => {
  const currentActiveChannelId = useRef<null | string>(null);

  const { socket } = useSocket();

  const handleUpdateMessageHistory = useCallback(
    (message: MessageWithMedia) => {
      if (message.channelId !== currentActiveChannelId.current) {
      }
    },
    []
  );

  useEffect(() => {
    socket?.on("message:created", handleUpdateMessageHistory);
    return () => {
      socket?.off("message:created", handleUpdateMessageHistory);
    };
  }, [socket, handleUpdateMessageHistory]);

  const value = {
    setActiveChannelId: (id: null | string) => {
      currentActiveChannelId.current = id;
    },
  };

  return (
    <MessageStoreContext.Provider value={value}>
      {children}
    </MessageStoreContext.Provider>
  );
};
