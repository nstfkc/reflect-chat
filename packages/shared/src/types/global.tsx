import type { Media, Message, Reaction } from "db";

export type MessageWithMedia = Message & { media: Media[] };
export type MessageWithThread = Message & { thread: Message[] } & {
  reactions: Reaction[];
};
export type MessageMedia = Media;
