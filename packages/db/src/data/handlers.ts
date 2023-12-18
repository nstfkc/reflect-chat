import * as z from "zod";
import type { ZodObject, ZodRawShape } from "zod";
import { MembershipRole, GlobalRole } from "@prisma/client";
import { HandlerContext } from "./handlerContext";
import {
  insufficientPermissionsError,
  validationError,
  HandlerReturnError,
} from "./error";

type HandlerReturnSuccess<T> = { success: true; data: T };

export type HandlerReturn<T> = HandlerReturnSuccess<T> | HandlerReturnError;

type Handler<T, U> = (
  args: T,
  ctx: HandlerContext
) => Promise<HandlerReturn<U>>;

export type Precedure<U, T extends ZodRawShape> = {
  cors: boolean;
  handler: (
    args: z.infer<ZodObject<T>>,
    ctx: HandlerContext
  ) => Promise<HandlerReturn<U>>;
  isPublic: boolean;
};

export type InferPrecedureData<T> = T extends Precedure<infer R, any>
  ? R
  : never;
export type InferPrecedureArgs<T> = T extends Precedure<any, infer R>
  ? z.infer<ZodObject<R>>
  : never;

export function createPrecedure<U, T extends ZodRawShape>(args: {
  schema?: ZodObject<T>;
  handler: Handler<z.infer<typeof args.schema>, U>;
  membershipRoles?: MembershipRole[];
  globalRoles?: GlobalRole[];
  isPublic?: boolean;
  doNotValidate?: boolean;
  cors?: boolean;
}): Precedure<U, T> {
  const {
    handler,
    schema,
    globalRoles,
    membershipRoles,
    isPublic = false,
    doNotValidate = false,
    cors = false,
  } = args;
  return {
    cors,
    isPublic,
    handler: (args, ctx) => {
      let error: HandlerReturnError | null = null;
      if (membershipRoles && args.organisationId) {
        if (
          !membershipRoles.includes(ctx.membershipRoles[args.organisationId])
        ) {
          error = insufficientPermissionsError({ statusCode: 403 });
        }
      }
      if (globalRoles && !globalRoles.includes(ctx.globalRole)) {
        error = insufficientPermissionsError({ statusCode: 403 });
      }
      if (schema && !doNotValidate) {
        const { success, ...rest } = schema.safeParse(args);
        if (!success) {
          error = validationError({
            payload: (rest as any)?.error,
            statusCode: 403,
          });
        }
      }
      if (error) {
        return Promise.resolve(error);
      }
      return handler(args, ctx);
    },
  };
}
