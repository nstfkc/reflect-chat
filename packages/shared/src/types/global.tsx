import type { Media, MessageV1 } from "db";

export type MessageV1WithMedia = MessageV1 & { media: Media[] };
export type MessageMedia = Media;
export type User = {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  fullname: string;
};
