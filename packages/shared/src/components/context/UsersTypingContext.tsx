import { PropsWithChildren, createContext, useState, useRef } from "react";
import { useSocket } from "./SocketContext";

type SetUserTyping = (payload: {
  channelOrUserId: string;
  userId: string;
}) => void;

interface UsersTypingContextValue {
  typingUsersByChannelId: Map<string, Set<string>>;
  setUserTyping: SetUserTyping;
}

export const UsersTypingContext = createContext({
  typingUsersByChannelId: new Map<string, Set<string>>(),
  setUserTyping: () => {},
} as UsersTypingContextValue);

export const UsersTypingProvider = (props: PropsWithChildren) => {
  const [typingUsersByChannelId, setTypingUsersByChannelId] = useState(
    new Map<string, Set<string>>()
  );

  const timerRefs = useRef(new Map<string, NodeJS.Timer>());

  const removeUserFromTyping = (payload: {
    channelOrUserId: string;
    userId: string;
  }) => {
    setTypingUsersByChannelId((current) => {
      if (current.has(payload.channelOrUserId)) {
        current.get(payload.channelOrUserId).delete(payload.userId);
        return new Map(current);
      }
      return current;
    });
  };

  const { socket } = useSocket("user-typing", ({ channelOrUserId, userId }) => {
    const key = `${channelOrUserId}-${userId}`;

    if (timerRefs.current.get(key)) {
      clearTimeout(timerRefs.current.get(key));
    }

    setTypingUsersByChannelId((current) => {
      if (!current.get(channelOrUserId)) {
        current.set(channelOrUserId, new Set<string>());
      }
      current.get(channelOrUserId).add(userId);
      return new Map(current);
    });

    timerRefs.current.set(
      key,
      setTimeout(() => {
        removeUserFromTyping({ channelOrUserId, userId });
      }, 25000)
    );
  });

  useSocket("message:created", (message) => {
    const { channelId, senderId } = message;
    if (channelId) {
      removeUserFromTyping({ channelOrUserId: channelId, userId: senderId });
    } else {
      removeUserFromTyping({ channelOrUserId: senderId, userId: senderId });
    }
  });

  const setUserTyping: SetUserTyping = ({ channelOrUserId, userId }) => {
    socket.emit("user-typing", { channelOrUserId, userId });
  };

  return (
    <UsersTypingContext.Provider
      value={{ typingUsersByChannelId, setUserTyping }}
    >
      {props.children}
    </UsersTypingContext.Provider>
  );
};
