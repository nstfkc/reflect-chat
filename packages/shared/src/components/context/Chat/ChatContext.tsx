import { Message, Reaction } from "@prisma/client";
import { PropsWithChildren, createContext, useContext, useRef } from "react";
import { Chat, ChatArgs, createChat } from "./Chat";
import { useUser } from "../../../auth";
import { useSocket } from "../SocketContext";
import { useMutation } from "../../../utils/useMutation";
import { useLazyQuery } from "../../../utils/useLazyQuery";
import { OrganisationContext } from "../OrganisationContext/OrganisationContext";
import { Subject } from "../../../utils/Subject";
import {
  SocketContext,
  UserIsTypingPayload,
} from "../SocketContext/SocketContext";

interface ChatContextValue {
  getChat: (args: ChatArgs) => Chat;
  getMessageByPublicId: (publicId: string) => Message | null;
  directMessageUserIds$: Subject<number[]>;
}

export const ChatContext = createContext({} as ChatContextValue);

export const ChatProvider = (props: PropsWithChildren) => {
  const { user } = useUser();
  const { directMessageUserIds, channels, users } =
    useContext(OrganisationContext);

  const { trigger: triggerCreateMessage } = useMutation("createMessage");
  const { trigger: triggerUpdateMessage } = useMutation("updateMessage");
  const { trigger: triggerCreateReaction } = useMutation("createReaction");
  const { trigger: triggerDeleteReaction } = useMutation("deleteReaction");

  const listDirectMessages = useLazyQuery("listDMMessages");
  const listChannelMessages = useLazyQuery("listChannelMessages");
  const listThreadMessages = useLazyQuery("listThreadMessages");

  const directMessageUserIds$ = new Subject(
    users
      .filter((user) => directMessageUserIds.includes(user.id))
      .map((user) => user.id)
  );

  const messageSubject = new Subject<Message>({} as Message);
  const messageUpdateSubject = new Subject<Message>({} as Message);
  const mentionSubject = new Subject<Message>({} as Message);
  const reactionSubject = new Subject<Reaction>({} as Reaction);
  const reactionDeleteSubject = new Subject<Reaction>({} as Reaction);
  const whoIsTypingSubject = new Subject({} as UserIsTypingPayload);

  const { socket, debug } = useContext(SocketContext);

  useSocket("message:created", (message) => {
    let userIdToAddDMUserIds: number | null = null;
    if (message.receiverId === user.id) {
      userIdToAddDMUserIds = message.senderId;
    }
    if (message.senderId === user.id) {
      userIdToAddDMUserIds = message.receiverId;
    }

    const currentUserIds = directMessageUserIds$.getValue();
    const shouldAddUser = !currentUserIds.includes(message.senderId);
    if (shouldAddUser && userIdToAddDMUserIds) {
      directMessageUserIds$.next([...currentUserIds, userIdToAddDMUserIds]);
    }
    messageSubject.next(message);
  });

  useSocket("message:updated", (message) => {
    messageUpdateSubject.next(message);
  });

  useSocket("new-mention", ({ message }) => {
    mentionSubject.next(message);
  });

  useSocket("reaction:created", (reaction) => {
    reactionSubject.next(reaction);
  });

  useSocket("reaction:deleted", (reaction) => {
    reactionDeleteSubject.next(reaction);
  });

  useSocket("user-typing", (payload) => {
    whoIsTypingSubject.next(payload);
  });

  const createNewChat = (args: ChatArgs) => {
    const chat = createChat({
      args,
      user,
      messageSubject,
      mentionSubject,
      reactionSubject,
      reactionDeleteSubject,
      messageUpdateSubject,
      whoIsTypingSubject,
      emitWhoIsTyping: () => {
        debug();
        try {
          socket.emit("user-typing", { ...args, userId: user.id });
        } catch (err) {
          console.log(err);
        }
      },

      fetchMessages: () =>
        args.kind === "channel"
          ? listChannelMessages({ channelId: args.channelId })
          : args.kind === "dm"
          ? listDirectMessages({
              receiverId: args.receiverId,
            })
          : listThreadMessages({ conversationId: args.conversationId }),
      createMessage: (message) =>
        triggerCreateMessage(message).then((res) => {
          if (res.success === true) {
            socket.emit("message:create", res.data);
            return res.data;
          }
        }),
      updateMessage: (message) =>
        triggerUpdateMessage({
          publicId: message.publicId,
          text: message.text,
        }).then((res) => {
          if (res.success === true) {
            socket.emit("message:update", res.data);
            return res.data;
          }
        }) as any, // TODO: fix
      createReaction: ({ messageId, unified }) =>
        triggerCreateReaction({ messageId, unified }).then((res) => {
          if (res.success === true) {
            socket.emit("reaction:create", res.data);
            return res.data;
          }
        }),
      deleteReaction: (reaction) => {
        return triggerDeleteReaction({ id: reaction.id }).then((res) => {
          if (res.success === true) {
            socket.emit("reaction:delete", res.data);
            return res.data;
          }
        });
      },
    });
    return chat;
  };

  const map = new Map<string, Chat>();

  for (const dmId of directMessageUserIds) {
    map.set(`dm-${dmId}`, createNewChat({ kind: "dm", receiverId: dmId }));
  }

  for (const channel of channels) {
    map.set(
      `channel-${channel.id}`,
      createNewChat({ kind: "channel", channelId: channel.id })
    );
  }

  const chatListRef = useRef(map);

  if (!socket) {
    return null;
  }

  const getChat = (args: ChatArgs) => {
    const { kind, ...rest } = args;
    const id = [kind, ...Object.values(rest)].join("-");

    if (!chatListRef.current.has(id)) {
      chatListRef.current.set(id, createNewChat(args));
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
    <ChatContext.Provider
      value={{ getChat, getMessageByPublicId, directMessageUserIds$ }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};
