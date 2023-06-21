import React from "react";
import { View, Text } from "react-native";

import { ChannelList } from "shared";
import { StackScreenProps } from "./types";

export const HomeScreen = ({ navigation }: StackScreenProps<"Home">) => {
  return (
    <ChannelList
      onChannelClick={(channel) =>
        navigation.navigate("Chat", {
          channelId: channel.id,
          channelName: channel.name,
        })
      }
    ></ChannelList>
  );
};
