var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  prisma: () => prisma
});
module.exports = __toCommonJS(src_exports);

// src/db.ts
var import_client = require("@prisma/client");
var prismaGlobal = global;
var prisma = prismaGlobal.prisma || new import_client.PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"]
});
prisma.$use(async (params, next) => {
  const result = await next(params);
  return transform(result);
});
if (process.env.NODE_ENV !== "production") {
  prismaGlobal.prisma = prisma;
}
function transformDate(key, value) {
  if (value instanceof Date) {
    if (["createdAt", "updatedAt", "deletedAt"].includes(key)) {
      return value.toISOString();
    }
  }
  return value;
}
function transform(objOrArray) {
  if (Array.isArray(objOrArray)) {
    return objOrArray.map((item) => transform(item));
  } else {
    if (!objOrArray) {
      return objOrArray;
    }
    if (typeof objOrArray !== "object") {
      return objOrArray;
    }
    let out = {};
    for (const [key, value] of Object.entries(objOrArray)) {
      if (value instanceof Object && !(value instanceof Date)) {
        out[key] = transform(value);
      } else {
        out[key] = transformDate(key, value);
      }
    }
    return out;
  }
}

// src/index.ts
__reExport(src_exports, require("@prisma/client"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  prisma,
  ...require("@prisma/client")
});
