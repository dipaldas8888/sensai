import { PrismaClient } from "../lib/generated/prisma";

const globalForPrisma = globalThis;

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error", "warn"], // add "query" if you want to debug
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
