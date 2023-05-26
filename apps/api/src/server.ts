import fastify from "fastify";
import cookie from "@fastify/cookie";
import fastifyIO from "fastify-socket.io";
import cors from "@fastify/cors";
import { decode } from "jsonwebtoken";

import { fastifyRequestContext } from "@fastify/request-context";

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

server.register(fastifyRequestContext, {
  defaultStoreValues: {
    context: { userId: "system", organisationId: "system" },
  },
});

server.addHook("onRequest", (req, _rep, done) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.replace("Bearer%20", "");
    const decoded = decode(token);
    req.requestContext.set("context", decoded);
  }
  done();
});

export type Server = typeof server;

export default server;
