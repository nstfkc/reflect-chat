import type { Media, Message } from "db";

export type MessageWithMedia = Message & { media: Media[] };
export type MessageMedia = Media;

export type UserStatus = "online" | "busy" | "offline";
