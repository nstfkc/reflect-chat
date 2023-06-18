import * as React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { RichTextEditor } from "./src/components/RichTextEditor";
import * as Device from "expo-device";
import { getConfig } from "config";

const config = getConfig(Device.isDevice);

export default function App() {
  const [channels, setChannels] = React.useState<any>([]);

  React.useEffect(() => {
    fetch(`${config.baseUrl}/api/channels`)
      .then((res) => res.json())
      .then((data) => setChannels(data));
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {channels.map((channel: any) => {
            return <Text key={channel.name}>{channel.name}</Text>;
          })}
        </View>
        <Text>{config.baseUrl}</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
