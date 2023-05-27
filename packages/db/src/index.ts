export { prisma } from "./db";
export * from "@prisma/client";

export { mutations, queries } from "./data/endpoints";
export type { Mutations, Queries } from "./data/endpoints";
