import type { Media, Message } from "db";

export type MessageWithMedia = Message & { media: Media[] };
export type MessageWithThread = Message & { thread: Message[] };
export type MessageMedia = Media;
