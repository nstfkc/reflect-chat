import { User, Message } from "@prisma/client";
import { createId } from "@paralleldrive/cuid2";
import { insertDateBetweenMessages } from "../../ui/Chat/utils";
import { Subject } from "../../../utils/Subject";
import { MessageWithThread } from "../../../types/global";

export type ChatArgs =
  | { kind: "thread"; conversationId: number }
  | { kind: "channel"; channelId: number }
  | { kind: "dm"; receiverId: number };

interface ChatParams {
  user: User;
  fetchMessages: () => Promise<MessageWithThread[]>;
  createMessage: (message: Partial<Message>) => Promise<MessageWithThread>;
  messageSubject: Subject<Message>;
  args: ChatArgs;
}

export function createChat(params: ChatParams) {
  let isActive = false;
  let messages: Record<string, MessageWithThread> = {};

  const getMessages = () => insertDateBetweenMessages(Object.values(messages));
  const messages$ = new Subject(getMessages());
  const unseenMessagesCount$ = new Subject(0);

  const createMessage = (text: string) => {
    const publicId = createId();
    const { kind, ...rest } = params.args;
    const message: Partial<MessageWithThread> = {
      ...rest,
      text,
      publicId,
      senderId: params.user.id,
    };
    messages[publicId] = {
      ...message,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      thread: [],
    } as MessageWithThread;
    messages$.next(getMessages());
    params.createMessage(message).then((message) => {
      messages[publicId] = message;
    });
  };

  const editMessage = (message: Partial<Message>) => {};

  const handleCreateMessage = (message: Message) => {
    if (messages[message.publicId]) {
      return;
    }

    const collect =
      params.args.kind === "thread"
        ? message.conversationId === params.args.conversationId
        : params.args.kind === "channel"
        ? message.channelId === params.args.channelId
        : params.args.kind === "dm"
        ? (message.senderId === params.args.receiverId &&
            message.receiverId === params.user.id) ||
          (message.receiverId === params.args.receiverId &&
            message.senderId === params.user.id)
        : false;

    const existInMessages = Object.values(messages).find(
      (m) => m.id === message.conversationId
    );

    if (existInMessages) {
      messages[existInMessages.publicId].thread.push(message);
      messages$.next(getMessages());
    }

    if (!collect) {
      return null;
    }

    if (!isActive) {
      unseenMessagesCount$.next(unseenMessagesCount$.getValue() + 1);
    }

    messages[message.publicId] = { thread: [], ...message };
    messages$.next(getMessages());
  };

  const unsubscribeMessageSubscription =
    params.messageSubject.subscribe(handleCreateMessage);

  const handleUpdateMessage = (message: Message) => {};

  const activate = () => {
    isActive = true;
  };
  const deactivate = () => {
    isActive = false;
  };

  const destroy = () => {
    unsubscribeMessageSubscription();
  };

  params.fetchMessages().then((_messages) => {
    messages = Object.fromEntries(
      _messages.map((message) => [message.publicId, message])
    );
    messages$.next(getMessages());
  });

  return {
    createMessage,
    editMessage,
    messages$,
    unseenMessagesCount$,
    destroy,
    activate,
    deactivate,
    handleCreateMessage,
    getAllMessages: () => messages,
  };
}

export type Chat = ReturnType<typeof createChat>;
