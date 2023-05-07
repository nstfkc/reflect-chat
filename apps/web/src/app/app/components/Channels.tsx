import useSWR from "swr";
import { Channel } from "db";
import { CreateChannelDialog } from "./CreateChannelDialog";
import { TbPlus } from "react-icons/tb";
import { useContext } from "react";
import { HiHashtag, HiLockClosed } from "react-icons/hi2";
import Link from "next/link";
import { useParams } from "next/navigation";
import { cx } from "class-variance-authority";
import { MessageContext } from "@/components/MessageContext/MessageContext";

const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-sm font-semibold text-gray-700">{children}</span>
  );
};

const fetchChannels = (): Promise<Channel[]> =>
  fetch("/_api/channels").then((res) => res.json());

export const Channels = () => {
  const {
    data: channels,
    isLoading,
    mutate,
  } = useSWR("/_api/channels", fetchChannels, { fallbackData: [] });

  const { channelId } = useParams();

  const { unreadMessages, unreadMentions } = useContext(MessageContext);

  const handleChannelCreate = (channel: Channel) => {
    mutate([...channels, channel]);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        {channels.map((channel) => {
          const unreadCMCount =
            channelId !== channel.id ? unreadMessages[channel.id]?.size : 0;
          const underadMentionCount =
            channelId !== channel.id ? unreadMentions[channel.id]?.size : 0;

          return (
            <Link href={`/app/channel/${channel.id}`} key={channel.id}>
              <div
                className={cx(
                  "flex items-center justify-between rounded-md gap-[2px] px-2",
                  channel.id === channelId ? "bg-gray-200" : "",
                  unreadCMCount > 0 ? "font-bold" : ""
                )}
              >
                <div className="flex items-center">
                  <span>
                    {channel.kind === "Public" ? (
                      <HiHashtag />
                    ) : (
                      <HiLockClosed />
                    )}
                  </span>
                  <span>{channel.name}</span>
                </div>
                {underadMentionCount > 0 ? (
                  <div className="w-[30px] text-center text-sm flex items-center justify-center font-semibold rounded-full bg-gray-300">
                    {underadMentionCount}
                  </div>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>
      <CreateChannelDialog onChannelCreate={handleChannelCreate}>
        <button className="flex gap-1 items-center hover">
          <span className="font-bold bg-gray-200 rounded-lg p-1 ">
            <TbPlus className="stroke-[3px]" />
          </span>
          <Text>Add channel</Text>
        </button>
      </CreateChannelDialog>
    </div>
  );
};
