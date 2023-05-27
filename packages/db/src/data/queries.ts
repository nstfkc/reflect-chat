import { prisma } from "../db";
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
