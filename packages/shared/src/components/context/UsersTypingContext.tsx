import { PropsWithChildren, createContext, useState, useRef } from "react";
import { useSocket } from "./SocketContext";

interface UsersTypingContextValue {
  typingUsersByChannelId: Map<number, Set<number>>;
}

export const UsersTypingContext = createContext({
  typingUsersByChannelId: new Map<number, Set<number>>(),
} as UsersTypingContextValue);

export const UsersTypingProvider = (props: PropsWithChildren) => {
  const [typingUsersByChannelId, setTypingUsersByChannelId] = useState(
    new Map<number, Set<number>>()
  );

  const timerRefs = useRef(new Map<string, NodeJS.Timer>());

  const removeUserFromTyping = (payload: {
    channelOrUserId: number;
    userId: number;
  }) => {
    setTypingUsersByChannelId((current) => {
      if (current.has(payload.channelOrUserId)) {
        current.get(payload.channelOrUserId).delete(payload.userId);
        return new Map(current);
      }
      return current;
    });
  };

  useSocket("user-typing", ({ channelOrUserId, userId }) => {
    const key = `${channelOrUserId}-${userId}`;

    if (timerRefs.current.get(key)) {
      clearTimeout(timerRefs.current.get(key));
    }

    setTypingUsersByChannelId((current) => {
      if (!current.get(channelOrUserId)) {
        current.set(channelOrUserId, new Set<number>());
      }
      current.get(channelOrUserId).add(userId);
      return new Map(current);
    });

    timerRefs.current.set(
      key,
      setTimeout(() => {
        removeUserFromTyping({ channelOrUserId, userId });
      }, 5000)
    );
  });

  useSocket("message:created", (message) => {
    const { channelId, senderId } = message;
    console.log({ message });
    if (channelId) {
      console.log("a");
      removeUserFromTyping({ channelOrUserId: channelId, userId: senderId });
    } else {
      console.log("b");
      removeUserFromTyping({ channelOrUserId: senderId, userId: senderId });
    }
  });

  return (
    <UsersTypingContext.Provider value={{ typingUsersByChannelId }}>
      {props.children}
    </UsersTypingContext.Provider>
  );
};
