import { useContext } from "react";
import { FileUploaderProvider, RawMedia } from "./FileUploader";
import { Chat } from "./Chat";
import { MessageContext } from "../../context/MessageContext";
import { useQuery } from "../../../api-client/useQuery";
import { UserContext } from "../../context/UserContext";
import { UsersContext } from "../../context/UsersContext";

interface ChatHistoryProps {
  channelId: string;
  onMessageSend?: VoidFunction;
}

export const ChatHistory = (props: ChatHistoryProps) => {
  const { channelId, onMessageSend = () => {} } = props;
  const {
    sendMessage,
    markMessageAsRead,
    getMessageHistoryById,
    markMentionsAsRead,
  } = useContext(MessageContext);

  const { data: history = [] } = useQuery("/messages", {
    where: { channelId },
  });
  const { data: channels } = useQuery("/channels");

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
        senderId: user.id,
        channelId: channelId,
        text,
      },
      medias ?? []
    );
  };

  const messages = [...history, ...getMessageHistoryById(channelId)];
  return (
    <FileUploaderProvider pathPrefix={channel.id}>
      <Chat
        name={`#${channel.name!}`}
        handleSendMessage={handleSendMessage}
        messages={messages as any}
        users={allUsers}
        usersCanBeMentioned={allUsers}
        markAsRead={markMessageAsRead(channel.id)}
        markMentionsAsRead={markMentionsAsRead(channel.id)}
      />
    </FileUploaderProvider>
  );
};
