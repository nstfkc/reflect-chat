import * as z from "zod";

import { prisma } from "../db";
import { prismaError, insufficientPermissionsError } from "./error";
import { createPrecedure } from "./handlers";
import { Message } from "@prisma/client";

export const me = createPrecedure({
  handler: async (_, ctx) => {
    if (!ctx.userId) {
      return insufficientPermissionsError({ statusCode: 403 });
    }
    const user = await prisma.user.findFirst({
      where: { publicId: ctx.userId },
      include: {
        userProfile: true,
        userStatus: true,
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
  doNotValidate: true,
  schema: z.object({ organisationId: z.number() }),
  handler: async (args, ctx) => {
    const role = ctx.membershipRoles[args.organisationId];
    if (role === "EXTERNAL") {
      const user = await prisma.user.findFirst({
        where: { publicId: ctx.userId },
        include: {
          channelInvitationsReceived: true,
        },
      });
      const channels = await prisma.channel.findMany({
        where: {
          kind: "PUBLIC",
          organisationId: Number(args.organisationId),
          id: { in: user.channelInvitationsReceived.map((i) => i.channelId) },
        },
      });

      return {
        success: true,
        data: channels,
      };
    }

    try {
      const channels = await prisma.channel.findMany({
        where: {
          kind: "PUBLIC",
          organisationId: Number(args.organisationId),
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

export const listDirectMessages = createPrecedure({
  handler: async (_, ctx) => {
    try {
      const directMessages = await prisma.message.findMany({
        distinct: ["senderId", "receiverId"],
        where: {
          AND: [
            {
              NOT: {
                AND: [
                  { senderId: { equals: ctx.id } },
                  { receiverId: { equals: ctx.id } },
                ],
              },
            },
            {
              OR: [
                {
                  senderId: { equals: ctx.id },
                  channelId: { equals: null },
                },
                {
                  receiverId: { equals: ctx.id },
                  channelId: { equals: null },
                },
              ],
            },
          ],
        },
      });

      return {
        success: true,
        data: directMessages,
      };
    } catch (error) {
      console.log(error);
      return prismaError({ payload: error, statusCode: 400 });
    }
  },
});

export const getMessage = createPrecedure({
  schema: z.object({ messagePublicId: z.string() }),
  handler: async (args) => {
    try {
      // TODO: get message by id, this query is expensive because publicId is not indexed
      const message = await prisma.message.findFirst({
        where: { publicId: args.messagePublicId },
      });

      return {
        success: true,
        data: message,
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  },
});

export const getCurrentOrganisationId = createPrecedure({
  handler: async (_, ctx) => {
    const { currentOrganisationId } = ctx;
    return {
      success: true,
      data: {
        currentOrganisationId,
      },
    };
  },
});

export const listMessages = createPrecedure({
  doNotValidate: true,
  schema: z.object({
    channelId: z.number().optional(),
    receiverId: z.number().optional(),
    conversationId: z.number().optional(),
  }),
  handler: async (args, ctx) => {
    const channelId = Number(args.channelId);
    const receiverId = Number(args.receiverId);

    if (isNaN(channelId) && isNaN(receiverId)) {
      return prismaError({ payload: { issues: [] }, statusCode: 400 });
    }

    let messages: Message[] = [];

    try {
      if (isNaN(receiverId)) {
        messages = await prisma.message.findMany({
          where: {
            channelId,
          },

          orderBy: { createdAt: "asc" },
        });
      }

      if (isNaN(channelId)) {
        messages = await prisma.message.findMany({
          where: {
            OR: [
              { receiverId: receiverId, senderId: ctx.id },
              { senderId: receiverId, receiverId: ctx.id },
            ],
          },
          orderBy: { createdAt: "asc" },
        });
      }

      return {
        success: true,
        data: messages,
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  },
});

export const listChannelMessages = createPrecedure({
  doNotValidate: true,
  schema: z.object({
    channelId: z.number().optional(),
  }),
  handler: async (args) => {
    try {
      const messages = await prisma.message.findMany({
        where: {
          channelId: Number(args.channelId),
        },
        include: { thread: true, reactions: true },
        orderBy: { createdAt: "asc" },
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

export const listDMMessages = createPrecedure({
  doNotValidate: true,
  schema: z.object({
    receiverId: z.number().optional(),
  }),
  handler: async (args, ctx) => {
    try {
      const messages = await prisma.message.findMany({
        where: {
          OR: [
            {
              receiverId: Number(args.receiverId),
              senderId: Number(ctx.id),
            },
            {
              receiverId: Number(ctx.id),
              senderId: Number(args.receiverId),
            },
          ],
        },
        include: { thread: true, reactions: true },
        orderBy: { createdAt: "asc" },
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

export const listThreadMessages = createPrecedure({
  doNotValidate: true,
  schema: z.object({
    conversationId: z.number().optional(),
    withUsers: z.boolean().optional(),
  }),
  handler: async (args) => {
    try {
      const messages = await prisma.message.findMany({
        where: {
          conversationId: Number(args.conversationId),
        },
        include: {
          thread: true,
          reactions: true,
          ...(args.withUsers
            ? { sender: { include: { userProfile: true } }, receiver: true }
            : {}),
        },
        orderBy: { createdAt: "asc" },
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
    // TODO: check if user has membership for this organisation
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
        include: {
          userProfile: true,
          userStatus: true,
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

export const getChannelInvitation = createPrecedure({
  schema: z.object({ token: z.string() }),
  handler: async (args, ctx) => {
    const { token } = args;
    const plain = Buffer.from(token, "base64").toString("utf8");
    const { channelId, email, name } = JSON.parse(plain);

    return {
      success: true,
      data: {
        channelId,
        email,
        name,
      },
    };
  },
});
