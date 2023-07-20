import { useState, useContext, PropsWithChildren } from "react";
import { TbCamera } from "react-icons/tb";

import {
  ChannelList,
  Organisation,
  DMList,
  UserProfilePicture,
  UserActions,
  UserProfile,
  useUser,
  useTheme,
  ConfigContext,
} from "shared";
import { Outlet } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const ImageWrapper = ({
  children,
  onProfilePictureUpload,
}: PropsWithChildren<{
  onProfilePictureUpload: (path: string) => void;
}>) => {
  const { assetsServiceUrl } = useContext(ConfigContext);
  const { user } = useUser();

  const uploadFile = async (file: File) => {
    const requestOptions: RequestInit = {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      mode: "cors",
      redirect: "follow",
    };
    const { path } = await fetch(
      `${assetsServiceUrl}/profiles/${user?.publicId}/${Date.now()}`,
      requestOptions
    ).then((res) => res.json());
    onProfilePictureUpload(path);
  };

  return (
    <div className="group relative w-[128px] h-[128px] rounded-[16px] overflow-hidden pointer">
      <input
        type="file"
        name=""
        value=""
        className="absolute z-[20] opacity-0 w-full h-full"
        onChange={(event) => uploadFile(event?.target.files?.[0]!)}
      />
      <div className="absolute z-10 group-hover:bg-black/20 w-full h-full flex justify-center items-center transition duration-200">
        <TbCamera className="text-3xl text-white/70 opacity-0 group-hover:opacity-100 transition duration-200" />
      </div>
      {children}
    </div>
  );
};

export const HomeScreen = () => {
  const [showUserActions, setShowUserActions] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);

  const theme = useTheme();
  const navigate = useNavigate();
  const params = useParams();
  const { user } = useUser();

  const handleStatusSelect = (_userStatus: string) => {
    setShowUserActions(false);
  };

  const { channelId } = params;
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-[48px] w-full bg-secondary titleBar">
        <div className="flex justify-end items-center h-full px-4">
          <button onClick={() => setShowUserActions(true)}>
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
        {showUserActions ? (
          <div>
            <div
              onClick={() => setShowUserActions(false)}
              className="absolute w-full h-full left-0 top-0"
            ></div>
            <div
              style={{ backgroundColor: theme.colors.alt2 }}
              className="absolute w-64 max-w-screen-md p-4 shadow-md right-0 rounded-bl-lg"
            >
              <UserActions
                onProfilePress={() => {
                  setShowUserProfile(true);
                  setShowUserActions(false);
                }}
                onStatusSelect={handleStatusSelect}
              />
            </div>
          </div>
        ) : null}
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
              <UserProfile
                handleClose={() => setShowUserProfile(false)}
                ImageWrapper={ImageWrapper}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
