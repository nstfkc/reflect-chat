import { ChannelList, Organisation } from "shared";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-[48px] w-full bg-black/30"></div>
      <div className="flex h-full">
        <div className="min-w-[280px] p-4 bg-black/10 flex flex-col gap-4">
          <Organisation
            navigateToPeople={() => {
              navigate("/people");
            }}
          />
          <ChannelList
            onChannelClick={(channel) =>
              navigate(channel.id, { state: { channel } })
            }
          />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
