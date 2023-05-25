import fastify from "fastify";
import cookie from "@fastify/cookie";
import fastifyIO from "fastify-socket.io";
import cors from "@fastify/cors";
import authPlugin from "@fastify/auth";

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

export type Server = typeof server;

export default server;
