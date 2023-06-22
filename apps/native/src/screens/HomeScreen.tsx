import React from "react";
import { ChannelList } from "shared";
import { StackScreenProps } from "./types";

export const HomeScreen = ({ navigation }: StackScreenProps<"Home">) => {
  return (
    <ChannelList
      onChannelClick={(channel) =>
        navigation.navigate("Chat", {
          channel,
        })
      }
    ></ChannelList>
  );
};
