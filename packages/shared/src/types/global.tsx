import type { Media, MessageV1 } from "db";

export type MessageV1WithMedia = MessageV1 & { media: Media[] };
export type MessageMedia = Media;
