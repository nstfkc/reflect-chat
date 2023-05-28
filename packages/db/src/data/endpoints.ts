import * as m from "./mutations";
import * as q from "./queries";

export const mutations = {
  "/channel/create": m.handleChannelCreate,
} as const;

export const queries = {
  "/auth/me": q.me,
  "/channel/list": q.queryChanelList,
} as const;

export type Queries = typeof queries;
export type Mutations = typeof mutations;
