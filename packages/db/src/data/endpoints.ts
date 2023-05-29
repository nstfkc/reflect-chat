import * as m from "./mutations";
import * as q from "./queries";

export const mutations = m;
export const queries = q;

export type Queries = typeof queries;
export type Mutations = typeof mutations;
