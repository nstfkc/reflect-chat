import jwt from "jsonwebtoken";
import { addDays } from "date-fns";
import { random } from "uniqolor";

import { randomBytes, scrypt } from "crypto";
import { Server } from "./server";
import { prisma, Prisma } from "db";

async function hash(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // generate random 16 bytes long salt
    const salt = randomBytes(16).toString("hex");

    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(salt + ":" + derivedKey.toString("hex"));
    });
  });
}

async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const [salt, key] = hash.split(":");
    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(key === derivedKey.toString("hex"));
    });
  });
}

export function auth(server: Server) {
  server.post("/auth/sign-in", async (request, reply) => {
    const { email, password } = request.body as {
      email: string;
      password: string;
    };

    try {
      const user = await prisma.user.findFirst({
        where: { email },
        include: {
          memberships: {
            include: {
              organization: true,
            },
          },
        },
      });
      if (user) {
        const passwordMatches = await verifyPassword(password, user.password);
        if (passwordMatches) {
          const token = jwt.sign(
            {
              userId: user.publicId,
              globalRole: user.role,
              membershipRoles: Object.fromEntries(
                user.memberships.map((membership) => [
                  membership.organization.publicId,
                  membership.role,
                ])
              ),
            },
            process.env.SECRET
          );
          const now = Date.now();

          reply.setCookie("Authorization", `Bearer ${token}`, {
            expires: addDays(now, 1),
          });

          return {
            name: user.name,
            email: user.email,
          };
        }
      }
    } catch (error) {
      return error;
    }
  });

  server.post("/auth/sign-up", async (request) => {
    const { data } = request.body as Prisma.UserCreateArgs;

    try {
      const { password: passwordRaw, email, name } = data;
      const password = await hash(passwordRaw);

      const user = await prisma.user.create({
        data: {
          email,
          name,
          password,
          role: "CUSTOMER",
          userProfile: {
            create: {
              username: name,
              profileColor: random({ saturation: 0.5 }).color,
            },
          },
        },
        select: {
          publicId: true,
          name: true,
          email: true,
          userProfile: true,
        },
      });

      return user;
    } catch (error) {
      console.log(error);
      return { error };
    }
  });
}
