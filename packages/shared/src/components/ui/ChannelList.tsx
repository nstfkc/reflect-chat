import { Channel } from "db";
import { TbPlus } from "react-icons/tb";
import { useQuery } from "../../api-client/useQuery";

interface ChannelListProps {
  onChannelClick: (channel: Channel) => void;
  onAddChannelClick: VoidFunction;
}

export const ChannelList = (props: ChannelListProps) => {
  const { onChannelClick, onAddChannelClick } = props;
  const { data, isLoading } = useQuery("/channels");

  if (isLoading && !data) {
    return null;
  }

  return (
    <div>
      <span className="font-semibold tracking-wide">Channels</span>
      <ul className="gap-8">
        {data?.map((channel, idx) => {
          return (
            <li key={idx}>
              <button
                className="py-[2px] px-4 w-full text-left"
                onClick={() => onChannelClick(channel)}
              >
                #{channel.name}
              </button>
            </li>
          );
        })}
        <li className="py-2">
          <button
            className="flex gap-1 items-center font-semibold text-sm px-4"
            onClick={onAddChannelClick}
          >
            <TbPlus className="stroke-[3px]" />
            <span>Add Channel</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
