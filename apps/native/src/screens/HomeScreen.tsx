import React from "react";
import { Pressable, Text, View } from "react-native";
import { ChannelList, Button, useSignOut } from "shared";
import { StackScreenProps } from "./types";

export const HomeScreen = ({ navigation }: StackScreenProps<"Home">) => {
  const { trigger: signOut } = useSignOut();
  return (
    <View style={{ justifyContent: "space-between", flex: 1, padding: 8 }}>
      <ChannelList
        onChannelClick={(channel) =>
          navigation.navigate("Chat", {
            channel,
          })
        }
      ></ChannelList>
      <View style={{ flexDirection: "row" }}>
        <Button onPress={() => signOut({})}>Sign Out</Button>
      </View>
    </View>
  );
};
