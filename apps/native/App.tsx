import "text-encoding-polyfill";
import * as React from "react";

import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView } from "react-native";
import * as Device from "expo-device";
import { setItemAsync, getItemAsync } from "expo-secure-store";

import { getConfig } from "config";
import {
  AuthProvider,
  ConfigProvider,
  HttpProvider,
  SignInForm,
  SignedIn,
  SignedOut,
  SWRConfig,
  ChannelList,
} from "shared";

const config = getConfig(Device.isDevice);

export default function App() {
  const [token, setToken] = React.useState("");
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
      <ConfigProvider baseUrl={config.baseUrl}>
        <HttpProvider accessToken={token} http={null}>
          <AuthProvider>
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
                <View style={{ padding: 4 }}>
                  <ChannelList onChannelClick={() => {}} />
                </View>
              </SignedIn>
            </SafeAreaView>
          </AuthProvider>
        </HttpProvider>
      </ConfigProvider>
    </SWRConfig>
  );
}
