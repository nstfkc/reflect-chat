import type { Channel, Message, Organisation, Prisma } from "db";
import { User } from "..";

export type Mutations = {
  "/channel/create": {
    takes: Prisma.ChannelCreateInput;
    returns: Channel;
  };
  "/organisation/create": {
    takes: Prisma.OrganisationCreateArgs;
    returns: Organisation;
  };
  "/auth/sign-up": {
    takes: Prisma.UserCreateArgs;
    returns: any;
  };
  "/auth/sign-in": {
    takes: { email: string; password: string };
    returns: any;
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
