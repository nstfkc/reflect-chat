import { useQuery } from "@shared/api-client/useQuery";
import { MessageContext } from "@shared/components/context/MessageContext";
import { UserContext } from "@shared/components/context/UserContext";
import { UsersContext } from "@shared/components/context/UsersContext";
import { useContext } from "react";
import { FileUploaderProvider, RawMedia } from "./FileUploader";
import { Chat } from "./Chat";

interface ChatHistoryProps {
  channelId: string;
}

export const ChatHistory = (props: ChatHistoryProps) => {
  const { channelId } = props;
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
