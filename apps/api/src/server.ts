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

server.addHook("onRequest", (req, _rep, done) => {
  let token: null | string = null;
  let currentOrganisationId: null | string = null;

  if (req.cookies["X-Organisation-Id"]) {
    currentOrganisationId = String(req.cookies["X-Organisation-Id"]);
  }

  if (req.headers.authorization) {
    token = req.headers.authorization.replace("Bearer%20", "");
  }
  if (req.cookies["Authorization"]) {
    token = req.cookies["Authorization"].replace("Bearer", "").trim();
  }
  if (token) {
    const decoded = decode(token) as Record<string, string>;
    req.requestContext.set("context", { ...decoded, currentOrganisationId });
  }
  done();
});

export type Server = typeof server;

export default server;
