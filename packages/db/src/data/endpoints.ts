import { handleChannelCreate } from "./handlers";

export const mutations = {
  "/channel/create": handleChannelCreate,
};

export type Mutations = typeof mutations;
