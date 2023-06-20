import { ChannelList } from "shared";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen">
      <div className="bg-gray-100 min-w-[300px] p-2">
        <ChannelList onChannelClick={(channel) => navigate(channel.id)} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
