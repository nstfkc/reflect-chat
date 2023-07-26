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
  updateMessage: (message: Message) => Promise<MessageWithThread>;
  messageSubject: Subject<Message>;
  messageUpdateSubject: Subject<Message>;
  mentionSubject: Subject<Message>;
  args: ChatArgs;
}

export function createChat(params: ChatParams) {
  let isActive = false;
  let messages: Record<string, MessageWithThread> = {};

  const getMessages = () => insertDateBetweenMessages(Object.values(messages));
  const messages$ = new Subject(getMessages());
  const unseenMessageIds$ = new Subject<Set<number>>(new Set());
  const unseenMentions$ = new Subject<Set<number>>(new Set());

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

  const updateMessage = (message: Message) => {
    console.log({ message });
    const { thread } = messages[message.publicId];
    messages[message.publicId] = { ...message, thread };
    messages$.next(getMessages());
    params.updateMessage(message).then((message) => {});
  };

  const canMessageBeCollected = (message: Message) => {
    return params.args.kind === "thread"
      ? message.conversationId === params.args.conversationId
      : params.args.kind === "channel"
      ? message.channelId === params.args.channelId
      : params.args.kind === "dm"
      ? (message.senderId === params.args.receiverId &&
          message.receiverId === params.user.id) ||
        (message.receiverId === params.args.receiverId &&
          message.senderId === params.user.id)
      : false;
  };

  const handleCreateMessage = (message: Message) => {
    if (messages[message.publicId]) {
      return;
    }

    const collect = canMessageBeCollected(message);

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
      unseenMessageIds$.next(
        new Set(unseenMessageIds$.getValue().add(message.id))
      );
    }

    messages[message.publicId] = { thread: [], ...message };
    messages$.next(getMessages());
  };

  const handleUpdateMessage = (message: Message) => {
    const collect = canMessageBeCollected(message);
    if (!collect) return;
    const { thread = [] } = messages?.[message.publicId] ?? {};
    messages[message.publicId] = { ...message, thread };
    messages$.next(getMessages());
  };

  const handleNewMention = (message: Message) => {
    const collect = canMessageBeCollected(message);
    if (!collect) {
      return;
    }
    const current = unseenMentions$.getValue();
    current.add(message.id);
    unseenMentions$.next(new Set(current));
  };

  const unsubscribeMessageSubscription =
    params.messageSubject.subscribe(handleCreateMessage);

  const unsubscribeMessageUpdateSubscription =
    params.messageUpdateSubject.subscribe(handleUpdateMessage);

  const unsubscribeMentionSubscription =
    params.mentionSubject.subscribe(handleNewMention);

  const handleReadMessage = (message: Message) => {
    const newSet = unseenMessageIds$.getValue();
    newSet.delete(message.id);
    unseenMessageIds$.next(new Set(newSet));

    const newMentionSet = unseenMentions$.getValue();
    if (newMentionSet.has(message.id)) {
      newMentionSet.delete(message.id);
      unseenMentions$.next(new Set(newMentionSet));
    }
  };

  const activate = () => {
    isActive = true;
  };

  const deactivate = () => {
    isActive = false;
  };

  const destroy = () => {
    unsubscribeMessageSubscription();
    unsubscribeMentionSubscription();
    unsubscribeMessageUpdateSubscription();
  };

  params.fetchMessages().then((_messages) => {
    messages = Object.fromEntries(
      _messages.map((message) => [message.publicId, message])
    );
    messages$.next(getMessages());
  });

  return {
    createMessage,
    updateMessage,
    messages$,
    unseenMessageIds$,
    unseenMentions$,
    destroy,
    activate,
    deactivate,
    handleCreateMessage,
    handleReadMessage,
    getAllMessages: () => messages,
  };
}

export type Chat = ReturnType<typeof createChat>;
