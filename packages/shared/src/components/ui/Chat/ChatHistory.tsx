import { useContext } from "react";
import { FileUploaderProvider, RawMedia } from "./FileUploader";
import { Chat } from "./Chat";
import { MessageContext } from "../../context/MessageContext";
import { UserContext } from "../../context/UserContext";
import { UsersContext } from "../../context/UsersContext";
import { useQuery } from "../../../utils/useQuery";
import { useOrganisation } from "../../../auth";
import { Channel, Message } from "db";

interface ChatHistoryProps {
  channel: Channel;
  renderer: (message: Message) => JSX.Element;
}

export const ChatHistory = (props: ChatHistoryProps) => {
  const { channel, renderer } = props;
  const { getMessageHistoryById } = useContext(MessageContext);
  const { data: history = [] } = useQuery("listMessages", {
    channelId: channel?.id,
  });

  return (
    <>
      {[...history, ...getMessageHistoryById(channel?.id)].map((message) =>
        renderer(message)
      )}
    </>
  );
};
