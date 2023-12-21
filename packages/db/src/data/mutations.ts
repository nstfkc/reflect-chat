import * as z from "zod";
import { random } from "uniqolor";
import { addDays } from "date-fns";
import { createId } from "@paralleldrive/cuid2";

import { createPrecedure } from "./handlers";
import { ChannelKind } from "@prisma/client";
import { prisma } from "../db";
import {
  insufficientPermissionsError,
  invalidCredentialsError,
  prismaError,
} from "./error";

export const createChannel = createPrecedure({
  schema: z.object({
    name: z
      .string({ required_error: "Name is required" })
      .min(3, "Channel name is too short"),
    kind: z.enum([ChannelKind.PRIVATE, ChannelKind.PUBLIC], {
      required_error: "Channel kind is required",
    }),
    organisationId: z.number({ required_error: "Organisation id is required" }),
  }),
  handler: async (args, ctx) => {
    const { kind, name, organisationId } = args;
    const { id } = ctx;

    try {
      const data = await prisma.channel.create({
        data: { name, kind, createdById: id, organisationId },
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
  handler: async (args) => {
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
          password,
          role: "CUSTOMER",
          userProfile: {
            create: {
              username: name,
              profileColor: (() => random({ saturation: [50, 80] }).color)(),
            },
          },
          userStatus: {
            create: {
              status: "ONLINE",
            },
          },
          memberships: {
            create: {
              role: "USER",
              organisationId: 1,
            },
          },
        },
        select: {
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

    console.log(email, password);
    try {
      const user = await prisma.user.findFirst({
        where: { email },
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
      if (user) {
        const passwordMatches = await helpers.verifyPassword(
          password,
          user.password
        );

        if (passwordMatches) {
          const token = helpers.jwtSign({
            id: user.id,
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
            data: { ...data, token },
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
      return invalidCredentialsError({});
    }
  },
});

export const signInWithMagicLink = createPrecedure({
  isPublic: true,
  schema: z.object({
    email: z.string().email(),
    pin: z.string(),
    channelId: z.number(),
  }),
  handler: async (args, ctx) => {
    const { email, pin, channelId } = args;
    const { helpers } = ctx;
    let invitation;
    try {
      invitation = await prisma.channelInvitation.findFirst({
        where: {
          issuedEmail: email,
          pin,
          channelId,
        },
        include: {
          channel: true,
        },
      });
    } catch (err) {
      return {
        success: false,
        error: insufficientPermissionsError({}),
      };
      // Do something
    }

    let user;
    if (invitation) {
      try {
        user = await prisma.user.findFirst({
          where: { email },
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
      } catch (err) {
        console.log(err);
        // Do something
      }
    } else {
      return {
        success: false,
        error: insufficientPermissionsError({}),
      };
    }

    if (user) {
      await prisma.channelInvitation.update({
        where: { id: invitation.id },
        data: {
          createdForId: user.id,
        },
      });

      const token = helpers.jwtSign({
        id: user.id,
        userId: user.publicId,
        globalRole: user.role,
        membershipRoles: Object.fromEntries(
          user.memberships.map((membership) => [
            membership.organisation.id,
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
        data: { ...data, token },
      };
    }

    user = await prisma.user.create({
      data: {
        email,
        role: "CUSTOMER",
        userProfile: {
          create: {
            username: invitation.username,
            profileColor: (() => random({ saturation: [50, 80] }).color)(),
          },
        },
        userStatus: {
          create: {
            status: "ONLINE",
          },
        },
        memberships: {
          create: {
            role: "EXTERNAL",
            organisationId: invitation.channel.organisationId,
          },
        },
        channelInvitationsReceived: {
          connect: [{ id: invitation.id }],
        },
      },
      select: {
        email: true,
        memberships: true,
      },
    });

    try {
      if (user) {
        const passwordMatches = true;

        if (passwordMatches) {
          const token = helpers.jwtSign({
            id: user.id,
            userId: user.publicId,
            globalRole: user.role,
            membershipRoles: Object.fromEntries(
              user.memberships.map((membership) => [
                membership.organisation.id,
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
            data: { ...data, token },
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
      return invalidCredentialsError({});
    }
  },
});

export const signOut = createPrecedure({
  handler: async (_, ctx) => {
    ctx.helpers.deleteCookie("Authorization");
    return {
      success: true,
      data: { removeToken: true },
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

export const updateProfile = createPrecedure({
  schema: z.object({ username: z.string(), profilePictureUrl: z.string() }),
  handler: async (args, ctx) => {
    const { profilePictureUrl, username } = args;
    const userProfile = await prisma.userProfile.update({
      data: { username, profilePictureUrl },
      where: { userId: ctx.id },
    });

    return {
      success: true,
      data: userProfile,
    };
  },
});

export const createMessage = createPrecedure({
  schema: z.object({
    text: z.string(),
    publicId: z.string(),
    senderId: z.number(),
    //
    conversationId: z.number().optional(),
    receiverId: z.number().optional(),
    channelId: z.number().optional(),
  }),
  handler: async (args, ctx) => {
    try {
      const message = await prisma.message.create({
        data: {
          ...args,
        } as any,
        include: {
          thread: true,
          reactions: true,
        },
      });

      ctx.helpers.io.emit("message:created", message);

      return {
        success: true,
        data: message,
      };
    } catch (err) {
      return prismaError({ message: err, statusCode: 403 });
    }
  },
});

export const updateMessage = createPrecedure({
  schema: z.object({
    text: z.string(),
    publicId: z.string(),
  }),
  handler: async (args) => {
    try {
      const message = await prisma.message.update({
        where: { publicId: args.publicId },
        data: {
          text: args.text,
        },
        include: {
          thread: true,
        },
      });
      return {
        success: true,
        data: message,
      };
    } catch (err) {
      return prismaError({ message: err, statusCode: 403 });
    }
  },
});

export const createReaction = createPrecedure({
  schema: z.object({
    unified: z.string(),
    messageId: z.number(),
  }),
  handler: async (args, ctx) => {
    const reaction = await prisma.reaction.create({
      data: {
        unified: args.unified,
        messageId: args.messageId,
        userId: ctx.id,
      },
    });

    return {
      success: true,
      data: reaction,
    };
  },
});

export const deleteReaction = createPrecedure({
  schema: z.object({
    id: z.number(),
  }),
  handler: async (args) => {
    const reaction = await prisma.reaction.delete({
      where: {
        id: args.id,
      },
    });

    return {
      success: true,
      data: reaction,
    };
  },
});

export const waitingListSignUp = createPrecedure({
  isPublic: true,
  schema: z.object({
    email: z.string(),
    agreedToReceiveUpdates: z.boolean().optional(),
  }),
  handler: async (args) => {
    try {
      const waitinglist = await prisma.waitingList.create({
        data: {
          email: args.email,
          agreedToReceiveUpdates: args.agreedToReceiveUpdates,
        },
      });

      return {
        success: true,
        data: waitinglist,
      };
    } catch (err) {
      return prismaError({ message: "something went wrong", statusCode: 400 });
    }
  },
});

export const createContactFormEntry = createPrecedure({
  cors: true,
  isPublic: true,
  schema: z.object({
    email: z.string(),
    jobTitle: z.string().optional(),
    description: z.string().optional(),
    agreedToReceiveUpdates: z.boolean().optional(),
  }),
  handler: async (args) => {
    try {
      const { description, email, jobTitle, agreedToReceiveUpdates } = args;
      const waitinglist = await prisma.contactForm.create({
        data: { email, description, jobTitle, agreedToReceiveUpdates },
      });

      return {
        success: true,
        data: waitinglist,
      };
    } catch (err) {
      return prismaError({
        message: "something went wrong",
        statusCode: 400,
        payload: err,
      });
    }
  },
});

export const createChannelInvitation = createPrecedure({
  schema: z.object({
    channelId: z.number(),
    email: z.string(),
    name: z.string(),
    pin: z.string(),
  }),
  handler: async (args, ctx) => {
    const { channelId, email, name, pin } = args;
    const { id } = ctx;

    const user = await prisma.user.findFirst({ where: { email } });

    try {
      const channel = await prisma.channel.findUnique({
        where: { id: channelId },
      });

      if (!channel) {
        return prismaError({});
      }

      await prisma.channelInvitation.create({
        data: {
          issuedEmail: email,
          pin,
          username: name,
          channelId,
          createdById: id,
          createdForId: user?.id,
        },
      });

      return {
        data: {
          token: Buffer.from(
            JSON.stringify({ channelId, email, name })
          ).toString("base64"),
        },
        success: true,
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  },
});

export const createApiKey = createPrecedure({
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    organisationId: z.number(),
  }),
  handler: async (args, ctx) => {
    const { description, name, organisationId } = args;
    const key = createId();
    try {
      const apiKey = await prisma.apiKey.create({
        data: {
          key,
          name,
          description,
          creatorId: ctx.id,
          organisationId,
        },
      });
      return {
        success: true,
        data: apiKey,
      };
    } catch (err) {
      return prismaError({});
    }
  },
});

export const customMessage = createPrecedure({
  cors: true,
  isPublic: true,
  schema: z.object({
    channelId: z.string(),
    data: z.object({}),
  }),
  handler: async (args, ctx) => {
    const { data, channelId } = args;
    const apiKeyToken =
      ctx.helpers.getHeader("Flect-API-Key") ??
      ctx.helpers.getHeader("flect-api-key");

    if (!apiKeyToken) {
      return insufficientPermissionsError({});
    }

    const apiKey = await prisma.apiKey.findUnique({
      where: {
        key: apiKeyToken,
      },
    });

    if (!apiKey) {
      return insufficientPermissionsError({});
    }

    const channel = await prisma.channel.findFirst({
      where: {
        publicId: channelId,
      },
    });

    function writeValue(value: any) {
      const basic = ["boolean", "string", "number"];
      if (!basic.includes(typeof value)) {
        return JSON.stringify(value);
      }
      return String(value);
    }

    const text = Object.entries(data)
      .map(([key, value]) => {
        return [
          {
            type: "paragraph",
            content: [{ type: "text", marks: [{ type: "bold" }], text: key }],
          },
          {
            type: "paragraph",
            content: [{ type: "text", text: writeValue(value) }],
          },
        ];
      })
      .flat();

    const message = await prisma.message.create({
      data: {
        channelId: channel.id,
        text: JSON.stringify(text),
        senderId: 0,
      },
    });

    if (message) {
      ctx.helpers.io.emit("message:created", message);
    }

    return {
      success: true,
      data: message,
    };
  },
});

export const visitorSignIn = createPrecedure({
  isPublic: true,
  cors: true,
  schema: z.object({
    channelId: z.string(),
    email: z.string(),
    name: z.string(),
    text: z.string(),
  }),
  handler: async (args, ctx) => {
    const { channelId, email, name, text } = args;
    const { helpers } = ctx;
    const channel = await prisma.channel.findFirst({
      where: { publicId: channelId },
    });
    const user = await prisma.user.create({
      data: {
        email,
        role: "CUSTOMER",
        userProfile: {
          create: {
            username: name,
            profileColor: (() => random({ saturation: [50, 80] }).color)(),
          },
        },
        memberships: {
          create: {
            role: "VISITOR",
            organisationId: channel.organisationId,
          },
        },
        userStatus: {
          create: {
            status: "ONLINE",
          },
        },
      },
    });

    const message = await prisma.message.create({
      data: {
        text: JSON.stringify([
          {
            type: "paragraph",
            content: [{ type: "text", text }],
          },
        ]),
        channelId: channel.id,
        senderId: user.id,
      },
    });

    helpers.io.emit("message:created", message);

    const token = helpers.jwtSign({
      id: user.id,
      userId: user.publicId,
      globalRole: user.role,
      membershipRoles: { [channel.organisationId]: "VISITOR" },
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
      data: { user: { ...data }, token, message },
    };
  },
});
