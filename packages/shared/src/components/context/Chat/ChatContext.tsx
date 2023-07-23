import { Message } from "@prisma/client";
import { PropsWithChildren, createContext, useRef } from "react";
import { Chat, ChatArgs, createChat } from "./Chat";
import { useUser } from "../../../auth";
import { useSocket } from "../SocketContext";
import { useMutation } from "../../../utils/useMutation";
import { useLazyQuery } from "../../../utils/useLazyQuery";

interface ChatContextValue {
  getChat: (args: ChatArgs) => Chat;
  getMessageByPublicId: (publicId: string) => Message | null;
}

export const ChatContext = createContext({} as ChatContextValue);

export const ChatProvider = (props: PropsWithChildren) => {
  const chatListRef = useRef(new Map<string, Chat>());
  const { user } = useUser();
  const { socket } = useSocket();
  const { trigger } = useMutation("createMessage");
  const listDirectMessages = useLazyQuery("listDMMessages");
  const listChannelMessages = useLazyQuery("listChannelMessages");
  const listThreadMessages = useLazyQuery("listThreadMessages");

  if (!socket) {
    return null;
  }

  const getChat = (args: ChatArgs, streamSize = 10) => {
    const { kind, ...rest } = args;
    const id = [kind, ...Object.values(rest)].join("-");

    if (!chatListRef.current.has(id)) {
      let parentChat = null;
      if (args.kind === "thread") {
        if (chatListRef.current.has(`dm-${args.conversationId}`)) {
          parentChat = chatListRef.current.get(`dm-${args.conversationId}`);
        }
        if (chatListRef.current.has(`channel-${args.conversationId}`)) {
          parentChat = chatListRef.current.get(
            `channel-${args.conversationId}`
          );
        }
      }
      chatListRef.current.set(
        id,
        createChat({
          args,
          user,
          streamSize,
          socket,
          parentChat,
          fetchMessages: () =>
            args.kind === "channel"
              ? listChannelMessages({ channelId: args.channelId })
              : args.kind === "dm"
              ? listDirectMessages({ receiverId: args.receiverId })
              : listThreadMessages({ conversationId: args.conversationId }),
          createMessage: (message) =>
            trigger(message).then((res) =>
              res.success === true ? res.data : null
            ),
        })
      );
    }
    return chatListRef.current.get(id);
  };

  const getMessageByPublicId = (publicId: string): Message | null => {
    for (const [, chat] of chatListRef.current) {
      const allMessages = chat?.getAllMessages();
      if (allMessages[publicId]) {
        return allMessages[publicId];
      }
    }
    return null;
  };

  return (
    <ChatContext.Provider value={{ getChat, getMessageByPublicId }}>
      {props.children}
    </ChatContext.Provider>
  );
};
