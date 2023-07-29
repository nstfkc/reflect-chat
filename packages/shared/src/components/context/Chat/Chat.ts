import { debounce } from "ts-debounce";
import { User, Message, Reaction } from "@prisma/client";
import { createId } from "@paralleldrive/cuid2";
import { insertDateBetweenMessages } from "../../ui/Chat/utils";
import { Subject } from "../../../utils/Subject";
import { MessageWithThread } from "../../../types/global";
import { UserIsTypingPayload } from "../SocketContext/SocketContext";

export type ChatArgs =
  | { kind: "thread"; conversationId: number }
  | { kind: "channel"; channelId: number }
  | { kind: "dm"; receiverId: number };

interface ChatParams {
  user: User;
  fetchMessages: () => Promise<MessageWithThread[]>;
  createMessage: (message: Partial<Message>) => Promise<MessageWithThread>;
  updateMessage: (message: Message) => Promise<MessageWithThread>;
  createReaction: (params: {
    unified: string;
    messageId: number;
  }) => Promise<Reaction>;
  deleteReaction: (reaction: Reaction) => Promise<Reaction>;
  emitWhoIsTyping: VoidFunction;
  messageSubject: Subject<Message>;
  messageUpdateSubject: Subject<Message>;
  mentionSubject: Subject<Message>;
  reactionSubject: Subject<Reaction>;
  reactionDeleteSubject: Subject<Reaction>;
  whoIsTypingSubject: Subject<UserIsTypingPayload>;
  args: ChatArgs;
}

