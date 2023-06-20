import { useParams } from "react-router-dom";

export const ChatScreen = () => {
  let { channelId } = useParams();
  return <div>{channelId}</div>;
};
