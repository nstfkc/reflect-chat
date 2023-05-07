"use client";

import useSWR from "swr";

import type { Channel } from "db";
import { useContext } from "react";
import { MessageContext } from "@/components/MessageContext/MessageContext";
import { UserContext } from "@/components/UserContext/UserContext";
import { Chat } from "@/components/Chat/Chat";
import { FileUploaderProvider, Media } from "@/components/Chat/FileUploader";
import { MessageV1WithMedia } from "@/types/global";

const fetchChannelMessages = async (
  url: string
): Promise<MessageV1WithMedia[]> => {
  return await fetch(url).then((res) => res.json());
};

interface ChannelChatProps {
  channel: Channel;
  history?: MessageV1WithMedia[];
}

export const ChannelChat = (props: ChannelChatProps) => {
  const { channel } = props;
  const {
    sendMessage,
    markMessageAsRead,
    getMessageHistoryById,
    markMentionsAsRead,
  } = useContext(MessageContext);

  const { data: history = [] } = useSWR(
    `/_api/channel/messages/${channel.id}`,
    fetchChannelMessages
  );

  const { user, allUsers } = useContext(UserContext);

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
        name={`#${channel.name!}`}
        handleSendMessage={handleSendMessage}
        messages={messages}
        users={allUsers}
        usersCanBeMentioned={allUsers}
        markAsRead={markMessageAsRead(channel.id)}
        markMentionsAsRead={markMentionsAsRead(channel.id)}
      />
    </FileUploaderProvider>
  );
};
