import { MembershipRole, GlobalRole } from "@prisma/client";

export type HandlerContext = {
  id: number;
  userId: string;
  membershipRoles: Record<string, MembershipRole>;
  globalRole: GlobalRole;
  currentOrganisationId: string;
  SECRET: string;
  helpers: {
    jwtSign: (payload: any) => string;
    setCookie: (name: string, value: string, options: any) => void;
    deleteCookie: (name: string) => void;
    setHeader: (name: string, value: string) => void;
    setStatusCode: (code: number) => void;
    verifyPassword: (a: string, b: string) => Promise<boolean>;
    hashPassword: (a: string) => Promise<string>;
    getHeader: (name: string) => string;
    io: {
      emit: (event: string, payload: any) => void;
    };
  };
};
