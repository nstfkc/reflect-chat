import { MembershipRole, GlobalRole } from "@prisma/client";

export type HandlerContext = {
  userId: string;
  membershipRoles: Record<string, MembershipRole>;
  globalRole: GlobalRole;
  // helpers: {
  //   jwtSign: (payload: any) => void;
  //   setCookie: (name: string, value: string, options: any) => void;
  //   deleteCookie: (name: string) => void;
  // };
};
