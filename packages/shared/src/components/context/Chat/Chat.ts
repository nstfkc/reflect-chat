import { User, Message } from "@prisma/client";
import { createId } from "@paralleldrive/cuid2";
import { insertDateBetweenMessages } from "../../ui/Chat/utils";
import { Subject } from "../../../utils/Subject";
import { InternalSocket } from "../SocketContext/SocketContext";
import { MessageWithThread } from "../../../types/global";

export type ChatArgs =
  | { kind: "thread"; conversationId: number }
  | { kind: "channel"; channelId: number }
  | { kind: "dm"; receiverId: number };

interface ChatParams {
  user: User;
  socket: InternalSocket;
  streamSize: number;
  fetchMessages: () => Promise<MessageWithThread[]>;
  createMessage: (message: Partial<Message>) => Promise<MessageWithThread>;
  args: ChatArgs;
  parentChat?: Chat;
}

export function createChat(params: ChatParams) {
  let streamSize = params.streamSize;
  let isActive = false;
  let messages: Record<string, MessageWithThread> = {};
  let unseenMessages: Record<string, MessageWithThread> = {};

  const getMessages = () => insertDateBetweenMessages(Object.values(messages));
  const messages$ = new Subject(getMessages());
  const unseenMessages$ = new Subject(Object.values(unseenMessages));

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
      params.socket.emit("message:create", message);
    });
  };

  const editMessage = (message: Partial<Message>) => {};

  const handleCreateMessage = (message: Message) => {
    if (messages[message.publicId] || unseenMessages[message.publicId]) {
      return;
    }
    const collect =
      params.args.kind === "thread"
        ? message.conversationId === params.args.conversationId
        : params.args.kind === "channel"
        ? message.channelId === params.args.channelId
        : params.args.kind === "dm"
        ? message.receiverId === params.user.id
        : false;

    const existInMessages = Object.values(messages).find(
      (m) => m.id === message.conversationId
    );

    const existInUnseenMessages = Object.values(unseenMessages).find(
      (m) => m.id === message.conversationId
    );

    if (existInMessages) {
      messages[existInMessages.publicId].thread.push(message);
      messages$.next(getMessages());
    }

    if (existInUnseenMessages) {
      unseenMessages[existInUnseenMessages.publicId].thread.push(message);
      unseenMessages$.next(Object.values(unseenMessages));
    }

    if (!collect) {
      return null;
    }

    if (isActive) {
      messages[message.publicId] = { thread: [], ...message };
      messages$.next(getMessages());
    } else {
      unseenMessages[message.publicId] = { thread: [], ...message };
      unseenMessages$.next(Object.values(unseenMessages));
    }
  };

  const handleUpdateMessage = (message: Message) => {};

  const activate = () => {
    isActive = true;
  };
  const deactivate = () => {
    isActive = false;
  };
  const setStreamSize = (size: number) => {
    streamSize = size;
  };

  params.socket.on("message:created", handleCreateMessage);
  params.socket.on("message:updated", handleUpdateMessage);

  const destroy = () => {
    params.socket.off("message:created", handleCreateMessage);
    params.socket.off("message:updated", handleUpdateMessage);
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
    setStreamSize,
    destroy,
    activate,
    deactivate,
    getAllMessages: () => ({
      ...messages,
      ...unseenMessages,
    }),
  };
}

export type Chat = ReturnType<typeof createChat>;
