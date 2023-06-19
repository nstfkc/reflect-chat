import "text-encoding-polyfill";
import * as React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, Text, Button } from "react-native";
import { RichTextEditor } from "./src/components/RichTextEditor";
import * as Device from "expo-device";
import { setItemAsync, getItemAsync, deleteItemAsync } from "expo-secure-store";

import { getConfig } from "config";
import {
  AuthProvider,
  ConfigProvider,
  HttpProvider,
  SignInForm,
  useUser,
  SignedIn,
  SignedOut,
  useSignOut,
  SWRConfig,
} from "shared";

const config = getConfig(Device.isDevice);

const User = () => {
  const { user } = useUser();
  return (
    <View>
      <Text>{JSON.stringify(user)}</Text>
    </View>
  );
};

const SignOut = (props: { onSignOut: VoidFunction }) => {
  const { trigger } = useSignOut(() => {
    props.onSignOut();
  });
  const { user } = useUser();

  return (
    <Button
      onPress={() => trigger({})}
      title={`Sign out ${user.name}`}
    ></Button>
  );
};

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
        <HttpProvider accessToken={token}>
          <AuthProvider>
            <StatusBar style="auto" />
            <SafeAreaView style={{ flex: 1 }}>
              <Text>Token: {token}</Text>
              <SignedOut>
                <SignInForm
                  onSuccess={(token) => {
                    setItemAsync("access-token", token).then(() => {
                      setToken(token);
                    });
                  }}
                />
              </SignedOut>
              <SignedIn>
                <User />
                <SignOut
                  onSignOut={() => {
                    deleteItemAsync("access-token").then(() => setToken(""));
                  }}
                />
              </SignedIn>
            </SafeAreaView>
          </AuthProvider>
        </HttpProvider>
      </ConfigProvider>
    </SWRConfig>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
