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
  queries: () => queries
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
  createOrganisation: () => createOrganisation,
  setCurrentOrganisationId: () => setCurrentOrganisationId,
  signIn: () => signIn,
  signOut: () => signOut,
  signUp: () => signUp
});
var z = __toESM(require("zod"));
var import_uniqolor = require("uniqolor");

// ../../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}

// ../../node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
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
    isPublic = false
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
      if (schema) {
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
  membershipRoles: [import_client2.MembershipRole.ADMIN, import_client2.MembershipRole.OWNER],
  schema: z.object({
    name: z.string({ required_error: "Name is required" }).min(3, "Channel name is too short"),
    kind: z.enum([import_client2.ChannelKind.PRIVATE, import_client2.ChannelKind.PUBLIC], {
      required_error: "Channel kind is required"
    }),
    organisationId: z.string({ required_error: "Organisation id is required" })
  }),
  handler: async (args, ctx) => {
    const { kind, name, organisationId } = args;
    const { userId } = ctx;
    try {
      const data = await prisma.channel.create({
        data: { name, kind, createdBy: userId, organisationId }
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
  handler: async (args, ctx) => {
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
          name,
          password,
          role: "CUSTOMER",
          userProfile: {
            create: {
              username: name,
              profileColor: (0, import_uniqolor.random)({ saturation: 0.5 }).color
            }
          }
        },
        select: {
          name: true,
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
    try {
      const user = await prisma.user.findFirst({
        where: { email },
        include: {
          userProfile: true,
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

// src/data/queries.ts
var queries_exports = {};
__export(queries_exports, {
  getCurrentOrganisationId: () => getCurrentOrganisationId,
  listChannels: () => listChannels,
  listDirectMessages: () => listDirectMessages,
  listMessages: () => listMessages,
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
  schema: z2.object({ organisationId: z2.string() }),
  handler: async (args) => {
    try {
      const channels = await prisma.channel.findMany({
        where: {
          kind: "PUBLIC",
          organisationId: args.organisationId
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
  schema: z2.object({ userId: z2.string() }),
  handler: async (args) => {
    try {
      const directMessages = await prisma.message.findMany({
        distinct: ["senderId", "receiverId"],
        where: {
          OR: [
            { senderId: { equals: args.userId } },
            { receiverId: { equals: args.userId } }
          ]
        }
      });
      return {
        success: true,
        data: directMessages
      };
    } catch (error) {
      return prismaError({ payload: error, statusCode: 400 });
    }
  }
});
var getCurrentOrganisationId = createPrecedure({
  handler: async (_, ctx) => {
    const { currentOrganisationId } = ctx;
    console.log("currentOrganisationId SERVER", { currentOrganisationId });
    return {
      success: true,
      data: {
        currentOrganisationId
      }
    };
  }
});
var listMessages = createPrecedure({
  schema: z2.object({
    channelId: z2.string().optional(),
    receiverId: z2.string().optional()
  }),
  handler: async (args, ctx) => {
    if (args.channelId === "undefined" && args.receiverId === "undefined") {
      return prismaError({ payload: { issues: [] }, statusCode: 400 });
    }
    let messages = [];
    try {
      if (args.channelId !== "undefined") {
        messages = await prisma.message.findMany({
          where: {
            channelId: args.channelId
          }
        });
      }
      if (args.receiverId !== "undefined") {
        messages = await prisma.message.findMany({
          where: {
            OR: [
              { receiverId: args.receiverId, senderId: ctx.userId },
              { senderId: args.receiverId, receiverId: ctx.userId }
            ]
          }
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
          userProfile: true
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mutations,
  prisma,
  queries,
  ...require("@prisma/client")
});
