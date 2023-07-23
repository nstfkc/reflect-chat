import { PropsWithChildren, useContext, useRef } from "react";
import { View } from "react-native";
import { Text } from "../../lib/Text";

import format from "date-fns/format";
import { UsersContext } from "../../context/UsersContext";
import { Message } from "db";
import { UserProfilePicture } from "../UserProfilePicture";
import { useTheme } from "../../context/ThemeContext";

interface ChatMessageProps {
  messages: Message[];
  onRender?: (messageId: number) => void;
  fragmentRenderer: (message: Message, index: number) => JSX.Element;
  messageWrapper: (
    message: Message
  ) => (props: PropsWithChildren<{ isFirstMessage?: boolean }>) => JSX.Element;
}

export const ChatMessage = (props: ChatMessageProps) => {
  const {
    fragmentRenderer,
    messages,
    onRender = () => {},
    messageWrapper,
  } = props;
  const theme = useTheme();
  const { getUserById } = useContext(UsersContext);
  const rendered = useRef(false);

  if (!messages[0]) {
    return null;
  }
  const author = getUserById(messages[0].senderId);
  const hour = format(new Date(messages[0].createdAt), "h:mm a");

  const [firstMessage, ...rest] = messages;

  const FirstMessageWrapper = messageWrapper(firstMessage);

  return (
    <>
      <View
        key={messages[0]?.publicId}
        style={{
          width: "100%",
          paddingHorizontal: 6,
        }}
      >
        <FirstMessageWrapper isFirstMessage={true}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              gap: 4,
              paddingTop: 12,
            }}
          >
            <UserProfilePicture
              size={32}
              showUserName={false}
              statusIndicatorBorderColor={theme.colors.primary}
              userId={author?.id}
            />

            <View
              style={{
                flex: 1,
                width: "auto",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  gap: 8,
                  paddingHorizontal: 3,
                }}
              >
                <Text style={{ fontWeight: "800" }}>
                  {author?.userProfile.username}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    opacity: 0.5,
                    paddingBottom: 1,
                  }}
                >
                  {hour}
                </Text>
              </View>
              <View style={{ paddingVertical: 1, paddingHorizontal: 3 }}>
                {fragmentRenderer(firstMessage, 0)}
              </View>
            </View>
          </View>
        </FirstMessageWrapper>
        <View>
          {rest.map((message, index) => {
            const MessageWrapper = messageWrapper(message);
            return (
              <MessageWrapper key={message.publicId}>
                <View style={{ paddingLeft: 38 }}>
                  {fragmentRenderer(message, index)}
                </View>
              </MessageWrapper>
            );
          })}
        </View>
      </View>
    </>
  );
};
