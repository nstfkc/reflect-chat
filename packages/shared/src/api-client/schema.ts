import type { Channel, Message, Prisma } from "db";
import { User } from "..";

export type Mutations = {
  "/channel/create": {
    takes: Prisma.ChannelCreateInput;
    returns: Channel;
  };
};

export type Queries = {
  "/channels": {
    takes: {};
    returns: Channel[];
  };
  "/messages": {
    takes: {
      where: Prisma.MessageWhereInput;
    };
    returns: Message[];
  };
  "/users": {
    takes: {};
    returns: User[];
  };
};
