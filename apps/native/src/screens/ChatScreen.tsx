import * as React from "react";
import {
  useWindowDimensions,
  Text,
  View,
  ScrollView,
  StyleProp,
  TextStyle,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Svg, Circle, Rect } from "react-native-svg";

import { StackScreenProps } from "./types";
import { ChatHistory, JSONContent } from "shared";
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
  const { width, height } = useWindowDimensions();
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={80}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <ChatHistory
          channel={route.params.channel}
          renderer={(message) => {
            return (
              <View key={message.id}>
                <MessageRenderer content={JSON.parse(message.text)} />
              </View>
            );
          }}
        />
      </ScrollView>
      <RichTextEditor></RichTextEditor>
    </KeyboardAvoidingView>
  );
};
