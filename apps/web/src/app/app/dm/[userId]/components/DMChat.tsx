"use client";

import { User } from "db";
import { useContext } from "react";
import { MessageContext } from "@/components/MessageContext/MessageContext";
import { UserContext } from "@/components/UserContext/UserContext";
import { Chat } from "@/components/Chat/Chat";
import { FileUploaderProvider, Media } from "@/components/Chat/FileUploader";
import { MessageV1WithMedia } from "@/types/global";

interface ChannelChatProps {
  history?: MessageV1WithMedia[];
  otherUser: User;
}

export const DMChat = (props: ChannelChatProps) => {
  const { history = [], otherUser } = props;
  const { sendMessage, markMessageAsRead, getMessageHistoryById } =
    useContext(MessageContext);
  const { user, allUsers } = useContext(UserContext);

  const handleSendMessage = (text: string, media: Media[]) => {
    sendMessage(
      {
        senderId: user.id,
        receiverId: otherUser.id,
        text,
      },
      media
    );
  };

  const messages = [...history, ...getMessageHistoryById(otherUser.id)];

  return (
    <FileUploaderProvider pathPrefix={`${user.id}/${otherUser.id}`}>
      <Chat
        name={otherUser.username!}
        handleSendMessage={handleSendMessage}
        messages={messages}
        users={[user, otherUser]}
        markAsRead={markMessageAsRead(otherUser.id)}
        usersCanBeMentioned={allUsers}
      />
    </FileUploaderProvider>
  );
};
