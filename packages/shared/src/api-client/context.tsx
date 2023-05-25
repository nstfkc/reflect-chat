import { MembershipRole, GlobalRole } from "db";

export type Context = {
  userId: string;
  organisationId: string;
  membershipRole: MembershipRole;
  globalRole: GlobalRole;
  helpers: {
    jwtSign: (payload: any) => void;
    setCookie: (name: string, value: string, options: any) => void;
    deleteCookie: (name: string) => void;
  };
};
