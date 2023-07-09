import { Fragment, PropsWithChildren, useContext, useRef } from "react";
import { View, Text, Image } from "react-native";

import format from "date-fns/format";
import { UsersContext } from "../../context/UsersContext";
import { Message } from "db";
import { ConfigContext } from "../../context/ConfigContext";

interface ChatMessageProps {
  messages: Message[];
  onRender: (messageId: string) => void;
  fragmentRenderer: (message: Message, index: number) => JSX.Element;
  messageWrapper: (
    message: Message
  ) => (props: PropsWithChildren<{ isFirstMessage?: boolean }>) => JSX.Element;
}

export const ChatMessage = (props: ChatMessageProps) => {
  const { fragmentRenderer, messages, onRender, messageWrapper } = props;
  const { assetsServiceUrl } = useContext(ConfigContext);
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
        ref={() => {
          if (!rendered.current) {
            rendered.current = true;
            messages.forEach((message) => {
              onRender(message.id);
            });
          }
        }}
        key={messages[0].id}
        style={{
          width: "100%",
          paddingHorizontal: 6,
        }}
      >
        <FirstMessageWrapper isFirstMessage={true}>
          <View
            style={{ flexDirection: "row", alignItems: "flex-start", gap: 4 }}
          >
            <View
              style={{
                width: 24,
                height: 24,
                backgroundColor: author?.userProfile?.profileColor ?? "#32abc2",
                borderRadius: 6,
              }}
            >
              {author.userProfile.profilePictureUrl && (
                <Image
                  style={{ borderRadius: 4 }}
                  source={{
                    width: 24,
                    height: 24,
                    uri: [
                      assetsServiceUrl,
                      author.userProfile.profilePictureUrl,
                    ].join("/"),
                  }}
                />
              )}
            </View>
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
                <Text style={{ fontWeight: "800", opacity: 0.6 }}>
                  {author?.name}
                </Text>
                <Text style={{ fontSize: 12, opacity: 0.5, paddingBottom: 1 }}>
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
              <MessageWrapper key={message.id}>
                <View style={{ paddingLeft: 30 }}>
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
