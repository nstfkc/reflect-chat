import * as React from "react";
import { Text, View } from "react-native";
import { StackScreenProps } from "./types";

export const ChatScreen = ({ route }: StackScreenProps<"Chat">) => {
  return (
    <View>
      <Text>{route.params.channelId}</Text>
    </View>
  );
};
