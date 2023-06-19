import * as jwt from "jsonwebtoken";
import { prisma, mutations, queries } from "db";
import { sockets } from "./socket";

import server from "./server";

import { auth, verifyPassword, hashPassword } from "./auth";

server.register((server, opts, done) => {
  auth(server as any);
  done();
});

Object.entries(mutations).map(([url, config]) => {
  server.route({
    preHandler: (req, res, done) => {
      if (config.isPublic) {
        done();
      } else {
        const { userId } = req.requestContext.get("context");
        if (userId === "system") {
          res.statusCode = 401;
          done(Error("Authentication error"));
        }
        done();
      }
    },
    method: ["POST", "HEAD"],
    url: `/api/${url}`.replace("//", "/"),
    handler: async (req, rep) => {
      const res = await config.handler(req.body, {
        ...req.requestContext.get("context"),
        helpers: {
          deleteCookie: (name) => {
            rep.clearCookie(name);
          },
          setCookie: (name, value, options) => {
            rep.setCookie(name, value, options);
          },
          jwtSign: (payload) => jwt.sign(payload, process.env.SECRET),
          setHeader: (name, value) => {
            rep.header(name, value);
          },
          setStatusCode: (code) => {
            rep.statusCode = code;
          },
          verifyPassword: verifyPassword,
          hashPassword: hashPassword,
        },
      });
      if (res.success === false) {
        rep.statusCode = res.error.statusCode;
      }
      return res;
    },
  });
});

Object.entries(queries).map(([url, config]) => {
  server.route({
    preHandler: (req, res, done) => {
      if (config.isPublic) {
        done();
      }

      const { userId } = req.requestContext.get("context");
      if (userId === "system") {
        res.statusCode = 401;
        done(Error("Authentication error"));
      }
      done();
    },
    method: ["GET", "HEAD"],
    url: `/api/${url}`.replace("//", "/"),
    handler: async (req, rep) => {
      const res = await config.handler(req.query, {
        ...req.requestContext.get("context"),
      });
      if (res.success === false) {
        rep.statusCode = res.error.statusCode;
      }
      return res;
    },
  });
});

// server.get("/users", async (_request, _reply) => {
//   const users = await clerk.users.getUserList();
//   return users;
// });

// server.get("/direct-messages", async (request) => {
//   const userId = request.cookies["userid"];
//   const uniqueDMsUserIds = await prisma.message.findMany({
//     distinct: ["senderId", "receiverId"],
//     where: {
//       OR: [{ senderId: userId }, { receiverId: userId }],
//       receiverId: { not: null },
//     },
//     orderBy: { createdAt: "desc" },
//     select: { senderId: true, receiverId: true },
//   });

//   return Array.from(
//     new Set([
//       userId,
//       ...uniqueDMsUserIds
//         .map((item) => [item.senderId, item.receiverId])
//         .flat(),
//     ])
//   );
// });

server.get("/channels", async () => {
  const channels = await prisma.channel.findMany({
    where: {
      OR: [
        { kind: "PUBLIC" },
        // {
        //   OR: [
        //     {
        //       kind: "Private",
        //       users: {
        //         some: { id: userId },
        //       },
        //     },
        //     {
        //       kind: "Private",
        //       createdBy: userId,
        //     },
        //   ],
        // },
      ],
    },
  });

  return channels;
});

// server.get("/messages/:otherUserId", async (request) => {
//   const userId = request.cookies["userid"];
//   const { otherUserId } = (request as any).params;
//   const history = await prisma.message.findMany({
//     where: {
//       OR: [
//         { senderId: userId, receiverId: otherUserId },
//         { receiverId: userId, senderId: otherUserId },
//       ],
//     },
//     include: {
//       media: true,
//     },
//     orderBy: {
//       createdAt: "asc",
//     },
//   });

//   return history;
// });

server.get("/channel/messages/:channelId", async (request) => {
  const { channelId } = (request as any).params;
  const history = await prisma.message.findMany({
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

server.get("/messages", async (request) => {
  const { args } = request.query as any;
  const { where } = JSON.parse(args);
  const history = await prisma.message.findMany({
    where: where,
    include: {
      media: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return history;
});

// server.post("/channel/create", async (request) => {
//   const { kind, description, name, createdBy } = JSON.parse(
//     request.body as any
//   );

//   const channel = await prisma.channel.create({
//     data: {
//       kind,
//       description,
//       name,
//       createdBy,
//     } as any,
//   });

//   return channel;
// });

// server.get("/user/:userId", async (req) => {
//   const { userId } = (req as any).params;
//   const user = await clerk.users.getUser(userId);

//   return user;
// });

// server.get("/users/", async () => {
//   const userList = await clerk.users.getUserList();
//   return userList;
// });

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
  return _req.body;
});

server.ready().then(() => {
  sockets(server.io);
});

server.listen({ port: 8080, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
