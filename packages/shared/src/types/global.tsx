import type { Media, Message } from "db";

export type MessageV1WithMedia = Message & { media: Media[] };
export type MessageMedia = Media;
export type User = {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  fullname: string;
};
