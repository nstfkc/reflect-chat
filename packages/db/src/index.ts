export { prisma } from "./db";
export * from "@prisma/client";

export { mutations, queries } from "./data/endpoints";
export type { Mutations, Queries } from "./data/endpoints";
export type { HandlerReturn, Precedure } from "./data/handlers";
export type { GenericError } from "./data/error";
