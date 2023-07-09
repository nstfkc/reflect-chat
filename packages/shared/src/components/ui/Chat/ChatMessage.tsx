import { Fragment, useContext, useRef } from "react";
import { View, Text, Image } from "react-native";

import format from "date-fns/format";
import { UsersContext } from "../../context/UsersContext";
import { Message } from "db";
import { ConfigContext } from "../../context/ConfigContext";

interface ChatMessageProps {
  messages: Message[];
  onRender: (messageId: string) => void;
  fragmentRenderer: (message: Message) => JSX.Element;
}

export const ChatMessage = (props: ChatMessageProps) => {
  const { fragmentRenderer, messages, onRender } = props;
  const { assetsServiceUrl } = useContext(ConfigContext);
  const { getUserById } = useContext(UsersContext);
  const rendered = useRef(false);

  if (!messages[0]) {
    return null;
  }
  const author = getUserById(messages[0].senderId);
  const hour = format(new Date(messages[0].createdAt), "h:mm a");

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
              width: "90%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                gap: 8,
              }}
            >
              <Text style={{ fontWeight: "800", opacity: 0.6 }}>
                {author?.name}
              </Text>
              <Text style={{ fontSize: 12, opacity: 0.5, paddingBottom: 1 }}>
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
