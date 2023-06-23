import { Fragment, useContext } from "react";
import { FileUploaderProvider, RawMedia } from "./FileUploader";
import { View, Text } from "react-native";

import format from "date-fns/format";
import { Chat } from "./Chat";
import { MessageContext } from "../../context/MessageContext";
import { UserContext } from "../../context/UserContext";
import { UsersContext } from "../../context/UsersContext";
import { useQuery } from "../../../utils/useQuery";
import { useOrganisation } from "../../../auth";
import { Channel, Message } from "db";
import {
  groupItemsByCreatedAt,
  groupMessagesInTheSameMinute,
  insertDateBetweenMessages,
} from "./utils";

interface ChatHistoryProps {
  channel: Channel;
  fragmentRenderer: (message: Message) => JSX.Element;
}

export const ChatHistory = (props: ChatHistoryProps) => {
  const { channel, fragmentRenderer } = props;
  const { getMessageHistoryById } = useContext(MessageContext);
  const { users } = useContext(UsersContext);
  const { data: history = [] } = useQuery("listMessages", {
    channelId: channel?.id,
  });

  return (
    <>
      {Object.values(
        groupMessagesInTheSameMinute([
          ...history,
          ...getMessageHistoryById(channel?.id),
        ])
      ).map((messages, index) => {
        const author = users.find(
          (user) => user.publicId === messages[0].senderId
        );
        const hour = format(new Date(messages[0].createdAt), "h:mm a");
        return (
          <View
            style={{ width: "100%", borderWidth: 1, borderColor: "black" }}
            key={index}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>{author?.name}</Text>
              <Text style={{ fontSize: 12 }}>{hour}</Text>
            </View>
            <View>
              {messages.map((message) => (
                <Fragment key={message.id}>
                  {fragmentRenderer(message)}
                </Fragment>
              ))}
            </View>
          </View>
        );
      })}
    </>
  );
};

export const useChatHistory = (channel: Channel | undefined) => {
  const { getMessageHistoryById } = useContext(MessageContext);
  const { data: history = [] } = useQuery("listMessages", {
    channelId: channel?.id,
  });

  return insertDateBetweenMessages([
    ...history,
    ...getMessageHistoryById(channel?.id),
  ]);
};
