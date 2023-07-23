import { User, Message } from "@prisma/client";
import { createId } from "@paralleldrive/cuid2";
import { insertDateBetweenMessages } from "../../ui/Chat/utils";
import { Subject } from "../../../utils/Subject";
import { InternalSocket } from "../SocketContext/SocketContext";

export type ChatArgs =
  | { kind: "thread"; conversationId: number }
  | { kind: "channel"; channelId: number }
  | { kind: "dm"; receiverId: number };

interface ChatParams {
  user: User;
  socket: InternalSocket;
  streamSize: number;
  fetchMessages: () => Promise<Message[]>;
  createMessage: (message: Partial<Message>) => Promise<Message>;
  args: ChatArgs;
}

export function createChat(params: ChatParams) {
  let streamSize = params.streamSize;
  let isActive = false;
  let messages: Record<string, Message> = {};
  let unseenMessages: Record<string, Message> = {};

  const getMessages = () => insertDateBetweenMessages(Object.values(messages));
  const messages$ = new Subject(getMessages());
  const unseenMessages$ = new Subject(Object.values(unseenMessages));

  const createMessage = (text: string) => {
    const publicId = createId();
    const { kind, ...rest } = params.args;
    const message: Partial<Message> = {
      ...rest,
      text,
      publicId,
      senderId: params.user.id,
    };
    messages[publicId] = {
      ...message,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    } as Message;
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
    if (isActive) {
      messages[message.publicId] = message;
      messages$.next(getMessages());
    } else {
      unseenMessages[message.publicId] = message;
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
  };
}

export type Chat = ReturnType<typeof createChat>;
