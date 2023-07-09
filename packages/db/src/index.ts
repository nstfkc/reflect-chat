export { prisma } from "./db";
export * from "@prisma/client";

export { mutations, queries } from "./data/endpoints";
export type { Mutations, Queries } from "./data/endpoints";
export type {
  HandlerReturn,
  Precedure,
  InferPrecedureArgs,
  InferPrecedureData,
} from "./data/handlers";
export type { GenericError, ValidationIssue } from "./data/error";

export { seed } from "./seed";
