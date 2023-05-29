import { prisma } from "../db";
import { prismaError } from "./error";
import { createPrecedure } from "./handlers";

export const me = createPrecedure({
  handler: async (_, ctx) => {
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

export const queryChanelList = createPrecedure({
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
