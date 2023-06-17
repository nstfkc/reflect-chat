"use client";

import useSWR from "swr";
import { useContext } from "react";
import { MessageContext } from "@/components/MessageContext/MessageContext";
import { UserContext } from "@/components/UserContext/UserContext";
import { Chat } from "@/components/Chat/Chat";
import { FileUploaderProvider, Media } from "@/components/Chat/FileUploader";
import { MessageV1WithMedia } from "@/types/global";
import { useParams } from "next/navigation";

const fetchDMs = async (url: string): Promise<MessageV1WithMedia[]> => {
  return await fetch(url).then((res) => res.json());
};

export const DMChat = () => {
  const { userId } = useParams();
  const { data: history = [] } = useSWR(`/_api/messages/${userId}`, fetchDMs);

  const { sendMessage, markMessageAsRead, getMessageHistoryById } =
    useContext(MessageContext);

  const { user, allUsers, getUserById } = useContext(UserContext);

  const otherUser = getUserById(userId);

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
