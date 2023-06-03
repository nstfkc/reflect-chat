import z from "zod";
import { random } from "uniqolor";
import { addDays } from "date-fns";

import { createPrecedure } from "./handlers";
import { ChannelKind, MembershipRole } from "@prisma/client";
import { prisma } from "../db";
import { invalidCredentialsError, prismaError } from "./error";

export const createChannel = createPrecedure({
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

export const createOrganisation = createPrecedure({
  schema: z.object({ name: z.string() }),
  handler: async (args, ctx) => {
    try {
      const org = await prisma.organisation.create({
        data: {
          name: args.name,
        },
      });
      return {
        data: org,
        success: true,
      };
    } catch (err) {
      return prismaError({ payload: err, statusCode: 400 });
    }
  },
});

export const signUp = createPrecedure({
  isPublic: true,
  schema: z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string(),
  }),
  handler: async (args, ctx) => {
    try {
      const { password: passwordRaw, email, name } = args;
      const password = await ctx.helpers.hashPassword(passwordRaw);

      const user = await prisma.user.create({
        data: {
          email,
          name,
          password,
          role: "CUSTOMER",
          userProfile: {
            create: {
              username: name,
              profileColor: random({ saturation: 0.5 }).color,
            },
          },
        },
        select: {
          name: true,
          email: true,
        },
      });

      return {
        success: true,
        data: { user },
      };
    } catch (error) {
      console.log(error);
      return { success: false, error };
    }
  },
});

export const signIn = createPrecedure({
  isPublic: true,
  schema: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
  handler: async (args, ctx) => {
    const { email, password } = args;
    const { helpers } = ctx;

    try {
      const user = await prisma.user.findFirst({
        where: { email },
        include: {
          userProfile: true,
          memberships: {
            include: {
              organisation: true,
            },
          },
        },
      });
      if (user) {
        const passwordMatches = await helpers.verifyPassword(
          password,
          user.password
        );

        if (passwordMatches) {
          const token = helpers.jwtSign({
            userId: user.publicId,
            globalRole: user.role,
            membershipRoles: Object.fromEntries(
              user.memberships.map((membership) => [
                membership.organisation.publicId,
                membership.role,
              ])
            ),
          });
          const now = Date.now();

          helpers.setHeader("Access-Control-Allow-Credentials", "true");
          helpers.setCookie("Authorization", `Bearer ${token}`, {
            expires: addDays(now, 1),
            path: "/",
            httpOnly: true,
            sameSite: true,
          });
          const { password: _, ...data } = user;
          return {
            success: true,
            data,
          };
        } else {
          helpers.setStatusCode(401);
          return invalidCredentialsError({});
        }
      } else {
        helpers.setStatusCode(401);
        return invalidCredentialsError({});
      }
    } catch (error) {
      return error;
    }
  },
});

export const signOut = createPrecedure({
  handler: async (_, ctx) => {
    ctx.helpers.deleteCookie("Authorization");
    return {
      success: true,
      data: {},
    };
  },
});

export const setCurrentOrganisationId = createPrecedure({
  schema: z.object({ organisationId: z.string() }),
  handler: async (args, ctx) => {
    const { helpers } = ctx;

    helpers.setCookie("X-Organisation-Id", args.organisationId, {
      path: "/",
      httpOnly: true,
      sameSite: true,
    });
    return {
      success: true,
      data: {
        currentOrganisationId: args.organisationId,
      },
    };
  },
});
