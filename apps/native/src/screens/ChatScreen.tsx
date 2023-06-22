import * as React from "react";
import {
  useWindowDimensions,
  Text,
  View,
  ScrollView,
  StyleProp,
  TextStyle,
} from "react-native";
import { StackScreenProps } from "./types";
import { ChatHistory, JSONContent } from "shared";

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

const MessageRendererFragment = ({
  textPrefix = "",
  content,
}: {
  textPrefix?: string;
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
              <Text key={index}>
                {textPrefix ? (
                  <Text style={{ paddingHorizontal: 8 }}>{textPrefix}</Text>
                ) : null}
                <MessageRendererFragment key={index} content={c.content} />
              </Text>
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
                <MessageRendererFragment content={c.content} />
              </View>
            );
          case "listItem":
            return (
              <View key={index} style={{ paddingLeft: 16 }}>
                <MessageRendererFragment
                  textPrefix={`\u2022`}
                  content={c.content}
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
  const { width } = useWindowDimensions();
  return (
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
  );
};
