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

const HeightControl = (props: PropsWithChildren) => {
  return (
    <div
      style={{ height: `100vh` }}
      className="relative w-screen overflow-hidden"
    >
      {props.children}
    </div>
  );
};

const Prefetch = () => {
  useQuery("/channels");
  return null;
};

const App = () => {
  return (
    <SWRConfig>
      <SafeAreaProvider>
        <ClerkProvider
          publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
        >
          <SignedIn>
            <SafeAreaView>
              <ConfigProvider apiUrl="http://192.168.1.2:4000">
                <Prefetch />
                <UserProvider>
                  <SocketProvider>
                    <MessageProvider>
                      <UsersProvider>
                        <div className="bg-gray-200">
                          <HeightControl>
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
                          </HeightControl>
                        </div>
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
