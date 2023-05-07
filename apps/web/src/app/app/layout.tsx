import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { Sidebar } from "./components/Sidebar";
import { SocketProvider } from "@/components/SocketContext/SocketContext";
import { prisma } from "db";
import { UserProvider } from "@/components/UserContext/UserContext";
import { MessageProvider } from "@/components/MessageContext/MessageContext";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const userId = cookieStore.get("userid");

  if (!userId) {
    redirect("/");
  }

  const user = await prisma.user.findFirst({
    where: { id: userId.value },
  });

  if (!user) {
    redirect("/404");
  }

  const uniqueDMsUserIds = await prisma.messageV1.findMany({
    distinct: ["senderId", "receiverId"],
    where: {
      OR: [{ senderId: user.id }, { receiverId: user.id }],
      receiverId: { not: null },
    },
    orderBy: { createdAt: "desc" },
    select: { senderId: true, receiverId: true },
  });

  const allUsers = await prisma.user.findMany();

  const channels = await prisma.channel.findMany({
    where: {
      OR: [
        { kind: "Public" },
        {
          OR: [
            {
              kind: "Private",
              users: {
                some: { id: user.id },
              },
            },
            {
              kind: "Private",
              createdBy: user.id,
            },
          ],
        },
      ],
    },
  });

  return (
    <SocketProvider user={user}>
      <UserProvider user={user} users={allUsers}>
        <MessageProvider channels={channels}>
          <div className="flex h-full">
            <div className="w-[320px] h-full">
              <Sidebar
                user={user}
                channels={channels}
                dmUserIds={uniqueDMsUserIds
                  .map((item) => [item.senderId, item.receiverId!])
                  .flat()}
              />
            </div>
            <div className="grow h-screen">{children}</div>
          </div>
        </MessageProvider>
      </UserProvider>
    </SocketProvider>
  );
};

export default Layout;
