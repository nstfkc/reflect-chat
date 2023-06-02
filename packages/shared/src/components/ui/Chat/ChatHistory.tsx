import { useContext } from "react";
import { FileUploaderProvider, RawMedia } from "./FileUploader";
import { Chat } from "./Chat";
import { MessageContext } from "../../context/MessageContext";
import { UserContext } from "../../context/UserContext";
import { UsersContext } from "../../context/UsersContext";
import { useQuery } from "../../../utils/useQuery";
import { useOrganisation } from "../../../auth";

interface ChatHistoryProps {
  channelId: string;
  onMessageSend?: VoidFunction;
}

export const ChatHistory = (props: ChatHistoryProps) => {
  return null;
  const { channelId, onMessageSend = () => {} } = props;
  const {
    sendMessage,
    markMessageAsRead,
    getMessageHistoryById,
    markMentionsAsRead,
  } = useContext(MessageContext);
  const { organisation } = useOrganisation();

  const { data: history = [] } = useQuery("listMessages");
  const { data: channels } = useQuery("listChannels", {
    organisationId: organisation?.publicId,
  });

  const channel = channels?.find((c) => c.id === channelId)!;
  const { user } = useContext(UserContext);
  const { allUsers } = useContext(UsersContext);

  if (!channel) {
    return null;
  }

  const handleSendMessage = (text: string, medias?: RawMedia[]) => {
    onMessageSend();
    sendMessage(
      {
        senderId: user.publicId,
        channelId: channelId,
        text,
      },
      medias ?? []
    );
  };

  const messages = [...history, ...getMessageHistoryById(channelId)];
  return (
    <Chat
      messages={messages as any}
      users={allUsers}
      markAsRead={markMessageAsRead(channel.id)}
      markMentionsAsRead={markMentionsAsRead(channel.id)}
    />
  );
};
