import { DirectMessage, MessageV1, User } from "db";
import { cx } from "class-variance-authority";

import Link from "next/link";
import { HiUser } from "react-icons/hi2";
import { useSocket } from "@/components/SocketContext/useSocket";
import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "@/components/UserContext/UserContext";
import { MessageContext } from "@/components/MessageContext/MessageContext";
import { useParams } from "next/navigation";

interface DirectMessagesProps {
  user: User;
  dmUserIds: string[];
}

export const DirectMessages = (props: DirectMessagesProps) => {
  const { user, dmUserIds } = props;
  const { getUserById } = useContext(UserContext);
  const { userId } = useParams();
  const { unreadMessages } = useContext(MessageContext);

  const [dmUsers, setDmUsers] = useState(
    Array.from(new Set([user.id, ...dmUserIds])).map((id) => getUserById(id))
  );

  const updateDMList = useCallback(
    (dm: MessageV1) => {
      setDmUsers((currentUsers) => {
        const isReceivedMessage = dm.receiverId === user.id;
        const isNewConversation = !currentUsers
          .map((u) => u?.id)
          .includes(isReceivedMessage ? dm.senderId : dm.receiverId!);
        if (!isNewConversation) {
          return currentUsers;
        }
        if (dm.senderId === user.id) {
          const newUser = getUserById(dm.receiverId!);
          if (newUser) {
            return [...currentUsers, newUser];
          }
        }

        if (dm.receiverId === user.id) {
          const newUser = getUserById(dm.senderId);
          if (newUser) {
            return [...currentUsers, newUser];
          }
        }
        return currentUsers;
      });
    },
    [user.id, getUserById]
  );

  const { socket } = useSocket();

  useEffect(() => {
    socket?.on("message:created", updateDMList);
    return () => {
      socket?.off("message:created", updateDMList);
    };
  }, [updateDMList, socket]);

  return (
    <div className="flex flex-col gap-2">
      {dmUsers.map((dmUser) => {
        const currentUser = userId === dmUser?.id;
        const unreadDmsCount =
          user.id === dmUser?.id ? 0 : unreadMessages[dmUser?.id!]?.size;
        return (
          <Link href={`/app/dm/${dmUser?.id}`} key={dmUser?.id}>
            <div
              className={cx(
                "flex items-center gap-2 p-1 rounded-md",
                currentUser ? "bg-gray-200" : ""
              )}
            >
              <div className="rounded-lg bg-gray-100 p-1">
                <HiUser
                  className="text-md text-[--fill-color] saturate-50"
                  style={{ "--fill-color": dmUser?.profileColor } as any}
                />
              </div>
              <div className="flex justify-between gap-1 w-full">
                <span
                  className={cx(
                    "opacity-80",
                    unreadDmsCount > 0 ? "font-semibold" : ""
                  )}
                >
                  {dmUser?.username} {dmUser?.id === user.id ? "(you)" : ""}
                </span>
                {unreadDmsCount > 0 ? (
                  <div className="w-[30px] text-center text-sm flex items-center justify-center font-semibold rounded-full bg-gray-300">
                    {unreadDmsCount}
                  </div>
                ) : null}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
