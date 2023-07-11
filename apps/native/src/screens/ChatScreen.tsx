import * as React from "react";
import {
  View,
  FlatList,
  StyleProp,
  TextStyle,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { Svg, Circle, Rect } from "react-native-svg";

import { StackScreenProps } from "./types";
import {
  ChatMessage,
  JSONContent,
  MessageContext,
  useChatHistory,
  useUser,
  Text,
  useTheme,
} from "shared";
import { RichTextEditor } from "../components/RichTextEditor";

function convertMarks(marks: JSONContent["marks"]): StyleProp<TextStyle> {
  return marks?.map((mark) => {
    return mark.type === "bold"
      ? { fontWeight: "bold" }
      : mark.type === "italic"
      ? { fontStyle: "italic" }
      : {};
  });
}

const Bullet = ({ level }: { level: number }) => {
  if (level < 0) {
    return null;
  }
  return (
    <View
      style={[
        {
          width: 16,
          height: 16,
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      <Svg height="50%" width="50%" viewBox="0 0 16 16">
        {level % 3 === 0 ? (
          <Circle
            cx="8"
            cy="8"
            r="4"
            stroke="black"
            strokeWidth="1"
            fill="black"
          />
        ) : level % 3 === 1 ? (
          <Circle
            cx="8"
            cy="8"
            r="4"
            stroke="black"
            strokeWidth="1"
            fill="transparent"
          />
        ) : level % 3 === 2 ? (
          <Rect
            x="4"
            y="4"
            width="8"
            height="8"
            stroke="black"
            strokeWidth="1"
            fill="black"
          />
        ) : null}
      </Svg>
    </View>
  );
};

const MessageRendererFragment = ({
  listDepth = 0,
  content,
}: {
  textPrefix?: string;
  listDepth?: number;
  content: JSONContent["content"];
}) => {
  if (!content) {
    return null;
  }

  return (
    <React.Fragment>
      {content.map((c, index) => {
        switch (c.type) {
          case "paragraph":
            return (
              <Text key={index} style={{ fontSize: 16 }}>
                <Bullet level={listDepth - 1} />
                <Text key={index} style={{ opacity: 0.9 }}>
                  <MessageRendererFragment
                    listDepth={listDepth}
                    key={index}
                    content={c.content}
                  />
                </Text>
              </Text>
            );
          case "text":
            return (
              <Text
                key={index}
                style={[convertMarks(c.marks), { fontSize: 16 }]}
              >
                {c.text}
              </Text>
            );
          case "hardBreak":
            return <View key={index} style={{ height: 16 }} />;
          case "bulletList":
            return (
              <View key={index}>
                <MessageRendererFragment
                  listDepth={listDepth}
                  content={c.content}
                />
              </View>
            );
          case "listItem":
            return (
              <View key={index} style={{ paddingLeft: 16 }}>
                <MessageRendererFragment
                  textPrefix={`\u2022`}
                  content={c.content}
                  listDepth={listDepth + 1}
                />
              </View>
            );
          case "mention":
            return (
              <Pressable
                key={index}
                style={{
                  backgroundColor: "rgba(0,0,0,0.15)",
                  opacity: 0.7,
                  paddingHorizontal: 3,
                  borderRadius: 4,
                  marginTop: -3,
                }}
              >
                <Text style={{ fontSize: 16 }}>@{(c as any).attrs.label}</Text>
              </Pressable>
            );
          default:
            return <Text key={index}>{JSON.stringify(c)}</Text>;
        }
      })}
    </React.Fragment>
  );
};

const RenderMessage = React.memo(
  ({
    item,
    onRender,
  }: {
    onRender: (messageId: string) => void;
    item: string | any[];
  }) => {
    if (typeof item === "string") {
      return (
        <View style={{ paddingVertical: 16 }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            {item}
          </Text>
        </View>
      );
    }
    return (
      <ChatMessage
        messages={item}
        onRender={onRender}
        messageWrapper={() => {
          return function Wrapper({ children }) {
            return (
              <View style={{ paddingHorizontal: 2, paddingVertical: 4 }}>
                {children}
              </View>
            );
          };
        }}
        fragmentRenderer={(message) => {
          return (
            <View key={message.id}>
              <MessageRendererFragment content={JSON.parse(message.text)} />
            </View>
          );
        }}
      />
    );
  }
);

RenderMessage.displayName = "RenderMessage";

export const ChatScreen = ({ route }: StackScreenProps<"Chat">) => {
  const receiverId =
    route.params.kind === "user" ? route.params.user.publicId : null;
  const channelId =
    route.params.kind === "channel" ? route.params.channel.id : null;

  const { sendMessage, markMentionsAsRead, markMessageAsRead } =
    React.useContext(MessageContext);
  const chatHistory = useChatHistory({
    channelId,
    receiverId,
  });

  const virtualListRef = React.useRef<FlatList<any>>(null);
  const { user } = useUser();
  const theme = useTheme();

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={80}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: theme.colors.primary }}
    >
      <FlatList
        ref={virtualListRef}
        data={chatHistory.reverse()}
        inverted={true}
        renderItem={({ item }) => (
          <RenderMessage
            onRender={(messageId) => {
              markMentionsAsRead(String(channelId ?? receiverId))(messageId);
              markMessageAsRead(String(channelId ?? receiverId))(messageId);
            }}
            item={item}
          />
        )}
      ></FlatList>
      <RichTextEditor
        onSend={(message) => {
          sendMessage(
            {
              receiverId,
              channelId,
              senderId: user?.publicId,
              text: message,
            },
            []
          );
        }}
      ></RichTextEditor>
    </KeyboardAvoidingView>
  );
};
