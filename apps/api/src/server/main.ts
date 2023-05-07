import express from "express";
import ViteExpress from "vite-express";
import { prisma } from "db";

const app = express();

app.get("/hello", async (_, res) => {
  const users = await prisma.user.findMany();
  res.json({ users });
});

ViteExpress.listen(app, 4000, () =>
  console.log("Server is listening on port 4000...")
);
