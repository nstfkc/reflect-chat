import { UserStatusKind, prisma } from "db";
import { Server, Socket } from "socket.io";
import { findAll } from "tree-visit";

import Redis from "ioredis";

const userIdSocketMap = new Map<number, Set<Socket>>();

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
    const handshakeId = Number(socket.handshake.query.userId);
    if (!userIdSocketMap.has(handshakeId)) {
      userIdSocketMap.set(handshakeId, new Set());
    }

    userIdSocketMap.get(handshakeId).add(socket);

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

    socket.on("user-typing", (payload) => {
      io.emit("user-typing", payload);
    });

    socket.on(
      "update-user-status",
      async (payload: { userStatusId: number; userStatus: UserStatusKind }) => {
        await prisma.userStatus.update({
          data: { status: payload.userStatus },
          where: { id: payload.userStatusId },
        });
        io.emit("update-user-status", payload);
      }
    );

    socket.on("update-user-profile", async (payload: any) => {
      io.emit("update-user-profile", payload);
    });

    socket.on("message:create", (message) => {
      if (message.channelId) {
        const mentions = parseMentions(message.text);
        for (let mentionIds of mentions) {
          if (userIdSocketMap.has(mentionIds)) {
            userIdSocketMap.get(mentionIds)?.forEach((socket) => {
              socket?.emit("new-mention", { message });
            });
          }
        }
        io.emit("message:created", message);
      }

      if (message.receiverId) {
        userIdSocketMap.get(message.receiverId)?.forEach((socket) => {
          socket?.emit("message:created", message);
        });
      }
      if (message.conversationId) {
        io.emit("message:created", message);
      }
    });
    socket.on("message:update", (message) => {
      if (message.channelId) {
        const mentions = parseMentions(message.text);
        for (let mentionIds of mentions) {
          if (userIdSocketMap.has(mentionIds)) {
            userIdSocketMap.get(mentionIds)?.forEach((socket) => {
              socket?.emit("new-mention", { message });
            });
          }
        }
        io.emit("message:updated", message);
      }

      if (message.receiverId) {
        userIdSocketMap.get(message.receiverId).forEach((socket) => {
          socket?.emit("message:updated", message);
        });
      }

      if (message.conversationId) {
        io.emit("message:updated", message);
      }
    });

    socket.on("reaction:create", (reaction) => {
      io.emit("reaction:created", reaction);
    });

    socket.on("reaction:delete", (reaction) => {
      io.emit("reaction:deleted", reaction);
    });
  });
}
