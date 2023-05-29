import * as m from "./mutations";
import * as q from "./queries";

export const mutations = {
  createChannel: m.handleChannelCreate,
  createOrganisation: m.handleOrganisationCreate,
};

export const queries = {
  "/auth/me": q.me,
  listChannels: q.queryChanelList,
};

export type Queries = typeof queries;
export type Mutations = typeof mutations;
