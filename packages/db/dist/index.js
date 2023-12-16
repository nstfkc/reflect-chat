var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  mutations: () => mutations,
  prisma: () => prisma,
  queries: () => queries,
  seed: () => seed
});
module.exports = __toCommonJS(src_exports);

// src/db.ts
var import_client = require("@prisma/client");
var prismaGlobal = global;
var prisma = prismaGlobal.prisma || new import_client.PrismaClient({
  errorFormat: "minimal",
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"]
});
if (process.env.NODE_ENV !== "production") {
  prismaGlobal.prisma = prisma;
}

// src/index.ts
__reExport(src_exports, require("@prisma/client"), module.exports);

// src/data/mutations.ts
var mutations_exports = {};
__export(mutations_exports, {
  createChannel: () => createChannel,
  createChannelInvitation: () => createChannelInvitation,
  createContactFormEntry: () => createContactFormEntry,
  createMessage: () => createMessage,
  createOrganisation: () => createOrganisation,
  createReaction: () => createReaction,
  deleteReaction: () => deleteReaction,
  setCurrentOrganisationId: () => setCurrentOrganisationId,
  signIn: () => signIn,
  signOut: () => signOut,
  signUp: () => signUp,
  updateMessage: () => updateMessage,
  updateProfile: () => updateProfile,
  waitingListSignUp: () => waitingListSignUp
});
var z = __toESM(require("zod"));
var import_uniqolor = require("uniqolor");

// ../../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// ../../node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number3 = Number(dirtyNumber);
  if (isNaN(number3)) {
    return number3;
  }
  return number3 < 0 ? Math.ceil(number3) : Math.floor(number3);
}

// ../../node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}

// ../../node_modules/date-fns/esm/toDate/index.js
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return /* @__PURE__ */ new Date(NaN);
  }
}

// ../../node_modules/date-fns/esm/addDays/index.js
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

// src/data/error.ts
var ERROR_CODES = {
  INSUFFICIENT_PERMISSIONS: 1e3,
  VALIDATION_ERROR: 1001,
  INVALID_CREDENTIALS_ERROR: 1002,
  PRISMA_ERROR: 2e3
};
function createError(errorKind) {
  return (params) => {
    const { message, payload, statusCode = 200 } = params;
    if (process.env.NODE_ENV === "production") {
      return { success: false, error: { code: ERROR_CODES[errorKind] } };
    }
    return {
      success: false,
      error: {
        statusCode,
        code: ERROR_CODES[errorKind],
        title: errorKind,
        message: typeof message === "string" ? message : JSON.stringify(message),
        payload
      }
    };
  };
}
var prismaError = createError("PRISMA_ERROR");
var insufficientPermissionsError = createError(
  "INSUFFICIENT_PERMISSIONS"
);
var validationError = createError("VALIDATION_ERROR");
var invalidCredentialsError = createError("INVALID_CREDENTIALS_ERROR");

// src/data/handlers.ts
function createPrecedure(args) {
  const {
    handler,
    schema,
    globalRoles,
    membershipRoles,
    isPublic = false,
    doNotValidate = false
  } = args;
  return {
    isPublic,
    handler: (args2, ctx) => {
      let error = null;
      if (membershipRoles && args2.organisationId) {
        if (!membershipRoles.includes(ctx.membershipRoles[args2.organisationId])) {
          error = insufficientPermissionsError({ statusCode: 403 });
        }
      }
      if (globalRoles && !globalRoles.includes(ctx.globalRole)) {
        error = insufficientPermissionsError({ statusCode: 403 });
      }
      if (schema && !doNotValidate) {
        const { success, ...rest } = schema.safeParse(args2);
        if (!success) {
          error = validationError({
            payload: rest == null ? void 0 : rest.error,
            statusCode: 403
          });
        }
      }
      if (error) {
        return Promise.resolve(error);
      }
      return handler(args2, ctx);
    }
  };
}

