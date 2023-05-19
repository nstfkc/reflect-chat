import { PrismaClient } from "@prisma/client";
const prismaGlobal = global as typeof global & {
  prisma?: PrismaClient;
};

export const prisma: PrismaClient =
  prismaGlobal.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });
prisma.$use(async (params, next) => {
  const result = await next(params);
  return transform(result);
});

if (process.env.NODE_ENV !== "production") {
  prismaGlobal.prisma = prisma;
}

type MaybeDate = Date | any;

function transformDate(key: string, value: MaybeDate) {
  if (value instanceof Date) {
    if (["createdAt", "updatedAt", "deletedAt"].includes(key)) {
      return value.toISOString();
    }
  }
  return value;
}

function transform(objOrArray: any): any {
  if (Array.isArray(objOrArray)) {
    return objOrArray.map((item) => transform(item));
  } else {
    if (!objOrArray) {
      return objOrArray;
    }
    if (typeof objOrArray !== "object") {
      return objOrArray;
    }
    let out: any = {};
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
