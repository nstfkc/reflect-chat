import { useQuery } from "@shared/api-client/useQuery";
import { CreateChannelDialog } from "./CreateChannelDialog";
import { TbPlus } from "react-icons/tb";

interface ChannelListProps {
  onChannelClick: (channelId: string) => void;
}

export const ChannelList = (props: ChannelListProps) => {
  const { onChannelClick } = props;
  const { data, isLoading } = useQuery("/channels");

  const handleChannelCreate = () => {};

  if (isLoading && !data) {
    return null;
  }

  return (
    <div>
      {data?.map((channel) => {
        return (
          <button onClick={() => onChannelClick(channel.id)} key={channel.id}>
            #{channel.name}
          </button>
        );
      })}
    </div>
  );
};