// src/data/mutations.ts
var import_client2 = require("@prisma/client");
var createChannel = createPrecedure({
  schema: z.object({
    name: z.string({ required_error: "Name is required" }).min(3, "Channel name is too short"),
    kind: z.enum([import_client2.ChannelKind.PRIVATE, import_client2.ChannelKind.PUBLIC], {
      required_error: "Channel kind is required"
    }),
    organisationId: z.number({ required_error: "Organisation id is required" })
  }),
  handler: async (args, ctx) => {
    const { kind, name, organisationId } = args;
    const { id } = ctx;
    try {
      const data = await prisma.channel.create({
        data: { name, kind, createdById: id, organisationId }
      });
      return {
        success: true,
        data
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var createOrganisation = createPrecedure({
  schema: z.object({ name: z.string() }),
  handler: async (args) => {
    try {
      const org = await prisma.organisation.create({
        data: {
          name: args.name
        }
      });
      return {
        data: org,
        success: true
      };
    } catch (err) {
      return prismaError({ payload: err, statusCode: 400 });
    }
  }
});
var signUp = createPrecedure({
  isPublic: true,
  schema: z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string()
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
              profileColor: (() => (0, import_uniqolor.random)({ saturation: [50, 80] }).color)()
            }
          },
          userStatus: {
            create: {
              status: "ONLINE"
            }
          },
          memberships: {
            create: {
              role: "USER",
              organisationId: 1
            }
          }
        },
        select: {
          email: true
        }
      });
      return {
        success: true,
        data: { user }
      };
    } catch (error) {
      console.log(error);
      return { success: false, error };
    }
  }
});
var signIn = createPrecedure({
  isPublic: true,
  schema: z.object({
    email: z.string().email(),
    password: z.string()
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
              organisation: true
            }
          }
        }
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
                membership.role
              ])
            )
          });
          const now = Date.now();
          helpers.setHeader("Access-Control-Allow-Credentials", "true");
          helpers.setCookie("Authorization", `Bearer ${token}`, {
            expires: addDays(now, 1),
            path: "/",
            httpOnly: true,
            sameSite: true
          });
          const { password: _, ...data } = user;
          return {
            success: true,
            data: { ...data, token }
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
  }
});
var signOut = createPrecedure({
  handler: async (_, ctx) => {
    ctx.helpers.deleteCookie("Authorization");
    return {
      success: true,
      data: { removeToken: true }
    };
  }
});
var setCurrentOrganisationId = createPrecedure({
  schema: z.object({ organisationId: z.string() }),
  handler: async (args, ctx) => {
    const { helpers } = ctx;
    helpers.setCookie("X-Organisation-Id", args.organisationId, {
      path: "/",
      httpOnly: true,
      sameSite: true
    });
    return {
      success: true,
      data: {
        currentOrganisationId: args.organisationId
      }
    };
  }
});
var updateProfile = createPrecedure({
  schema: z.object({ username: z.string(), profilePictureUrl: z.string() }),
  handler: async (args, ctx) => {
    const { profilePictureUrl, username } = args;
    const userProfile = await prisma.userProfile.update({
      data: { username, profilePictureUrl },
      where: { userId: ctx.id }
    });
    return {
      success: true,
      data: userProfile
    };
  }
});
var createMessage = createPrecedure({
  schema: z.object({
    text: z.string(),
    publicId: z.string(),
    senderId: z.number(),
    //
    conversationId: z.number().optional(),
    receiverId: z.number().optional(),
    channelId: z.number().optional()
  }),
  handler: async (args) => {
    try {
      const message = await prisma.message.create({
        data: {
          ...args
        },
        include: {
          thread: true,
          reactions: true
        }
      });
      return {
        success: true,
        data: message
      };
    } catch (err) {
      return prismaError({ message: err, statusCode: 403 });
    }
  }
});
var updateMessage = createPrecedure({
  schema: z.object({
    text: z.string(),
    publicId: z.string()
  }),
  handler: async (args) => {
    try {
      const message = await prisma.message.update({
        where: { publicId: args.publicId },
        data: {
          text: args.text
        },
        include: {
          thread: true
        }
      });
      return {
        success: true,
        data: message
      };
    } catch (err) {
      return prismaError({ message: err, statusCode: 403 });
    }
  }
});
var createReaction = createPrecedure({
  schema: z.object({
    unified: z.string(),
    messageId: z.number()
  }),
  handler: async (args, ctx) => {
    const reaction = await prisma.reaction.create({
      data: {
        unified: args.unified,
        messageId: args.messageId,
        userId: ctx.id
      }
    });
    return {
      success: true,
      data: reaction
    };
  }
});
var deleteReaction = createPrecedure({
  schema: z.object({
    id: z.number()
  }),
  handler: async (args) => {
    const reaction = await prisma.reaction.delete({
      where: {
        id: args.id
      }
    });
    return {
      success: true,
      data: reaction
    };
  }
});
var waitingListSignUp = createPrecedure({
  isPublic: true,
  schema: z.object({
    email: z.string(),
    agreedToReceiveUpdates: z.boolean().optional()
  }),
  handler: async (args) => {
    try {
      const waitinglist = await prisma.waitingList.create({
        data: {
          email: args.email,
          agreedToReceiveUpdates: args.agreedToReceiveUpdates
        }
      });
      return {
        success: true,
        data: waitinglist
      };
    } catch (err) {
      return prismaError({ message: "something went wrong", statusCode: 400 });
    }
  }
});
var createContactFormEntry = createPrecedure({
  isPublic: true,
  schema: z.object({
    email: z.string(),
    jobTitle: z.string().optional(),
    description: z.string().optional(),
    agreedToReceiveUpdates: z.boolean().optional()
  }),
  handler: async (args) => {
    try {
      const { description, email, jobTitle, agreedToReceiveUpdates } = args;
      const waitinglist = await prisma.contactForm.create({
        data: { email, description, jobTitle, agreedToReceiveUpdates }
      });
      return {
        success: true,
        data: waitinglist
      };
    } catch (err) {
      return prismaError({
        message: "something went wrong",
        statusCode: 400,
        payload: err
      });
    }
  }
});
var createChannelInvitation = createPrecedure({
  schema: z.object({
    channelId: z.number(),
    email: z.string(),
    name: z.string(),
    pin: z.string()
  }),
  handler: async (args, ctx) => {
    const { channelId, email, name, pin } = args;
    const { id } = ctx;
    try {
      const channel = await prisma.channel.findUnique({
        where: { id: channelId }
      });
      if (!channel) {
        return prismaError({});
      }
      const channelInvitation = await prisma.channelInvitation.create({
        data: {
          issuedEmail: email,
          pin,
          username: name,
          channelId,
          createdById: id
        }
      });
      return {
        data: channelInvitation,
        success: true
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});

// src/data/queries.ts
var queries_exports = {};
__export(queries_exports, {
  getCurrentOrganisationId: () => getCurrentOrganisationId,
  listChannelMessages: () => listChannelMessages,
  listChannels: () => listChannels,
  listDMMessages: () => listDMMessages,
  listDirectMessages: () => listDirectMessages,
  listMessages: () => listMessages,
  listThreadMessages: () => listThreadMessages,
  listUsers: () => listUsers,
  me: () => me
});
var z2 = __toESM(require("zod"));
var me = createPrecedure({
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
            organisation: true
          }
        }
      }
    });
    return {
      success: true,
      data: user
    };
  }
});
var listChannels = createPrecedure({
  doNotValidate: true,
  schema: z2.object({ organisationId: z2.number() }),
  handler: async (args) => {
    try {
      const channels = await prisma.channel.findMany({
        where: {
          kind: "PUBLIC",
          organisationId: Number(args.organisationId)
        }
      });
      return {
        success: true,
        data: channels
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var listDirectMessages = createPrecedure({
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
                  { receiverId: { equals: ctx.id } }
                ]
              }
            },
            {
              OR: [
                {
                  senderId: { equals: ctx.id },
                  channelId: { equals: null }
                },
                {
                  receiverId: { equals: ctx.id },
                  channelId: { equals: null }
                }
              ]
            }
          ]
        }
      });
      return {
        success: true,
        data: directMessages
      };
    } catch (error) {
      console.log(error);
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var getCurrentOrganisationId = createPrecedure({
  handler: async (_, ctx) => {
    const { currentOrganisationId } = ctx;
    return {
      success: true,
      data: {
        currentOrganisationId
      }
    };
  }
});
var listMessages = createPrecedure({
  doNotValidate: true,
  schema: z2.object({
    channelId: z2.number().optional(),
    receiverId: z2.number().optional(),
    conversationId: z2.number().optional()
  }),
  handler: async (args, ctx) => {
    const channelId = Number(args.channelId);
    const receiverId = Number(args.receiverId);
    if (isNaN(channelId) && isNaN(receiverId)) {
      return prismaError({ payload: { issues: [] }, statusCode: 400 });
    }
    let messages = [];
    try {
      if (isNaN(receiverId)) {
        messages = await prisma.message.findMany({
          where: {
            channelId
          },
          orderBy: { createdAt: "asc" }
        });
      }
      if (isNaN(channelId)) {
        messages = await prisma.message.findMany({
          where: {
            OR: [
              { receiverId, senderId: ctx.id },
              { senderId: receiverId, receiverId: ctx.id }
            ]
          },
          orderBy: { createdAt: "asc" }
        });
      }
      return {
        success: true,
        data: messages
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var listChannelMessages = createPrecedure({
  doNotValidate: true,
  schema: z2.object({
    channelId: z2.number().optional()
  }),
  handler: async (args) => {
    try {
      const messages = await prisma.message.findMany({
        where: {
          channelId: Number(args.channelId)
        },
        include: { thread: true, reactions: true },
        orderBy: { createdAt: "asc" }
      });
      return {
        success: true,
        data: messages
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var listDMMessages = createPrecedure({
  doNotValidate: true,
  schema: z2.object({
    receiverId: z2.number().optional()
  }),
  handler: async (args, ctx) => {
    try {
      const messages = await prisma.message.findMany({
        where: {
          OR: [
            {
              receiverId: Number(args.receiverId),
              senderId: Number(ctx.id)
            },
            {
              receiverId: Number(ctx.id),
              senderId: Number(args.receiverId)
            }
          ]
        },
        include: { thread: true, reactions: true },
        orderBy: { createdAt: "asc" }
      });
      return {
        success: true,
        data: messages
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var listThreadMessages = createPrecedure({
  doNotValidate: true,
  schema: z2.object({
    conversationId: z2.number().optional()
  }),
  handler: async (args) => {
    try {
      const messages = await prisma.message.findMany({
        where: {
          conversationId: Number(args.conversationId)
        },
        include: { thread: true, reactions: true },
        orderBy: { createdAt: "asc" }
      });
      return {
        success: true,
        data: messages
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var listUsers = createPrecedure({
  schema: z2.object({ organisationId: z2.string() }),
  handler: async (args) => {
    try {
      const users = await prisma.user.findMany({
        where: {
          memberships: {
            some: {
              organisation: {
                publicId: { equals: args.organisationId }
              }
            }
          }
        },
        include: {
          userProfile: true,
          userStatus: true
        }
      });
      return {
        success: true,
        data: users
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});

// src/data/endpoints.ts
var mutations = mutations_exports;
var queries = queries_exports;

// src/seed.ts
var import_crypto = require("crypto");
var people = [
  {
    name: "Alina Lambert",
    email: "alina@reflect.rocks",
    avatarUrl: "alina.png",
    password: "reflectrocks"
  },
  {
    name: "Ayla Gregowski",
    email: "ayla@reflect.rocks",
    avatarUrl: "ayla.png",
    password: "reflectrocks"
  },
  {
    name: "Celine Parr",
    email: "cleline@reflect.rocks",
    avatarUrl: "celine.png",
    password: "reflectrocks"
  },
  {
    name: "Dave Schneider",
    email: "dave@reflect.rocks",
    avatarUrl: "dave.png",
    password: "reflectrocks"
  },
  {
    name: "Jakob Frater",
    email: "jakob@reflect.rocks",
    avatarUrl: "jakob.png",
    password: "reflectrocks"
  },
  {
    name: "Michael Selkis",
    email: "michael@reflect.rocks",
    avatarUrl: "michael.png",
    password: "reflectrocks"
  },
  {
    name: "Norah Scott",
    email: "norah@reflect.rocks",
    avatarUrl: "norah.png",
    password: "reflectrocks"
  }
];
async function hashPassword(password) {
  return new Promise((resolve, reject) => {
    const salt = (0, import_crypto.randomBytes)(16).toString("hex");
    (0, import_crypto.scrypt)(password, salt, 64, (err, derivedKey) => {
      if (err)
        reject(err);
      resolve(salt + ":" + derivedKey.toString("hex"));
    });
  });
}
async function seed() {
  const org = await prisma.organisation.create({
    data: {
      name: "Reflect"
    }
  });
  const admin = await prisma.user.create({
    data: {
      email: "enes@reflect.rocks",
      password: await hashPassword("reflectrocks"),
      role: "SUPERADMIN",
      userProfile: {
        create: {
          username: "Enes Tufekci",
          profilePictureUrl: "enes.png",
          profileColor: "#00000"
        }
      },
      userStatus: {
        create: {
          status: "ONLINE"
        }
      },
      memberships: {
        create: {
          role: "OWNER",
          organisationId: org.id
        }
      }
    }
  });
  await prisma.channel.createMany({
    data: [
      {
        createdById: admin.id,
        name: "General",
        organisationId: org.id
      },
      {
        createdById: admin.id,
        name: "Bugs",
        organisationId: org.id
      },
      {
        createdById: admin.id,
        name: "Feedback",
        organisationId: org.id
      },
      {
        createdById: admin.id,
        name: "Feature requests",
        organisationId: org.id
      }
    ]
  });
  for (const person of people) {
    await prisma.user.create({
      data: {
        email: person.email,
        role: "CUSTOMER",
        password: await hashPassword(person.password),
        userProfile: {
          create: {
            username: person.name,
            profileColor: "",
            profilePictureUrl: person.avatarUrl
          }
        },
        userStatus: {
          create: {
            status: "ONLINE"
          }
        },
        memberships: {
          create: {
            organisationId: org.id,
            role: "USER"
          }
        }
      }
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mutations,
  prisma,
  queries,
  seed,
  ...require("@prisma/client")
});
