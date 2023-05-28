import z from "zod";
import { createPrecedure } from "./handlers";
import { ChannelKind, MembershipRole } from "@prisma/client";
import { prisma } from "../db";
import { prismaError } from "./error";

export const handleChannelCreate = createPrecedure({
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
