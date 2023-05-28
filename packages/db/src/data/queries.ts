import { prisma } from "../db";
import { prismaError } from "./error";
import { createHandler } from "./handlers";

export const me = createHandler({
  handler: async (_, ctx) => {
    const user = await prisma.user.findFirst({
      where: { publicId: ctx.userId },
      include: {
        userProfile: true,
        memberships: {
          include: {
            organization: true,
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

export const queryChanelList = createHandler({
  handler: async () => {
    try {
      const channels = await prisma.channel.findMany({
        where: {
          kind: "PUBLIC",
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
