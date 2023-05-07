import fastify from "fastify";
import { prisma } from "db";
import cookie from "@fastify/cookie";
import { hex } from "generate-random-color";
import { addDays } from "date-fns";

const server = fastify();

server.register(cookie, {
  secret: process.env.SECRET,
});

server.get("/users", async (_request, _reply) => {
  const users = await prisma.user.findMany();
  return users;
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

server.listen({ port: 4000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
