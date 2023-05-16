import { prisma } from "db";
import { Server } from "socket.io";
import Redis from "ioredis";

const userIdSocketMap = new Map();

let redis = new Redis(
  "redis://default:530f03c0f1194bb4855c090d902a6c24@eu2-sterling-cheetah-31030.upstash.io:31030"
);

function parseMentions(htmlString: string) {
  const mentionRegex = /<span[^>]+class="mention"[^>]+data-id="([^"]+)"/g;
  const mentionMatches = htmlString.matchAll(mentionRegex);
  const mentionIds = [];
  for (const match of mentionMatches) {
    mentionIds.push(match[1]);
  }
  return mentionIds;
}

export function sockets(io: Server) {
  io.on("connection", (socket) => {
    console.log("connected", socket.id);
    userIdSocketMap.set(socket.handshake.query.userId, socket);

    // Emit new user joined
    // Update the user list
    //

    socket.on("user-connected", ({ userId }) => {
      io.emit("user-connected", { userId });
    });

    socket.on("last-seen-message", async ({ userId, message }) => {
      await redis.set(`last-seen-message:${userId}`, JSON.stringify(message));
    });

    socket.on("channel-created", (channel) => {
      if (channel.kind === "Public") {
        io.emit("channel-created", channel);
      }
    });

    socket.on("message:create", (message, medias) => {
      if (message.channelId) {
        prisma.message
          .create({
            data: {
              ...message,
              media: {
                create: medias,
              },
            },
            include: {
              media: true,
            },
          })
          .then((message) => {
            const mentions = parseMentions(message.text);
            for (let mentionIds of mentions) {
              userIdSocketMap.get(mentionIds)?.emit("new-mention", { message });
            }
            io.emit("message:created", message);
          });
        // emit new message to sender and receiver
      }

      if (message.receiverId) {
        prisma.message
          .create({
            data: {
              ...message,
              media: {
                create: medias,
              },
            },
            include: {
              media: true,
            },
          })
          .then((dm) => {
            // userIdSocketMap.get(dm.senderId)?.emit("message:created", dm);
            userIdSocketMap.get(dm.receiverId)?.emit("message:created", dm);
          })
          .catch((error) => console.log(error));
        //
        // Emit new message to the sockets have this private channel access
        // 1. args.channelId
        // Check memory if private channel has user list
        // Then fetch from the db
        //
      }

      // io.in(args.channelId).emit("message", args);
    });

    // ...
  });
}
