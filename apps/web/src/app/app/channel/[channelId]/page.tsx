import { prisma } from "db";
import { ChannelChat } from "./components/ChannelChat";
import { Metadata } from "next";

async function getChannel(id: string) {
  return await prisma.channel.findFirst({
    where: { id },
    include: { users: { select: { id: true } } },
  });
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const channel = await getChannel(params.userId);
  return { title: channel?.name };
}

export default async function Channel({ params }: any) {
  const channel = await getChannel(params.channelId);

  let users = [];

  if (channel?.kind === "Public") {
    users = await prisma.user.findMany();
  } else {
    users = await prisma.user.findMany({
      where: { id: { in: channel?.users.map((u) => u.id) } },
    });
  }

  const history = await prisma.messageV1.findMany({
    where: { channelId: channel?.id },
    include: {
      media: true,
    },
  });

  return (
    <div className="h-full relative">
      <div className="fixed top-0 bg-gray-300 w-full p-4 z-10">
        <span>#{channel?.name}</span>
      </div>
      <ChannelChat channel={channel!} users={users} history={history} />
    </div>
  );
}
