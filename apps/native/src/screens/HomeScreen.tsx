import React from "react";
import { View } from "react-native";
import { ChannelList, Button, useSignOut, ProfileButton } from "shared";
import { StackScreenProps } from "./types";

export const HomeScreen = ({ navigation }: StackScreenProps<"Activities">) => {
  const { trigger: signOut } = useSignOut();
  return (
    <View
      style={{
        justifyContent: "space-between",
        flex: 1,
        padding: 8,
        backgroundColor: "#fef2f2",
      }}
    >
      <ChannelList
        onChannelClick={(channel) =>
          navigation.navigate("Chat", {
            kind: "channel",
            channel,
          })
        }
      ></ChannelList>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ProfileButton onPress={() => {}} />
        <View style={{ flexDirection: "row" }}>
          <Button onPress={() => signOut({})}>Sign Out</Button>
        </View>
      </View>
    </View>
  );
};
