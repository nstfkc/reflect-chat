import * as z from "zod";

import { prisma } from "../db";
import { prismaError, insufficientPermissionsError } from "./error";
import { createPrecedure } from "./handlers";

export const me = createPrecedure({
  handler: async (_, ctx) => {
    if (!ctx.userId) {
      return insufficientPermissionsError({ statusCode: 403 });
    }
    const user = await prisma.user.findFirst({
      where: { publicId: ctx.userId },
      include: {
        userProfile: true,
        memberships: {
          include: {
            organisation: true,
          },
        },
      },
    });
    return {
      success: true,
      data: user,
    };
  },
});

export const listChannels = createPrecedure({
  schema: z.object({ organisationId: z.string() }),
  handler: async (args) => {
    try {
      const channels = await prisma.channel.findMany({
        where: {
          kind: "PUBLIC",
          organisationId: args.organisationId,
        },
      });

      return {
        success: true,
        data: channels,
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  },
});

export const getCurrentOrganisationId = createPrecedure({
  handler: async (_, ctx) => {
    const { currentOrganisationId } = ctx;
    console.log("currentOrganisationId SERVER", { currentOrganisationId });
    return {
      success: true,
      data: {
        currentOrganisationId,
      },
    };
  },
});

export const listMessages = createPrecedure({
  schema: z.object({ channelId: z.string() }),
  handler: async (args) => {
    try {
      const messages = await prisma.message.findMany({
        where: {
          channelId: args.channelId,
        },
      });

      return {
        success: true,
        data: messages,
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  },
});

export const listUsers = createPrecedure({
  schema: z.object({ organisationId: z.string() }),
  handler: async (args) => {
    try {
      const users = await prisma.user.findMany({
        where: {
          memberships: {
            some: {
              organisation: {
                publicId: { equals: args.organisationId },
              },
            },
          },
        },
      });

      return {
        success: true,
        data: users,
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  },
});
