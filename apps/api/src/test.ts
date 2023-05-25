import { FastifyReply, FastifyRequest } from "fastify";

import server from "./server";

import { Queries } from "shared";

type Route = typeof server.route;
type Handler = Parameters<Route>[0]["handler"];
type Req = Parameters<Handler>[0];
type Res = Parameters<Handler>[1];

interface Config<T extends keyof Queries> {
  url: T;
  handler: (input: Queries[T]["takes"]) => Queries[T]["returns"];
}

function createRoute<T extends keyof Queries>(config: Config<T>) {
  const handler = (req: any) => {
    const input = req.body;
    return config.handler(input as any, {} as any);
  };
  const preHandler = (req, res, done) => {
    done();
  };

  return {
    url: config.url,
    method: ["GET", "HEAD"],
    handler,
    preHandler,
  };
}

export const helloWorld = createRoute({
  url: "/messages",
  handler: (input) => {
    return {};
  },
});
