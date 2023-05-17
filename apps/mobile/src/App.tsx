import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";

import { Auth } from "./Auth";
import { SafeAreaProvider } from "./components/SafeAreaViewContext";
import { SafeAreaView } from "./components/SafeAreaView";
import { HomeScreen } from "./screens/HomeScreen";
import { ThreadScreen } from "./screens/ThreadScreen";
import { ChatScreen } from "./screens/ChatScreen";
import { ConfigProvider, SocketProvider, UserProvider } from "shared";
import { ModalRoot } from "./components/Modal";

const App = () => {
  return (
    <SafeAreaProvider>
      <ModalRoot />
      <ClerkProvider
        publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      >
        <SignedIn>
          <ConfigProvider apiUrl="http://localhost:4000">
            <UserProvider>
              <SocketProvider>
                <div className="bg-gray-200">
                  <BrowserRouter>
                    <Router>
                      <ThreadScreen />
                      <ChatScreen />
                      <HomeScreen />
                    </Router>
                  </BrowserRouter>
                </div>
              </SocketProvider>
            </UserProvider>
          </ConfigProvider>
        </SignedIn>
        <SignedOut>
          <SafeAreaView>
            <Auth />
          </SafeAreaView>
        </SignedOut>
      </ClerkProvider>
    </SafeAreaProvider>
  );
};

export default App;
