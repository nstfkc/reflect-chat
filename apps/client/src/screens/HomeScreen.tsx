import { ChannelList, Organisation, DMList } from "shared";
import { Outlet } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { channelId } = params;
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-[48px] w-full bg-black/30 titleBar"></div>
      <div className="flex h-full">
        <div className="min-w-[280px] p-4 bg-black/10 flex flex-col gap-4">
          <Organisation
            navigateToPeople={() => {
              navigate("/people");
            }}
          />
          <ChannelList
            activeChannelId={channelId}
            onChannelClick={(channel) =>
              navigate(channel.id, { state: { channel } })
            }
          />
          <DMList
            onConversationPress={(user) => {
              navigate(user.publicId, { state: { user } });
            }}
          />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
