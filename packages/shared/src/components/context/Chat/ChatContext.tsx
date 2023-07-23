import { PropsWithChildren, createContext, useRef } from "react";
import { Chat, ChatArgs, createChat } from "./Chat";
import { useUser } from "../../../auth";
import { useSocket } from "../SocketContext";
import { useMutation } from "../../../utils/useMutation";
import { useLazyQuery } from "../../../utils/useLazyQuery";

interface ChatContextValue {
  getChat: (args: ChatArgs) => Chat;
}

export const ChatContext = createContext({} as ChatContextValue);

export const ChatProvider = (props: PropsWithChildren) => {
  const chatListRef = useRef(new Map<string, Chat>());
  const { user } = useUser();
  const { socket } = useSocket();
  const { trigger } = useMutation("createMessage");
  const listDirectMessages = useLazyQuery("listDMMessages");
  const listChannelMessages = useLazyQuery("listChannelMessages");
  const _listThreadMessages = useLazyQuery("listThreadMessages");

  if (!socket) {
    return null;
  }

  const getChat = (args: ChatArgs, streamSize = 10) => {
    const { kind, ...rest } = args;
    const id = [kind, ...Object.values(rest)].join("-");

    if (!chatListRef.current.has(id)) {
      chatListRef.current.set(
        id,
        createChat({
          args,
          user,
          streamSize,
          socket,
          fetchMessages: () =>
            args.kind === "channel"
              ? listChannelMessages({ channelId: args.channelId })
              : args.kind === "dm"
              ? listDirectMessages({ receiverId: args.receiverId })
              : listDirectMessages({ receiverId: 0 }),
          createMessage: (message) =>
            trigger(message).then((res) =>
              res.success === true ? res.data : null
            ),
        })
      );
    }
    return chatListRef.current.get(id);
  };

  return (
    <ChatContext.Provider value={{ getChat }}>
      {props.children}
    </ChatContext.Provider>
  );
};
