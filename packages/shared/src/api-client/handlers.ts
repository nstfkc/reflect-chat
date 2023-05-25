import z, { ZodObject, ZodRawShape } from "zod";
import { prisma, ChannelKind, MembershipRole, GlobalRole } from "db";
import { Context } from "./context";

const ERROR_CODES = {
  INSUFFICIENT_PERMISSIONS: 1000,
  VALIDATION_ERROR: 1001,
  PRISMA_ERROR: 2000,
};

type HandlerReturnSuccess<T> = { success: true; data: T };
type HandlerReturnError = {
  success: false;
  error: {
    title?: string;
    message?: string;
    code: number;
    payload?: Record<string, string>;
  };
};

// errors

function createError<T extends keyof typeof ERROR_CODES>(errorKind: T) {
  return (message = "", payload = {}): HandlerReturnError => {
    if (process.env.NODE_ENV === "production") {
      return { success: false, error: { code: ERROR_CODES[errorKind] } };
    }
    return {
      success: false,
      error: {
        code: ERROR_CODES[errorKind],
        title: errorKind,
        message: message,
        payload,
      },
    };
  };
}

const prismaError = createError("PRISMA_ERROR");
const insufficientPermissionsError = createError("INSUFFICIENT_PERMISSIONS");
const validationError = createError("VALIDATION_ERROR");

// mutations

type HandlerReturn<T> = HandlerReturnSuccess<T> | HandlerReturnError;

type Handler<T, U> = (args: T, ctx: Context) => Promise<HandlerReturn<U>>;

function createHandler<U, T extends ZodRawShape>(args: {
  schema: ZodObject<T>;
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
    handler: (args: z.infer<typeof schema>, ctx: Context) => {
      if (membershipRoles && !membershipRoles.includes(ctx.membershipRole)) {
        return insufficientPermissionsError();
      }
      if (globalRoles && !globalRoles.includes(ctx.globalRole)) {
        return insufficientPermissionsError();
      }
      const { success, ...rest } = schema.safeParse(args);
      if (success) {
        return handler(args, ctx);
      }
      return validationError("", rest);
    },
  };
}

export const handleChannelCreate = createHandler({
  membershipRoles: [MembershipRole.ADMIN, MembershipRole.OWNER],
  schema: z.object({
    name: z
      .string({ required_error: "Name is required" })
      .min(3, "Channel name is too short"),
    kind: z.enum([ChannelKind.PRIVATE, ChannelKind.PUBLIC], {
      required_error: "Channel kind is required",
    }),
  }),
  handler: async (args, ctx) => {
    const { kind, name } = args;
    const { userId, organisationId } = ctx;

    try {
      const data = await prisma.channel.create({
        data: { name, kind, createdBy: userId, organisationId },
      });
      return {
        success: true,
        data,
      };
    } catch (message) {
      return prismaError(message);
    }
  },
});

export const handleOrganisationCreate = (input: any, context: Context) => {};
export const handleSignUp = (input: any, context: Context) => {};
export const handleSignIn = (input: any, context: Context) => {};

// queries

export const handleListChannels = (input: any, context: Context) => {};
export const handleListMessages = (input: any, context: Context) => {};
export const handleListUsers = (input: any, context: Context) => {};
