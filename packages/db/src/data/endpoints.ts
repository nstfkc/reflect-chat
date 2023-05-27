import * as m from "./mutations";
import * as q from "./queries";

export const mutations = {
  "/channel/create": m.handleChannelCreate,
};

export const queries = {
  "/auth/me": q.me,
};

export type Queries = typeof queries;
export type Mutations = typeof mutations;
