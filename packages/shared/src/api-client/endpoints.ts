import { handleChannelCreate } from "./handlers";

export const queries = {
  "/channel/create": handleChannelCreate,
};

export type Queries = typeof queries;
