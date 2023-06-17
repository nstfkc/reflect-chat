import { Channel } from "db";
import { ChannelChat } from "./components/ChannelChat";
import { Metadata } from "next";

async function getChannel(id: string): Promise<Channel> {
  return await fetch(`http://localhost:4000/channel/${id}`).then((res) =>
    res.json()
  );
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const channel = await getChannel(params.userId);
  return { title: channel?.name };
}

export default async function Channel({ params }: any) {
  const channel = await getChannel(params.channelId);

  return (
    <div className="h-full relative">
      <ChannelChat channel={channel!} />
    </div>
  );
}
