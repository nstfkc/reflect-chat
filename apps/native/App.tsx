import "react-native-gesture-handler";
import "text-encoding-polyfill";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView, Text } from "react-native";
import * as Device from "expo-device";
import { Feather } from "@expo/vector-icons";

import { setItemAsync, getItemAsync } from "expo-secure-store";

import { getConfig } from "config";
import {
  RootProvider,
  AuthProvider,
  ConfigProvider,
  HttpProvider,
  SignInForm,
  SignedIn,
  SignedOut,
  SWRConfig,
  createIconsProvider,
} from "shared";
import { RootScreen } from "./src/screens/Root";

const config = getConfig(Device.isDevice);

const IconsProvider = createIconsProvider({
  Users: ({ size = 16 }) => <Feather name="users" style={{ fontSize: size }} />,
});

export default function App() {
  const [token, setToken] = React.useState<string | null>(null);
  React.useEffect(() => {
    getItemAsync("access-token").then((value) => setToken(value));
  }, []);
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        isOnline() {
          /* Customize the network state detector */
          return true;
        },
        isVisible() {
          /* Customize the visibility state detector */
          return true;
        },
        initFocus(callback) {
          /* Register the listener with your state provider */
        },
        initReconnect(callback) {
          /* Register the listener with your state provider */
        },
      }}
    >
      <IconsProvider>
        <ConfigProvider baseUrl={config.baseUrl}>
          <HttpProvider accessToken={token} http={null}>
            <AuthProvider onSignOut={() => setToken("")}>
              <StatusBar style="auto" />
              <SafeAreaView style={{ flex: 1 }}>
                <SignedOut>
                  <View
                    style={{ flex: 1, padding: 16, justifyContent: "center" }}
                  >
                    <SignInForm
                      onSuccess={(token) => {
                        setItemAsync("access-token", token).then(() => {
                          setToken(token);
                        });
                      }}
                    />
                  </View>
                </SignedOut>
                <SignedIn>
                  <RootProvider>
                    <RootScreen />
                  </RootProvider>
                </SignedIn>
              </SafeAreaView>
            </AuthProvider>
          </HttpProvider>
        </ConfigProvider>
      </IconsProvider>
    </SWRConfig>
  );
}
