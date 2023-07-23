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
