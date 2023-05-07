import { cookies } from "next/headers";
import { DMChat } from "./components/DMChat";
import { prisma } from "db";
import { redirect } from "next/navigation";
import { Metadata } from "next";

async function getOtherUser(id: string) {
  return await prisma.user.findFirst({
    where: { id },
  });
}

export const revalidate = 0;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const otherUser = await getOtherUser(params.userId);
  return { title: otherUser?.username };
}

const DMUserId = async ({ params }: any) => {
  const cookieStore = cookies();
  const useridCookie = cookieStore.get("userid");
  const history = await prisma.messageV1.findMany({
    where: {
      OR: [
        { senderId: useridCookie?.value, receiverId: params.userId },
        { receiverId: useridCookie?.value, senderId: params.userId },
      ],
    },
    include: {
      media: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  const otherUser = await getOtherUser(params.userId);

  if (!otherUser) {
    redirect("/404");
  }

  return (
    <div className="h-full relative">
      <div className="fixed top-0 bg-gray-300 w-full p-4 z-10">
        <span>{otherUser.username}</span>
      </div>
      <DMChat otherUser={otherUser} history={history} />
    </div>
  );
};

export default DMUserId;
