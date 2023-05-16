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

const App = () => {
  return (
    <SafeAreaProvider>
      <ClerkProvider
        publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      >
        <SignedIn>
          <div className="bg-gray-200">
            <BrowserRouter>
              <Router>
                <ThreadScreen />
                <ChatScreen />
                <HomeScreen />
              </Router>
            </BrowserRouter>
          </div>
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
