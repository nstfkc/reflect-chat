"use client";

import { useSocket } from "@/components/SocketContext/useSocket";
import type { Channel, User } from "db";
import { useContext } from "react";
import { MessageContext } from "@/components/MessageContext/MessageContext";
import { UserContext } from "@/components/UserContext/UserContext";
import { Chat } from "@/components/Chat/Chat";
import { FileUploaderProvider, Media } from "@/components/Chat/FileUploader";
import { MessageV1WithMedia } from "@/types/global";

interface ChannelChatProps {
  channel: Channel;
  history?: MessageV1WithMedia[];
  users?: User[];
}

export const ChannelChat = (props: ChannelChatProps) => {
  const { history = [], users = [], channel } = props;
  const {
    sendMessage,
    markMessageAsRead,
    getMessageHistoryById,
    markMentionsAsRead,
  } = useContext(MessageContext);
  const { user } = useContext(UserContext);

  const handleSendMessage = (text: string, medias?: Media[]) => {
    sendMessage(
      {
        senderId: user.id,
        channelId: channel.id,
        text,
      },
      medias ?? []
    );
  };

  const messages = [...history, ...getMessageHistoryById(channel.id)];

  return (
    <FileUploaderProvider pathPrefix={channel.id}>
      <Chat
        name={channel.name!}
        handleSendMessage={handleSendMessage}
        messages={messages}
        users={users}
        usersCanBeMentioned={users}
        markAsRead={markMessageAsRead(channel.id)}
        markMentionsAsRead={markMentionsAsRead(channel.id)}
      />
    </FileUploaderProvider>
  );
};
