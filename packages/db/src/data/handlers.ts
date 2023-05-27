import z from "zod";
import type { ZodObject, ZodRawShape } from "zod";
import { MembershipRole, GlobalRole } from "@prisma/client";
import { HandlerContext } from "./handlerContext";
import {
  insufficientPermissionsError,
  validationError,
  HandlerReturnError,
} from "./error";

type HandlerReturnSuccess<T> = { success: true; data: T };

type HandlerReturn<T> = HandlerReturnSuccess<T> | HandlerReturnError;

type Handler<T, U> = (
  args: T,
  ctx: HandlerContext
) => Promise<HandlerReturn<U>>;

export function createHandler<U, T extends ZodRawShape>(args: {
  schema?: ZodObject<T>;
  handler: Handler<z.infer<typeof args.schema>, U>;
  membershipRoles?: MembershipRole[];
  globalRoles?: GlobalRole[];
  isPublic?: boolean;
}) {
  const {
    handler,
    schema,
    globalRoles,
    membershipRoles,
    isPublic = false,
  } = args;
  return {
    isPublic,
    handler: (args: z.infer<typeof schema>, ctx: HandlerContext) => {
      if (membershipRoles && args.organisationId) {
        if (
          !membershipRoles.includes(ctx.membershipRoles[args.organisationId])
        ) {
          return insufficientPermissionsError({ statusCode: 403 });
        }
      }
      if (globalRoles && !globalRoles.includes(ctx.globalRole)) {
        return insufficientPermissionsError({ statusCode: 403 });
      }
      if (schema) {
        const { success, ...rest } = schema.safeParse(args);
        if (!success) {
          return validationError({
            payload: (rest as any)?.error,
            statusCode: 403,
          });
        }
      }
      return handler(args, ctx);
    },
  };
}

// export const handleOrganisationCreate = (input: any, context: Context) => {};
// export const handleSignUp = (input: any, context: Context) => {};
// export const handleSignIn = (input: any, context: Context) => {};

// export const handleListChannels = (input: any, context: Context) => {};
// export const handleListMessages = (input: any, context: Context) => {};
// export const handleListUsers = (input: any, context: Context) => {};
