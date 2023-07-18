import { useState } from "react";

import {
  ChannelList,
  Organisation,
  DMList,
  UserProfilePicture,
  UserActions,
  useUser,
  useTheme,
} from "shared";
import { Outlet } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

export const HomeScreen = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const params = useParams();
  const { user } = useUser();

  const handleStatusSelect = (_userStatus: string) => {
    setShowUserProfile(false);
  };

  const { channelId } = params;
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-[48px] w-full bg-secondary titleBar">
        <div className="flex justify-end items-center h-full px-4">
          <button onClick={() => setShowUserProfile(true)}>
            <UserProfilePicture
              size={32}
              showUserName={false}
              userId={user?.id!}
            />
          </button>
        </div>
      </div>
      <div className="flex h-full">
        <div className="min-w-[280px] p-4 bg-alt2 flex flex-col gap-4">
          <Organisation
            navigateToPeople={() => {
              navigate("/people");
            }}
          />
          <ChannelList
            activeChannelId={channelId}
            onChannelClick={(channel) =>
              navigate(channel.publicId, { state: { channel } })
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
        {showUserProfile ? (
          <div>
            <div
              onClick={() => setShowUserProfile(false)}
              className="absolute w-full h-full left-0 top-0"
            ></div>
            <div
              style={{ backgroundColor: theme.colors.alt2 }}
              className="absolute w-64 max-w-screen-md p-4 shadow-md right-0 rounded-bl-lg"
            >
              <UserActions onStatusSelect={handleStatusSelect} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
