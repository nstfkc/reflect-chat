import { RouteTitle, RouterParametersContext } from "@/router/Route";
import { useContext } from "react";
import { ChatHistory, useQuery } from "shared";

const Title = () => {
  const { data = [] } = useQuery("/channels");
  const { params } = useContext(RouterParametersContext);

  const channel = data.find((channel) => channel.id === params.channelId);

  if (!channel) {
    return null;
  }

  return (
    <RouteTitle>
      <div className="p-4 font-semibold tracking-wide shadow-md">
        #{channel.name}
      </div>
    </RouteTitle>
  );
};

export const ChatScreen = () => {
  const { params } = useContext(RouterParametersContext);
  return (
    <div className="h-full bg-white">
      <Title />
      <ChatHistory channelId={params.channelId} />
    </div>
  );
};
