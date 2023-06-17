import { DMChat } from "./components/DMChat";
import { redirect } from "next/navigation";
import { Metadata } from "next";

async function getOtherUser(id: string) {
  return await fetch(`http://localhost:4000/user/${id}`).then((res) =>
    res.json()
  );
}

export const revalidate = 0;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const otherUser = await getOtherUser(params.userId);
  return { title: otherUser?.username };
}

const DMUserId = async ({ params }: any) => {
  const otherUser = await getOtherUser(params.userId);

  if (!otherUser) {
    redirect("/404");
  }

  return (
    <div className="h-full relative">
      <DMChat />
    </div>
  );
};

export default DMUserId;
