"use client";

import { createId } from "@paralleldrive/cuid2";
import { debounce } from "ts-debounce";
import { Message } from "db";
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
import { MessageWithMedia } from "../../../types/global";
import { RawMedia } from "../../ui/Chat/FileUploader";
import { useUser } from "../../../auth";

function useMappedState<T>() {
  const store = useRef(new Map<string, Set<T>>());

  const [state, setState] = useState<Record<string, Set<T>>>(
    Object.fromEntries(store.current)
  );

  const addItem = (key: string, item: T) => {
    setState(() => {
      if (!store.current.has(key)) {
        store.current.set(key, new Set<T>());
      }
      const currentItems = store.current.get(key);

      currentItems?.add(item);
      return Object.fromEntries(store.current);
    });
  };

  const removeItem = (key: string, predicate: (t: T) => boolean) => {
    setState((state) => {
      const currentItems = store.current.get(key);
      if (typeof currentItems?.delete === "function") {
        let itemToRemove: T | null = null;
        for (const item of currentItems) {
          if (predicate(item)) {
            itemToRemove = item;
          }
        }
        currentItems.delete(itemToRemove);
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
  const { addItem, removeItem, state } = useMappedState<Message>();

  const { socket } = useSocket();

  const markMessageAsRead = useCallback(
    // parentId => senderId, channelId, conversationId
    (parentId: string) => (messageId: number) => {
      removeItem(`key-${parentId}`, (message) => message.id === messageId);
    },
    [removeItem]
  );

  const handler = useCallback(
    (message: Message) => {
      if (message.channelId) {
        addItem(`key-${message.channelId}`, message);
      }
      if (message.receiverId) {
        addItem(`key-${message.senderId}`, message);
      }
      if (message.conversationId) {
        addItem(`key-${message.conversationId}`, message);
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

  const markMentionsAsRead = useCallback(
    (channelId: number) => (messageId: number) => {
      removeItem(`key-${channelId}`, (item) => item === messageId);
    },
    [removeItem]
  );

  const handler = useCallback(
    (params: { message: Message }) => {
      const { message } = params;
      if (message.channelId) {
        addItem(`key-${message.channelId}`, message.id);
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
  const [lastSeenMessage, setLastSeenMessage] = useState<null | Message>(null);

  const { socket } = useSocket();

  function updateLastSeenMessage(message: Message) {
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
  const dmHistoryMapRef = useRef(new Map<number, MessageWithMedia[]>());
  const { user } = useUser();
  const { socket } = useSocket();

  const [dmHistory, setDmHistory] = useState(dmHistoryMapRef.current);

  const handleUpdateMessageHistory = useCallback(
    (dm: MessageWithMedia) => {
      let key: number;

      if (dm.receiverId) {
        key = dm.senderId === user?.id ? dm.receiverId : dm.senderId;
      }

      if (dm.channelId) {
        key = dm.channelId;
      }

      if (dm.conversationId) {
        key = dm.conversationId;
      }

      if (!dmHistoryMapRef.current.has(key)) {
        !dmHistoryMapRef.current.set(key, []);
      }

      const current = dmHistoryMapRef.current.get(key)!;
      const messageExists = current.find(
        (message) => message.publicId === dm.publicId
      );

      console.log({ messageExists });
      if (messageExists) {
        current.map((message) => {
          if (message.publicId === dm.publicId) {
            return dm;
          }
          return message;
        });
      } else {
        current.push(dm);
      }
      dmHistoryMapRef.current.set(key, [...current]);
      console.log(dmHistoryMapRef.current.get(key));
      setDmHistory(new Map(dmHistoryMapRef.current));
    },
    [user?.id]
  );

  const handleUpdateMessageHistoryInternal = useCallback(
    (dm: MessageWithMedia) => {
      if (dm.senderId === user.id) {
        return;
      }
      let key: number;

      if (dm.receiverId) {
        key = dm.senderId === user?.id ? dm.receiverId : dm.senderId;
      }

      if (dm.channelId) {
        key = dm.channelId;
      }

      if (dm.conversationId) {
        key = dm.conversationId;
      }

      if (!dmHistoryMapRef.current.has(key)) {
        !dmHistoryMapRef.current.set(key, []);
      }

      const current = dmHistoryMapRef.current.get(key)!;
      const messageExists = current.find(
        (message) => message.publicId === dm.publicId
      );
      if (messageExists) {
        current.map((message) => {
          if (message.publicId === dm.publicId) {
            return dm;
          }
          return message;
        });
      } else {
        current.push(dm);
      }
      dmHistoryMapRef.current.set(key, [...current]);
      setDmHistory(new Map(dmHistoryMapRef.current));
    },
    [user?.id]
  );

  useEffect(() => {
    socket?.on("message:created", handleUpdateMessageHistoryInternal);
    return () => {
      socket?.off("message:created", handleUpdateMessageHistoryInternal);
    };
  }, [socket, handleUpdateMessageHistoryInternal]);

  useEffect(() => {
    socket?.on("message:updated", handleUpdateMessageHistoryInternal);
    return () => {
      socket?.off("message:updated", handleUpdateMessageHistoryInternal);
    };
  }, [socket, handleUpdateMessageHistoryInternal]);

  const getMessageHistoryById = (id: number) => {
    return dmHistory.get(id) ?? [];
  };

  return {
    dmHistory,
    getMessageHistoryById,
    handleUpdateMessageHistory,
  };
}

interface MessageContextValue {
  sendMessage: (cm: Partial<Message>, media: RawMedia[]) => void;
  updateMessage: (cm: Partial<Message>, media: RawMedia[]) => void;

  unreadMessages: Record<string, Set<Message>>;
  markMessageAsRead: (channelId: number) => (messageId: number) => void;

  unreadMentions: Record<string, Set<string>>;
  markMentionsAsRead: (channelId: number) => (messageId: number) => void;

  updateLastSeenMessage: (message: Message) => void;
  getMessageHistoryById: (id: number) => MessageWithMedia[];

  canSendMessage: boolean;
}

export const MessageContext = createContext({} as MessageContextValue);

interface MessageProviderProps {
  children: ReactNode;
}

export const MessageProvider = (props: MessageProviderProps) => {
  const { children } = props;
  const { socket, connected } = useSocket();

  const { markMessageAsRead, unreadMessages } = useUnreadMessages();
  const { markMentionsAsRead, unreadMentions } = useChannelMentions();
  const { updateLastSeenMessage } = useLastSeenMessage();

  const { getMessageHistoryById, handleUpdateMessageHistory } =
    useMessageHistory();

  const sendMessage = useCallback(
    (message: Partial<Message>, medias: RawMedia[]) => {
      const media = medias.map((media) => ({
        filename: media.file.name,
        kind: media.fileKind,
        path: media.path,
        size: media.file.size,
        width: media.width,
        height: media.height,
      }));

      try {
        socket.emit(
          "message:create",
          message,
          media as any //TODO fix
        );
      } catch (err) {
        console.log(err);
      }

      const messageWithMedia = {
        ...message,
        id: createId(),
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
        media: media as any,
      } as any; // TODO: fix

      handleUpdateMessageHistory(messageWithMedia);
    },
    [handleUpdateMessageHistory, socket]
  );

  const updateMessage = useCallback(
    (message: Partial<Message>, medias: RawMedia[]) => {
      const media = medias.map((media) => ({
        filename: media.file.name,
        kind: media.fileKind,
        path: media.path,
        size: media.file.size,
        width: media.width,
        height: media.height,
      }));

      try {
        socket.emit(
          "message:update",
          message,
          media as any //TODO fix
        );
      } catch (err) {
        console.log(err);
      }

      const messageWithMedia = {
        ...message,
        media: media as any,
      } as any; // TODO: fix

      handleUpdateMessageHistory(messageWithMedia);
    },
    [handleUpdateMessageHistory, socket]
  );

  const value = {
    sendMessage,
    updateMessage,
    getMessageHistoryById,
    updateLastSeenMessage,
    unreadMentions,
    markMentionsAsRead,
    unreadMessages,
    markMessageAsRead,
    canSendMessage: connected,
  };

  return (
    <MessageContext.Provider value={value as any}>
      {children}
    </MessageContext.Provider>
  );
};
