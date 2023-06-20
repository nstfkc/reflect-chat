import { ChannelList } from "shared";

export const HomeScreen = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="bg-gray-100 min-w-[300px] p-2">
        <ChannelList onChannelClick={() => {}} />
      </div>
      <div>Chat</div>
    </div>
  );
};
