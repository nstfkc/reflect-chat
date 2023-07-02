import React from "react";
import { View } from "react-native";
import { ChannelList, DMList, Organisation } from "shared";
import { StackScreenProps } from "./types";

export const HomeScreen = ({ navigation }: StackScreenProps<"Home">) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 8,
        backgroundColor: "#fef2f2",
        gap: 16,
      }}
    >
      <Organisation navigateToPeople={() => navigation.navigate("People")} />
      <ChannelList
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
