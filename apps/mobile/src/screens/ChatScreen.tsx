import { RouterParametersContext } from "@/router/Route";
import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChatHistory, useQuery } from "shared";

const Title = () => {
  const { data } = useQuery("/channels");
  const { params } = useContext(RouterParametersContext);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("router-title-/channel/:channelId");
    if (el) {
      setContainer(el);
    }
  }, []);

  if (!container) {
    return null;
  }

  if (!data) {
    return null;
  }

  const channel = data.find((channel) => channel.id === params.channelId);

  if (!channel) {
    return null;
  }

  return <>{createPortal(<div>#{channel.name}</div>, container)}</>;
};

export const ChatScreen = () => {
  const { params } = useContext(RouterParametersContext);
  return (
    <div className="bg-blue-200 h-full py-8">
      <Title />
      <div>
        <ChatHistory channelId={params.channelId} />
      </div>
    </div>
  );
};
