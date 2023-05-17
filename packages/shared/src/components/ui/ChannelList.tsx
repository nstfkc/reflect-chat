import { useQuery } from "@shared/api-client/useQuery";

interface ChannelListProps {
  onChannelClick: (channelId: string) => void;
}

export const ChannelList = (props: ChannelListProps) => {
  const { onChannelClick } = props;
  const { data, isLoading } = useQuery("/channels");

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
