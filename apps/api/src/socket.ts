import { prisma } from "db";
import { Server } from "socket.io";
import { findAll } from "tree-visit";

import Redis from "ioredis";

const userIdSocketMap = new Map();

// let redis = new Redis(
//   "redis://default:530f03c0f1194bb4855c090d902a6c24@eu2-sterling-cheetah-31030.upstash.io:31030"
// );

function parseMentions(content: string) {
  try {
    const nodes = findAll(JSON.parse(content), {
      getChildren: (node: any) => {
        if (node.content) {
          return node.content;
        }
        return node;
      },
      predicate: (node: any) => node.type === "mention",
    });

    return nodes.map((node: any) => node.attrs.id);
  } catch (err) {
    console.log(err);
    return [];
  }
}

export function sockets(io: Server) {
  io.on("connection", (socket) => {
    if (userIdSocketMap.has(socket.handshake.query.userId)) {
      userIdSocketMap.get(socket.handshake.query.userId).push(socket);
    } else {
      userIdSocketMap.set(socket.handshake.query.userId, [socket]);
    }

    // Emit new user joined
    // Update the user list
    //

    socket.on("user-connected", ({ userId }) => {
      io.emit("user-connected", { userId });
    });
    socket.on("user-disconnected", ({ userId }) => {
      console.log(userId, "disconnected");
    });

    socket.on("last-seen-message", async ({ userId, message }) => {
      // await redis.set(`last-seen-message:${userId}`, JSON.stringify(message));
    });

    socket.on("channel-created", (channel) => {
      if (channel.kind === "Public") {
        io.emit("channel-created", channel);
      }
    });

    socket.on("message:create", (message, medias) => {
      console.log(message);
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
              if (userIdSocketMap.has(mentionIds)) {
                userIdSocketMap.get(mentionIds).forEach((socket) => {
                  socket?.emit("new-mention", { message });
                });
              }
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
            for (const socket of userIdSocketMap.get(dm.receiverId)) {
              socket?.emit("message:created", dm);
            }
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
