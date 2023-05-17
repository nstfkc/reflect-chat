import type { Channel, Prisma } from "db";

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
};