export function createChat(params: ChatParams) {
  let isActive = false;
  let messages: Record<string, MessageWithThread> = {};

  let whoIsTyping: Set<number> = new Set();
  let whoIsTypingTimers: Map<number, NodeJS.Timer> = new Map();

  const getMessages = () => insertDateBetweenMessages(Object.values(messages));
  const messages$ = new Subject(getMessages());
  const unseenMessageIds$ = new Subject<Set<number>>(new Set());
  const unseenMentions$ = new Subject<Set<number>>(new Set());
  const whoIsTyping$ = new Subject<Set<number>>(new Set());

  params.fetchMessages().then((_messages) => {
    messages = Object.fromEntries(
      _messages.map((message) => [message.publicId, message])
    );
    messages$.next(getMessages());
  });

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
    const { thread, reactions } = messages[message.publicId];
    messages[message.publicId] = { ...message, thread, reactions };
    messages$.next(getMessages());
    params.updateMessage(message).then((message) => {});
  };

  const createReaction = (args: { unified: string; messageId: number }) => {
    const messageToAddReaction = Object.values(messages).find(
      (message) => message.id === args.messageId
    );
    const { reactions } = messages[messageToAddReaction.publicId];
    const itExists = reactions.find(
      (reaction) =>
        reaction.unified === args.unified && reaction.userId === params.user.id
    );
    if (itExists) {
      return;
    }
    messages[messageToAddReaction.publicId] = {
      ...messageToAddReaction,
      reactions: [
        ...reactions,
        {
          createdAt: null,
          unified: args.unified,
          messageId: args.messageId,
          userId: params.user.id,
          id: Date.now(),
        },
      ],
    };
    messages$.next(getMessages());
    params.createReaction({ ...args }).then((reaction) => {
      const { reactions } = messages[messageToAddReaction.publicId];
      messages[messageToAddReaction.publicId] = {
        ...messageToAddReaction,
        reactions: [
          ...reactions.map((_reaction) => {
            if (
              _reaction.unified === args.unified &&
              _reaction.userId === params.user.id
            ) {
              return reaction;
            }
            return _reaction;
          }),
        ],
      };
      messages$.next(getMessages());
    });
  };

  const deleteReaction = (reaction: Reaction) => {
    const messageToRemoveReaction = Object.values(messages).find(
      (message) => message.id === reaction.messageId
    );
    const { reactions } = messages[messageToRemoveReaction.publicId];
    messages[messageToRemoveReaction.publicId] = {
      ...messageToRemoveReaction,
      reactions: [
        ...reactions.filter(
          (_reaction) =>
            !(
              _reaction.unified === reaction.unified &&
              _reaction.userId === params.user.id
            )
        ),
        ,
      ],
    };
    messages$.next(getMessages());
    params.deleteReaction(reaction);
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

    messages[message.publicId] = { thread: [], reactions: [], ...message };
    messages$.next(getMessages());

    whoIsTyping.delete(message.senderId);
    whoIsTyping$.next(new Set(whoIsTyping));
  };

  const handleUpdateMessage = (message: Message) => {
    const collect = canMessageBeCollected(message);
    if (!collect) return;
    const { thread = [], reactions = [] } = messages?.[message.publicId] ?? {};
    messages[message.publicId] = { ...message, thread, reactions };
    messages$.next(getMessages());
  };

  const handleCreateMention = (message: Message) => {
    const collect = canMessageBeCollected(message);
    if (!collect) {
      return;
    }
    const current = unseenMentions$.getValue();
    current.add(message.id);
    unseenMentions$.next(new Set(current));
  };

  const handleCreateReaction = (reaction: Reaction) => {
    if (reaction.userId === params.user.id) {
      return;
    }
    const messageToAddReaction = Object.values(messages).find(
      (message) => message.id === reaction.messageId
    );
    if (messageToAddReaction) {
      messages[messageToAddReaction.publicId] = {
        ...messageToAddReaction,
        reactions: [...messageToAddReaction.reactions, reaction],
      };
      messages$.next(getMessages());
    }
  };

  const handleDeleteReaction = (reaction: Reaction) => {
    const messageToRemoveReaction = Object.values(messages).find(
      (message) => message.id === reaction.messageId
    );
    if (!messageToRemoveReaction) {
      return;
    }
    const { reactions } = messages[messageToRemoveReaction.publicId];
    messages[messageToRemoveReaction.publicId] = {
      ...messageToRemoveReaction,
      reactions: [
        ...reactions.filter((_reaction) => _reaction.id !== reaction.id),
      ],
    };
    messages$.next(getMessages());
  };

  const handleAddWhoIsTyping = (payload: UserIsTypingPayload) => {
    function canCollect() {
      if (params.args.kind === payload.kind) {
        if (params.args.kind === "channel" && payload.kind === "channel") {
          return params.args.channelId === payload.channelId;
        }
        if (params.args.kind === "thread" && payload.kind === "thread") {
          return params.args.conversationId === payload.conversationId;
        }
        if (params.args.kind === "dm" && payload.kind === "dm") {
          return payload.receiverId === params.user.id;
        }
        return false;
      }
    }

    if (!canCollect()) return;

    const key = payload.userId;

    if (whoIsTypingTimers.get(payload.userId)) {
      clearTimeout(whoIsTypingTimers.get(key));
    }

    whoIsTyping.add(payload.userId);

    whoIsTypingTimers.set(
      key,
      setTimeout(() => {
        whoIsTyping.delete(payload.userId);
        whoIsTyping$.next(new Set(whoIsTyping));
      }, 5000)
    );

    whoIsTyping$.next(new Set(whoIsTyping));
  };

  const unsubscribeWhoIsTyping =
    params.whoIsTypingSubject.subscribe(handleAddWhoIsTyping);

  const unsubscribeMessageSubscription =
    params.messageSubject.subscribe(handleCreateMessage);

  const unsubscribeMessageUpdateSubscription =
    params.messageUpdateSubject.subscribe(handleUpdateMessage);

  const unsubscribeMentionSubscription =
    params.mentionSubject.subscribe(handleCreateMention);

  const unsubscribeReactionSubscription =
    params.reactionSubject.subscribe(handleCreateReaction);

  const unsubscribeReactionDeleteSubscription =
    params.reactionDeleteSubject.subscribe(handleDeleteReaction);

  const destroy = () => {
    unsubscribeMessageSubscription();
    unsubscribeMentionSubscription();
    unsubscribeMessageUpdateSubscription();
    unsubscribeReactionSubscription();
    unsubscribeReactionDeleteSubscription();
    unsubscribeWhoIsTyping();
  };

  const activate = () => {
    isActive = true;
  };

  const deactivate = () => {
    isActive = false;
  };

  return {
    createMessage,
    updateMessage,
    createReaction,
    deleteReaction,
    messages$,
    unseenMessageIds$,
    unseenMentions$,
    whoIsTyping$,
    destroy,
    activate,
    deactivate,
    handleCreateMessage,
    handleReadMessage,
    handleTextUpdate: debounce(() => params.emitWhoIsTyping(), 500),
    getAllMessages: () => messages,
  };
}

export type Chat = ReturnType<typeof createChat>;
