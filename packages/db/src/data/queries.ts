import * as z from "zod";

import { prisma } from "../db";
import { prismaError, insufficientPermissionsError } from "./error";
import { createPrecedure } from "./handlers";
import { Message } from "@prisma/client";
import { log } from "console";

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
    console.log(
      JSON.stringify(
        {
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
        },
        null,
        2
      )
    );
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
  doNotValidate: true,
  schema: z.object({
    channelId: z.number().optional(),
    receiverId: z.number().optional(),
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
        include: {
          userProfile: true,
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
