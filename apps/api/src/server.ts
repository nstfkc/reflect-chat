import fastify from "fastify";
import cookie from "@fastify/cookie";
import fastifyIO from "fastify-socket.io";
import cors from "@fastify/cors";
import { decode } from "jsonwebtoken";

import { fastifyRequestContext } from "@fastify/request-context";

const server = fastify();

server.register(fastifyIO, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  },
});

server.register(cors, {
  origin: "*",
  preflight: true,
  // put your options here
});

server.register(cookie, {
  secret: process.env.SECRET,
});

server.register(fastifyRequestContext, {
  defaultStoreValues: {
    context: { userId: "system", organisationId: "system" },
    includeCookiesInReply: false,
  },
});

server.addHook("onRequest", (req, rep, done) => {
  console.log("HEADERS", req.cookies["Authorization"]);

  let token: null | string = null;

  console.log('req.headers["X-Device-Type"]', req.headers["X-Device-Type"]);
  if (req.headers["X-Device-Type"] === "mobile") {
    req.requestContext.set("includeCookiesInReply", true);
  }

  if (req.headers.authorization) {
    token = req.headers.authorization.replace("Bearer%20", "");
  }
  if (req.cookies["Authorization"]) {
    token = req.cookies["Authorization"].replace("Bearer", "").trim();
  }
  if (token) {
    const decoded = decode(token);
    req.requestContext.set("context", decoded);
  }
  done();
});

export type Server = typeof server;

export default server;
