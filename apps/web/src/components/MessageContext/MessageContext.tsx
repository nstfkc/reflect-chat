"use client";

import { createId } from "@paralleldrive/cuid2";
import useLocalStorageState from "use-local-storage-state";
import { debounce } from "ts-debounce";
import { MessageV1 } from "db";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSocket } from "../SocketContext/useSocket";
import { UserContext } from "../UserContext/UserContext";
import { Media } from "../Chat/FileUploader";
import { MessageV1WithMedia } from "@/types/global";

function useMappedState() {
  const store = useRef(new Map());

  const [state, setState] = useState<Record<string, Set<string>>>(
    Object.fromEntries(store.current)
  );

  const addItem = (key: string, item: string) => {
    setState(() => {
      if (!store.current.has(key)) {
        store.current.set(key, new Set<string>());
      }
      const currentItems = store.current.get(key);

      currentItems?.add(item);
      return Object.fromEntries(store.current);
    });
  };

  const removeItem = (key: string, item: string) => {
    setState((state) => {
      const currentItems = store.current.get(key);
      if (typeof currentItems?.delete === "function") {
        currentItems?.delete(item);
        return Object.fromEntries(store.current);
      }
      return state;
    });
  };

  return {
    addItem,
    removeItem,
    state,
  };
}

function useUnreadMessages() {
  const { addItem, removeItem, state } = useMappedState();

  const { socket } = useSocket();

  const markMessageAsRead = (channelId: string) => (messageId: string) => {
    removeItem(channelId, messageId);
  };

  const handler = useCallback(
    (message: MessageV1) => {
      if (message.channelId) {
        addItem(message.channelId, message.id);
      } else {
        addItem(message.senderId, message.id);
      }
    },
    [addItem]
  );

  useEffect(() => {
    socket?.on("message:created", handler);
    return () => {
      socket?.off("message:created", handler);
    };
  }, [handler, socket]);

  return {
    unreadMessages: state,
    markMessageAsRead,
  };
}

function useChannelMentions() {
  const { addItem, removeItem, state } = useMappedState();

  const { socket } = useSocket();

  const markMentionsAsRead = (channelId: string) => (messageId: string) => {
    removeItem(channelId, messageId);
  };

  const handler = useCallback(
    (params: { message: MessageV1 }) => {
      const { message } = params;
      if (message.channelId) {
        addItem(message.channelId, message.id);
      }
    },
    [addItem]
  );

  useEffect(() => {
    socket?.on("new-mention", handler);
    return () => {
      socket?.off("new-mention", handler);
    };
  }, [handler, socket]);

  return {
    unreadMentions: state,
    markMentionsAsRead,
  };
}

function useLastSeenMessage() {
  const { user } = useContext(UserContext);
  const [lastSeenMessage, setLastSeenMessage] =
    useLocalStorageState<null | MessageV1>("last-seen-message", {
      defaultValue: null,
    });

  const { socket } = useSocket();

  function updateLastSeenMessage(message: MessageV1) {
    if (!lastSeenMessage) {
      setLastSeenMessage(message);
      socket?.emit("last-seen-message", { userId: user.id, message });
    } else {
      const currentMessageTime = new Date(lastSeenMessage.createdAt);
      const nextMessageTime = new Date(message.createdAt);

      if (nextMessageTime.getTime() > currentMessageTime.getTime()) {
        setLastSeenMessage(message);
        socket?.emit("last-seen-message", { userId: user.id, message });
      }
    }
  }

  return {
    updateLastSeenMessage: debounce(updateLastSeenMessage, 300),
    lastSeenMessage,
  };
}

function useMessageHistory() {
  const dmHistoryMapRef = useRef(new Map<string, MessageV1WithMedia[]>());
  const { socket, user } = useSocket();

  const [dmHistory, setDmHistory] = useState(dmHistoryMapRef.current);

  const handleUpdateMessageHistory = useCallback(
    (dm: MessageV1WithMedia) => {
      let key = "";

      if (dm.receiverId) {
        key = dm.senderId === user?.id ? dm.receiverId : dm.senderId;
      }

      if (dm.channelId) {
        key = dm.channelId;
      }

      if (!dmHistoryMapRef.current.has(key)) {
        !dmHistoryMapRef.current.set(key, []);
      }

      const current = dmHistoryMapRef.current.get(key)!;
      current.push(dm);
      setDmHistory(new Map(dmHistoryMapRef.current));
    },
    [user?.id]
  );

  useEffect(() => {
    socket?.on("message:created", handleUpdateMessageHistory);
    return () => {
      socket?.off("message:created", handleUpdateMessageHistory);
    };
  }, [socket, handleUpdateMessageHistory]);

  const getMessageHistoryById = (id: string) => {
    return dmHistory.get(id) ?? [];
  };

  return {
    dmHistory,
    getMessageHistoryById,
    handleUpdateMessageHistory,
  };
}

interface MessageContextValue {
  sendMessage: (cm: Partial<MessageV1>, media: Media[]) => void;

  unreadMessages: Record<string, Set<string>>;
  markMessageAsRead: (channelId: string) => (messageId: string) => void;

  unreadMentions: Record<string, Set<string>>;
  markMentionsAsRead: (channelId: string) => (messageId: string) => void;

  updateLastSeenMessage: (message: MessageV1) => void;
  getMessageHistoryById: (id: string) => MessageV1WithMedia[];
}

export const MessageContext = createContext({} as MessageContextValue);

interface MessageProviderProps {
  children: ReactNode;
}

export const MessageProvider = (props: MessageProviderProps) => {
  const { children } = props;
  const { socket, user } = useSocket();

  const { markMessageAsRead, unreadMessages } = useUnreadMessages();

  const { markMentionsAsRead, unreadMentions } = useChannelMentions();
  //TODO: fix
  const { updateLastSeenMessage } = useLastSeenMessage() as any;

  const { getMessageHistoryById, handleUpdateMessageHistory } =
    useMessageHistory();

  const socketRef = useRef(socket);

  useEffect(() => {
    socketRef.current = socket;
  }, [socket]);

  const sendMessage = useCallback(
    (message: Partial<MessageV1>, medias: Media[]) => {
      const media = medias.map((media) => ({
        filename: media.file.name,
        kind: media.fileKind,
        path: media.path,
        size: media.file.size,
        width: media.width,
        height: media.height,
      }));

      socketRef.current?.emit(
        "message:create",
        message,
        media as any //TODO fix
      );

      const messageWithMedia = {
        ...message,
        id: createId(),
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
        media: media as any,
      } as any; // TODO: fix

      if (message.channelId && message.senderId === user?.id) return;

      handleUpdateMessageHistory(messageWithMedia);
    },
    [handleUpdateMessageHistory, user?.id]
  );

  const value: MessageContextValue = {
    sendMessage,
    unreadMentions,
    markMentionsAsRead,
    updateLastSeenMessage,
    getMessageHistoryById,
    unreadMessages,
    markMessageAsRead,
  };

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};
