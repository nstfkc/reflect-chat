import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./HomeScreen";
import { ChatScreen } from "./ChatScreen";

import { RootStackParamList } from "./types";
import { Pressable, View, Text } from "react-native";
import { PeopleList, useTheme } from "shared";

const Stack = createNativeStackNavigator<RootStackParamList>();

const PeopleScreen = ({ navigation }: any) => {
  return (
    <View style={{ padding: 8, backgroundColor: "#fef2f2", flex: 1 }}>
      <PeopleList
        onUserPress={(user) =>
          navigation.navigate("Chat", { kind: "user", user })
        }
      />
    </View>
  );
};

export const RootScreen = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={() => ({
            headerStyle: {
              backgroundColor: theme.colors.secondary,
            },
            headerTitleStyle: {
              color: theme.colors.primary,
            },
          })}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({ route, navigation }) => {
            return {
              title:
                route.params.kind === "channel"
                  ? `# ${route.params.channel.name}`
                  : route.params.user.name,
              headerStyle: {
                backgroundColor: theme.colors.secondary,
              },
              headerTitleStyle: {
                color: theme.colors.primary,
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.navigate("Home")}>
                  <Text style={{ color: theme.colors.alt2 }}>Home</Text>
                </Pressable>
              ),
            };
          }}
        />
        <Stack.Screen
          name="People"
          component={PeopleScreen}
          options={({ navigation }) => {
            return {
              headerStyle: {
                backgroundColor: theme.colors.secondary,
              },
              headerTitleStyle: {
                color: theme.colors.primary,
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.navigate("Home")}>
                  <Text style={{ color: theme.colors.alt2 }}>Home</Text>
                </Pressable>
              ),
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/* export const RootScreenX = () => {
 *   return (
 *     <NavigationContainer>
 *       <Tab.Navigator screenOptions={{ header: () => null }}>
 *         <Tab.Screen name="Home" component={Home} />
 *         <Tab.Screen name="People" component={PeopleScreen} />
 *       </Tab.Navigator>
 *     </NavigationContainer>
 *   );
 * }; */
