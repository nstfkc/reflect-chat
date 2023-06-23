import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleProp,
  TextStyle,
  KeyboardAvoidingView,
  Platform,
  VirtualizedList,
} from "react-native";
import { Svg, Circle, Rect } from "react-native-svg";

import { StackScreenProps } from "./types";
import {
  ChatHistory,
  ChatMessage,
  JSONContent,
  MessageContext,
  useChatHistory,
  useUser,
} from "shared";
import { RichTextEditor } from "../components/RichTextEditor";

interface MessageRendererProps {
  content: JSONContent;
}

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
    <>
      {content.map((c, index) => {
        switch (c.type) {
          case "paragraph":
            return (
              <View
                key={index}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Bullet level={listDepth - 1} />
                <Text key={index}>
                  <MessageRendererFragment
                    listDepth={listDepth}
                    key={index}
                    content={c.content}
                  />
                </Text>
              </View>
            );
          case "text":
            return (
              <Text key={index} style={convertMarks(c.marks)}>
                {c.text}
              </Text>
            );
          case "hardBreak":
            return <View style={{ height: 16 }} />;
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
          default:
            return <Text key={index}>{JSON.stringify(c)}</Text>;
        }
      })}
    </>
  );
};

const MessageRenderer = (props: MessageRendererProps) => {
  /* return <Text>{JSON.stringify(props.content.content)}</Text>; */
  return (
    <MessageRendererFragment
      content={props.content.content}
    ></MessageRendererFragment>
  );
};

export const ChatScreen = ({ route }: StackScreenProps<"Chat">) => {
  const { sendMessage } = React.useContext(MessageContext);
  const chatHistory = useChatHistory(route.params.channel);
  const virtualListRef = React.useRef<VirtualizedList<any>>(null);
  const { user } = useUser();

  React.useEffect(() => {
    if (chatHistory.length) {
      virtualListRef.current?.scrollToEnd();
    }
  }, [chatHistory]);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={80}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <VirtualizedList
        ref={virtualListRef}
        initialNumToRender={10}
        data={chatHistory}
        getItem={(data, index) => data[index]}
        keyExtractor={(item: any) => item[0]}
        getItemCount={(data) => data.length}
        renderItem={({ item }) => {
          const [date, messages] = item;
          return (
            <View>
              <View style={{ paddingVertical: 16 }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    letterSpacing: 1,
                  }}
                >
                  {date}
                </Text>
              </View>
              <ChatMessage
                messages={messages}
                fragmentRenderer={(message) => {
                  return (
                    <View key={message.id}>
                      <MessageRenderer content={JSON.parse(message.text)} />
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
      ></VirtualizedList>

      <RichTextEditor
        onSend={(message) => {
          sendMessage(
            {
              channelId: route.params.channel.id,
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
