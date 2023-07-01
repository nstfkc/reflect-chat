import { ChannelList } from "shared";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen">
      <div className="min-w-[280px] p-4 bg-black/10">
        <ChannelList
          onChannelClick={(channel) =>
            navigate(channel.id, { state: { channel } })
          }
        />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};
