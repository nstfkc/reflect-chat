import { prisma } from "./db";
import { randomBytes, scrypt } from "crypto";

type People = {
  name: string;
  email: string;
  avatarUrl: string;
  password: string;
};

const people: People[] = [
  {
    name: "Alina Lambert",
    email: "alina@reflect.rocks",
    avatarUrl: "alina.png",
    password: "reflectrocks",
  },
  {
    name: "Ayla Gregowski",
    email: "ayla@reflect.rocks",
    avatarUrl: "ayla.png",
    password: "reflectrocks",
  },
  {
    name: "Celine Parr",
    email: "cleline@reflect.rocks",
    avatarUrl: "celine.png",
    password: "reflectrocks",
  },
  {
    name: "Dave Schneider",
    email: "dave@reflect.rocks",
    avatarUrl: "dave.png",
    password: "reflectrocks",
  },
  {
    name: "Jakob Frater",
    email: "jakob@reflect.rocks",
    avatarUrl: "jakob.png",
    password: "reflectrocks",
  },
  {
    name: "Michael Selkis",
    email: "michael@reflect.rocks",
    avatarUrl: "michael.png",
    password: "reflectrocks",
  },
  {
    name: "Norah Scott",
    email: "norah@reflect.rocks",
    avatarUrl: "norah.png",
    password: "reflectrocks",
  },
];

async function hashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // generate random 16 bytes long salt
    const salt = randomBytes(16).toString("hex");

    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(salt + ":" + derivedKey.toString("hex"));
    });
  });
}

export async function seed() {
  const org = await prisma.organisation.create({
    data: {
      name: "Reflect",
    },
  });

  const admin = await prisma.user.create({
    data: {
      name: "Enes Tufekci",
      email: "enes@reflect.rocks",
      password: await hashPassword("reflectrocks"),
      role: "SUPERADMIN",
      userProfile: {
        create: {
          username: "Enes Tufekci",
          profilePictureUrl: "enes.png",
          profileColor: "#00000",
        },
      },
      userStatus: {
        create: {
          status: "ONLINE",
        },
      },
      memberships: {
        create: {
          role: "OWNER",
          organisationId: org.id,
        },
      },
    },
  });

  await prisma.channel.createMany({
    data: [
      {
        createdById: admin.id,
        name: "General",
        organisationId: org.id,
      },
      {
        createdById: admin.id,
        name: "Marketing",
        organisationId: org.id,
      },
      {
        createdById: admin.id,
        name: "Sales",
        organisationId: org.id,
      },
    ],
  });

  for (const person of people) {
    await prisma.user.create({
      data: {
        email: person.email,
        name: person.name,
        role: "CUSTOMER",
        password: await hashPassword(person.password),
        userProfile: {
          create: {
            username: person.name,
            profileColor: "",
            profilePictureUrl: person.avatarUrl,
          },
        },
        userStatus: {
          create: {
            status: "ONLINE",
          },
        },
        memberships: {
          create: {
            organisationId: org.id,
            role: "USER",
          },
        },
      },
    });
  }
}
