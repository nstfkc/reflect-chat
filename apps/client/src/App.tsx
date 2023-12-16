import { useState, useEffect } from "react";

import {
  RootProvider,
  SWRConfig,
  ConfigProvider,
  HttpProvider,
  HTTPHandler,
  AuthProvider,
  SignedOut,
  SignedIn,
  createIconsProvider,
  ThemeProvider,
} from "shared";

import { HomeScreen } from "./screens/HomeScreen";
import { PeopleScreen } from "./screens/PeopleScreen";
import { ChatScreen, ThreadScreen } from "./screens/ChatScreen";
import { SignInScreen } from "./screens/SignInScreen";
import { SignUpScreen } from "./screens/SignUpScreen";
import { getConfig } from "config";
import {
  TbUsers,
  TbUser,
  TbPlus,
  TbX,
  TbSettings,
  TbExternalLink,
  TbMinus,
} from "react-icons/tb";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const config = getConfig(import.meta.env.PROD);

const IconsProvider = createIconsProvider({
  Users: () => <TbUsers className="text-secondary" />,
  User: ({ size, color }) => (
    <TbUser
      style={{ color, fontSize: `${size}px` }}
      className="text-secondary"
    />
  ),
  Plus: () => <TbPlus className="text-secondary" />,
  Close: () => <TbX className="text-secondary" />,
  Settings: () => <TbSettings className="text-secondary" />,
  ExternalLink: () => <TbExternalLink className="text-secondary" />,
  Minus: () => <TbMinus className="text-secondary" />,
});

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeScreen />,
      children: [
        {
          path: "channel/:channelPublicId",
          element: <ChatScreen kind="channel" />,
          children: [
            {
              path: ":messagePublicId",
              element: <ThreadScreen kind="channel" />,
            },
          ],
        },
        {
          path: "dm/:receiverPublicId",
          element: <ChatScreen kind="dm" />,
          children: [
            { path: ":messagePublicId", element: <ThreadScreen kind="dm" /> },
          ],
        },
        { path: "/people", element: <PeopleScreen /> },
      ],
    },
    {
      path: "/*",
      element: <HomeScreen />,
    },
  ],
  { basename: "/client" }
);

const signedOutRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <SignInScreen />,
    },
    {
      path: "/*",
      element: <SignInScreen />,
    },
    {
      path: "/sign-in",
      element: <SignInScreen />,
    },
    {
      path: "/sign-up",
      element: <SignUpScreen />,
    },
  ],
  { basename: "/client" }
);

function useAccessToken() {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<null | string>(null);
  useEffect(() => {
    const persistedToken = localStorage.getItem("access_token");
    if (persistedToken) {
      setToken(persistedToken);
    }
    setIsLoading(false);
  }, []);

  const updateToken = (newToken: string | null) => {
    if (newToken === null) {
      localStorage.removeItem("access_token");
    } else {
      localStorage.setItem("access_token", newToken);
    }
    setToken(newToken);
  };

  return {
    isLoading,
    token,
    updateToken,
  };
}

function App() {
  const { isLoading, token, updateToken } = useAccessToken();
  const [electronApi, setElectronApi] = useState(null);

  useEffect(() => {
    if ((window as any).electronAPI) {
      setElectronApi((window as any).electronAPI);
    }
  }, []);

  let http: HTTPHandler | null = null;
  if (electronApi) {
    http = async (params) => {
      const { url, ...options } = params;
      return await (window as any).electronAPI.fetch(
        url,
        JSON.stringify(options)
      );
    };
  }

  if (isLoading) {
    return null;
  }

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
        initFocus() {
          /* Register the listener with your state provider */
        },
        initReconnect() {
          /* Register the listener with your state provider */
        },
      }}
    >
      <IconsProvider>
        <ConfigProvider baseUrl={config.baseUrl}>
          <HttpProvider accessToken={token} http={http}>
            <AuthProvider
              onSignIn={(token) => updateToken(token)}
              onSignOut={() => updateToken(null)}
            >
              <SignedOut>
                <ThemeProvider>
                  <RouterProvider router={signedOutRouter}></RouterProvider>
                </ThemeProvider>
              </SignedOut>
              <SignedIn>
                <RootProvider>
                  <main className="bg-primary text-secondary">
                    <RouterProvider router={router} />
                  </main>
                </RootProvider>
              </SignedIn>
            </AuthProvider>
          </HttpProvider>
        </ConfigProvider>
      </IconsProvider>
    </SWRConfig>
  );
}

export default App;
