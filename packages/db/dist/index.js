var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// ../../node_modules/uniqolor/dist/uniqolor.js
var require_uniqolor = __commonJS({
  "../../node_modules/uniqolor/dist/uniqolor.js"(exports, module2) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? module2.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.uniqolor = factory());
    })(exports, function() {
      "use strict";
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _iterableToArrayLimit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null)
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var SATURATION_BOUND = [0, 100];
      var LIGHTNESS_BOUND = [0, 100];
      var pad2 = function pad22(str) {
        return "".concat(str.length === 1 ? "0" : "").concat(str);
      };
      var clamp = function clamp2(num, min, max) {
        return Math.max(Math.min(num, max), min);
      };
      var random2 = function random3(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      var randomExclude = function randomExclude2(min, max, exclude) {
        var r = random2(min, max);
        for (var i = 0; i < (exclude === null || exclude === void 0 ? void 0 : exclude.length); i++) {
          var value = exclude[i];
          if ((value === null || value === void 0 ? void 0 : value.length) === 2 && r >= value[0] && r <= value[1]) {
            return randomExclude2(min, max, exclude);
          }
        }
        return r;
      };
      var hashCode = function hashCode2(str) {
        var len = str.length;
        var hash = 0;
        for (var i = 0; i < len; i++) {
          hash = (hash << 5) - hash + str.charCodeAt(i);
          hash &= hash;
        }
        return hash;
      };
      var boundHashCode = function boundHashCode2(num, range) {
        if (typeof range === "number") {
          return range;
        }
        return num % Math.abs(range[1] - range[0]) + range[0];
      };
      var sanitizeRange = function sanitizeRange2(range, bound) {
        if (typeof range === "number") {
          return clamp.apply(void 0, [Math.abs(range)].concat(_toConsumableArray(bound)));
        }
        if (range.length === 1 || range[0] === range[1]) {
          return clamp.apply(void 0, [Math.abs(range[0])].concat(_toConsumableArray(bound)));
        }
        return [Math.abs(clamp.apply(void 0, [range[0]].concat(_toConsumableArray(bound)))), clamp.apply(void 0, [Math.abs(range[1])].concat(_toConsumableArray(bound)))];
      };
      var hueToRgb = function hueToRgb2(p, q, t) {
        if (t < 0) {
          t += 1;
        } else if (t > 1) {
          t -= 1;
        }
        if (t < 1 / 6) {
          return p + (q - p) * 6 * t;
        }
        if (t < 1 / 2) {
          return q;
        }
        if (t < 2 / 3) {
          return p + (q - p) * (2 / 3 - t) * 6;
        }
        return p;
      };
      var hslToRgb = function hslToRgb2(h, s, l) {
        var r;
        var g;
        var b;
        h /= 360;
        s /= 100;
        l /= 100;
        if (s === 0) {
          r = g = b = l;
        } else {
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hueToRgb(p, q, h + 1 / 3);
          g = hueToRgb(p, q, h);
          b = hueToRgb(p, q, h - 1 / 3);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
      };
      var rgbIsLight = function rgbIsLight2(r, g, b, differencePoint) {
        return (r * 299 + g * 587 + b * 114) / 1e3 >= differencePoint;
      };
      var hslToString = function hslToString2(h, s, l) {
        return "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)");
      };
      var rgbFormat = function rgbFormat2(r, g, b, format) {
        switch (format) {
          case "rgb":
            return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
          case "hex":
          default:
            return "#".concat(pad2(r.toString(16))).concat(pad2(g.toString(16))).concat(pad2(b.toString(16)));
        }
      };
      var uniqolor = function uniqolor2(value) {
        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$format = _ref.format, format = _ref$format === void 0 ? "hex" : _ref$format, _ref$saturation = _ref.saturation, saturation = _ref$saturation === void 0 ? [50, 55] : _ref$saturation, _ref$lightness = _ref.lightness, lightness = _ref$lightness === void 0 ? [50, 60] : _ref$lightness, _ref$differencePoint = _ref.differencePoint, differencePoint = _ref$differencePoint === void 0 ? 130 : _ref$differencePoint;
        var hash = Math.abs(hashCode(String(value)));
        var h = boundHashCode(hash, [0, 360]);
        var s = boundHashCode(hash, sanitizeRange(saturation, SATURATION_BOUND));
        var l = boundHashCode(hash, sanitizeRange(lightness, LIGHTNESS_BOUND));
        var _hslToRgb = hslToRgb(h, s, l), _hslToRgb2 = _slicedToArray(_hslToRgb, 3), r = _hslToRgb2[0], g = _hslToRgb2[1], b = _hslToRgb2[2];
        return {
          color: format === "hsl" ? hslToString(h, s, l) : rgbFormat(r, g, b, format),
          isLight: rgbIsLight(r, g, b, differencePoint)
        };
      };
      uniqolor.random = function() {
        var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$format = _ref2.format, format = _ref2$format === void 0 ? "hex" : _ref2$format, _ref2$saturation = _ref2.saturation, saturation = _ref2$saturation === void 0 ? [50, 55] : _ref2$saturation, _ref2$lightness = _ref2.lightness, lightness = _ref2$lightness === void 0 ? [50, 60] : _ref2$lightness, _ref2$differencePoint = _ref2.differencePoint, differencePoint = _ref2$differencePoint === void 0 ? 130 : _ref2$differencePoint, excludeHue = _ref2.excludeHue;
        saturation = sanitizeRange(saturation, SATURATION_BOUND);
        lightness = sanitizeRange(lightness, LIGHTNESS_BOUND);
        var h = excludeHue ? randomExclude(0, 359, excludeHue) : random2(0, 359);
        var s = typeof saturation === "number" ? saturation : random2.apply(void 0, _toConsumableArray(saturation));
        var l = typeof lightness === "number" ? lightness : random2.apply(void 0, _toConsumableArray(lightness));
        var _hslToRgb3 = hslToRgb(h, s, l), _hslToRgb4 = _slicedToArray(_hslToRgb3, 3), r = _hslToRgb4[0], g = _hslToRgb4[1], b = _hslToRgb4[2];
        return {
          color: format === "hsl" ? hslToString(h, s, l) : rgbFormat(r, g, b, format),
          isLight: rgbIsLight(r, g, b, differencePoint)
        };
      };
      return uniqolor;
    });
  }
});

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
var import_zod = __toESM(require("zod"));
var import_uniqolor = __toESM(require_uniqolor());

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
  schema: import_zod.default.object({
    name: import_zod.default.string({ required_error: "Name is required" }).min(3, "Channel name is too short"),
    kind: import_zod.default.enum([import_client2.ChannelKind.PRIVATE, import_client2.ChannelKind.PUBLIC], {
      required_error: "Channel kind is required"
    }),
    organisationId: import_zod.default.string({ required_error: "Organisation id is required" })
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
  schema: import_zod.default.object({ name: import_zod.default.string() }),
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
  schema: import_zod.default.object({
    email: import_zod.default.string().email(),
    password: import_zod.default.string(),
    name: import_zod.default.string()
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
  schema: import_zod.default.object({
    email: import_zod.default.string().email(),
    password: import_zod.default.string()
  }),
  handler: async (args, ctx) => {
    const { email, password } = args;
    console.log({ email, password });
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
      return error;
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
  schema: import_zod.default.object({ organisationId: import_zod.default.string() }),
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
  schema: z2.object({ channelId: z2.string() }),
  handler: async (args) => {
    try {
      const messages = await prisma.message.findMany({
        where: {
          channelId: args.channelId
        }
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
/*! Bundled license information:

uniqolor/dist/uniqolor.js:
  (**
  * Generate unique and beautiful colors from any texts or numbers
   * @version v1.1.0
   * @link https://github.com/dastoori/uniqolor#README
   * @author Rasool Dastoori
   * @license MIT License, http://www.opensource.org/licenses/MIT
   *)
*/
