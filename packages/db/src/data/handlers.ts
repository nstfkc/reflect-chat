import z from "zod";
import type { ZodObject, ZodRawShape } from "zod";
import { ChannelKind, MembershipRole, GlobalRole } from "@prisma/client";
import { prisma } from "../db";
import { HandlerContext } from "./handlerContext";

const ERROR_CODES = {
  INSUFFICIENT_PERMISSIONS: 1000,
  VALIDATION_ERROR: 1001,
  PRISMA_ERROR: 2000,
};

type HandlerReturnSuccess<T> = { success: true; data: T };

type ValidationIssue = {
  expected: string;
  received: string;
  code: string;
  path: string[];
  message: string;
};

type GenericError = {
  title: keyof typeof ERROR_CODES;
  code: typeof ERROR_CODES[keyof typeof ERROR_CODES];
  message: string;
  statusCode: number;
  payload: {
    issues: ValidationIssue[];
    [key: string]: any;
  };
};

type HandlerReturnError = {
  success: false;
  error: GenericError;
};

function createError<T extends keyof typeof ERROR_CODES>(errorKind: T) {
  return (
    params: Partial<Pick<GenericError, "message" | "payload" | "statusCode">>
  ): HandlerReturnError => {
    const { message, payload, statusCode = 200 } = params;
    if (process.env.NODE_ENV === "production") {
      return { success: false, error: { code: ERROR_CODES[errorKind] } as any };
    }
    return {
      success: false,
      error: {
        statusCode,
        code: ERROR_CODES[errorKind],
        title: errorKind,
        message:
          typeof message === "string" ? message : JSON.stringify(message),
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

type Handler<T, U> = (
  args: T,
  ctx: HandlerContext
) => Promise<HandlerReturn<U>>;

function createHandler<U, T extends ZodRawShape>(args: {
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

export const handleChannelCreate = createHandler({
  membershipRoles: [MembershipRole.ADMIN, MembershipRole.OWNER],
  schema: z.object({
    name: z
      .string({ required_error: "Name is required" })
      .min(3, "Channel name is too short"),
    kind: z.enum([ChannelKind.PRIVATE, ChannelKind.PUBLIC], {
      required_error: "Channel kind is required",
    }),
    organisationId: z.string({ required_error: "Organisation id is required" }),
  }),
  handler: async (args, ctx) => {
    const { kind, name, organisationId } = args;
    const { userId } = ctx;

    try {
      const data = await prisma.channel.create({
        data: { name, kind, createdBy: userId, organisationId },
      });
      return {
        success: true,
        data,
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  },
});

export const handleChannelList = createHandler({
  handler: async (_, ctx) => {
    const data = await prisma.channel.findMany({
      where: {
        organisationId: "",
      },
    });

    return {
      success: true,
      data,
    };
  },
});

// export const handleOrganisationCreate = (input: any, context: Context) => {};
// export const handleSignUp = (input: any, context: Context) => {};
// export const handleSignIn = (input: any, context: Context) => {};

// export const handleListChannels = (input: any, context: Context) => {};
// export const handleListMessages = (input: any, context: Context) => {};
// export const handleListUsers = (input: any, context: Context) => {};
