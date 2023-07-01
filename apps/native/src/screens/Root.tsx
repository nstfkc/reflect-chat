import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./HomeScreen";
import { ChatScreen } from "./ChatScreen";

import { RootStackParamList } from "./types";
import { Pressable, View, Text } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={() => ({
            headerStyle: {
              backgroundColor: "#e7dede",
            },
          })}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({ route, navigation }) => ({
            title: `# ${route.params.channel.name}`,
            headerStyle: {
              backgroundColor: "#e7dede",
            },
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Text>Home</Text>
              </Pressable>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
