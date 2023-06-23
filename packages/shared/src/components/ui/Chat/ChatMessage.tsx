import { Fragment, useContext } from "react";
import { View, Text } from "react-native";

import format from "date-fns/format";
import { UsersContext } from "../../context/UsersContext";
import { Message } from "db";
import { groupMessagesInTheSameMinute } from "./utils";

interface ChatMessageProps {
  messages: Message[];
  fragmentRenderer: (message: Message) => JSX.Element;
}

export const ChatMessage = (props: ChatMessageProps) => {
  const { fragmentRenderer, messages } = props;
  const { getUserById } = useContext(UsersContext);
  if (!messages[0]) {
    return null;
  }
  const author = getUserById(messages[0].senderId);
  const hour = format(new Date(messages[0].createdAt), "M.d h:mm a");

  return (
    <>
      <View
        key={messages[0].id}
        style={{
          width: "100%",
          paddingVertical: 6,
          paddingHorizontal: 12,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "flex-start", gap: 8 }}
        >
          <View
            style={{
              width: 24,
              height: 24,
              backgroundColor: author.userProfile?.profileColor,
              borderRadius: 6,
            }}
          ></View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                gap: 8,
              }}
            >
              <Text style={{ fontWeight: "800" }}>{author?.name}</Text>
              <Text style={{ fontSize: 12, opacity: 0.6, paddingBottom: 1 }}>
                {hour}
              </Text>
            </View>
            <View>
              {messages.map((message) => (
                <Fragment key={message.id}>
                  {fragmentRenderer(message)}
                </Fragment>
              ))}
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
