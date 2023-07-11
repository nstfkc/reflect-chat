import React from "react";
import { View } from "react-native";
import { ChannelList, DMList, Organisation, useTheme } from "shared";
import { StackScreenProps } from "./types";

export const HomeScreen = ({ navigation }: StackScreenProps<"Home">) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        padding: 8,
        backgroundColor: theme.colors.alt2,
        gap: 16,
      }}
    >
      <Organisation navigateToPeople={() => navigation.navigate("People")} />
      <ChannelList
        activeChannelId={"null"}
        onChannelClick={(channel) =>
          navigation.navigate("Chat", {
            kind: "channel",
            channel,
          })
        }
      ></ChannelList>
      <DMList
        onConversationPress={(user) => {
          navigation.navigate("Chat", { kind: "user", user });
        }}
      />
    </View>
  );
};
