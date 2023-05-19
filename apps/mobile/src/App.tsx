import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { Route } from "./router/Route";

import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import { SWRConfig } from "swr";

import { Auth } from "./Auth";
import { SafeAreaProvider } from "./components/SafeAreaViewContext";
import { SafeAreaView } from "./components/SafeAreaView";
import { HomeScreen } from "./screens/HomeScreen";
import { ThreadScreen } from "./screens/ThreadScreen";
import { ChatScreen } from "./screens/ChatScreen";
import {
  ConfigProvider,
  MessageProvider,
  SocketProvider,
  UserProvider,
  UsersProvider,
  useQuery,
} from "shared";
import { ModalRoot } from "./components/Modal";
import { PropsWithChildren } from "react";

const Prefetch = () => {
  useQuery("/channels");
  return null;
};

const App = () => {
  console.log({ x: import.meta.env.VITE_ASSESTS_SERVICE_HOST });
  return (
    <SWRConfig>
      <SafeAreaProvider>
        <ClerkProvider
          publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
        >
          <SignedIn>
            <SafeAreaView>
              <ConfigProvider
                apiUrl="http://192.168.1.2:4000"
                assetsServiceUrl={import.meta.env.VITE_ASSESTS_SERVICE_HOST}
              >
                <Prefetch />
                <UserProvider>
                  <SocketProvider>
                    <MessageProvider>
                      <UsersProvider>
                        <BrowserRouter>
                          <Router>
                            <ThreadScreen />
                            <Route path="/channel/:channelId">
                              <ChatScreen />
                            </Route>
                            <HomeScreen />
                          </Router>
                        </BrowserRouter>
                        <ModalRoot />
                      </UsersProvider>
                    </MessageProvider>
                  </SocketProvider>
                </UserProvider>
              </ConfigProvider>
            </SafeAreaView>
          </SignedIn>
          <SignedOut>
            <SafeAreaView>
              <Auth />
            </SafeAreaView>
          </SignedOut>
        </ClerkProvider>
      </SafeAreaProvider>
    </SWRConfig>
  );
};

export default App;
