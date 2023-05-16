import fastify from "fastify";
import { prisma } from "db";
import cookie from "@fastify/cookie";
import { hex } from "generate-random-color";
import { addDays } from "date-fns";
import fastifyIO from "fastify-socket.io";
import cors from "@fastify/cors";

import { sockets } from "./socket";

const server = fastify();

server.register(fastifyIO, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  },
});

server.register(cors, {
  // put your options here
});
server.register(cookie, {
  secret: process.env.SECRET,
});

server.get("/users", async (_request, _reply) => {
  const users = await prisma.user.findMany();
  return users;
});

server.get("/me", async (request, reply) => {
  const userId = request.cookies["userid"];

  if (!userId) {
    return reply.send({ redirect: "/" });
  }

  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (!user) {
    return reply.send({ redirect: "/404" });
  }

  return user;
});

server.get("/direct-messages", async (request) => {
  const userId = request.cookies["userid"];
  const uniqueDMsUserIds = await prisma.messageV1.findMany({
    distinct: ["senderId", "receiverId"],
    where: {
      OR: [{ senderId: userId }, { receiverId: userId }],
      receiverId: { not: null },
    },
    orderBy: { createdAt: "desc" },
    select: { senderId: true, receiverId: true },
  });

  return Array.from(
    new Set([
      userId,
      ...uniqueDMsUserIds
        .map((item) => [item.senderId, item.receiverId])
        .flat(),
    ])
  );
});

server.get("/channels", async (request) => {
  const userId = request.cookies["userid"];
  const channels = await prisma.channel.findMany({
    where: {
      OR: [
        { kind: "Public" },
        {
          OR: [
            {
              kind: "Private",
              users: {
                some: { id: userId },
              },
            },
            {
              kind: "Private",
              createdBy: userId,
            },
          ],
        },
      ],
    },
  });

  return channels;
});

server.get("/messages/:otherUserId", async (request) => {
  const userId = request.cookies["userid"];
  const { otherUserId } = (request as any).params;
  const history = await prisma.messageV1.findMany({
    where: {
      OR: [
        { senderId: userId, receiverId: otherUserId },
        { receiverId: userId, senderId: otherUserId },
      ],
    },
    include: {
      media: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return history;
});

server.get("/channel/messages/:channelId", async (request) => {
  const { channelId } = (request as any).params;
  const history = await prisma.messageV1.findMany({
    where: {
      channelId,
    },
    include: {
      media: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return history;
});

server.post("/create-channel", async (request) => {
  const { kind, description, name, createdBy } = JSON.parse(
    request.body as any
  );

  const channel = await prisma.channel.create({
    data: {
      kind,
      description,
      name,
      createdBy,
    } as any,
  });

  return channel;
});

server.post("/user", async (req, reply) => {
  const { username } = JSON.parse(req.body as any);
  const user = await prisma.user.create({
    data: {
      username,
      profileColor: hex(),
    },
  });

  reply
    .setCookie("userid", user.id, {
      path: "/",
      expires: addDays(new Date(), 1),
    })
    .send(user);
});

server.get("/user/:userId", async (req) => {
  const { userId } = (req as any).params;
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  return user;
});

server.get("/channel/:channelId", async (req) => {
  const { channelId } = (req as any).params;
  const channel = await prisma.channel.findFirst({
    where: {
      id: channelId,
    },
  });

  return channel;
});

server.get("/health", () => {
  return "healthy";
});

server.post("/test", (_req, reply) => {
  return reply.send({ hello: "world" });
});

server.ready().then(() => {
  sockets(server.io);
});

server.listen({ port: 4000, host: "127.0.0.1" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
