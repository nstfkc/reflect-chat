import * as m from "./mutations";
import * as q from "./queries";

export const mutations = {
  "/channel/create": m.handleChannelCreate,
  "/organisation/create": m.handleOrganisationCreate,
};

export const queries = {
  "/auth/me": q.me,
  "/channel/list": q.queryChanelList,
};

export type Queries = typeof queries;
export type Mutations = typeof mutations;
