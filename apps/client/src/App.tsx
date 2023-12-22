import { useState, useEffect, PropsWithChildren } from "react";

import {
  RootProvider,
  SWRConfig,
  ConfigProvider,
  HttpProvider,
  HTTPHandler,
  AuthProvider,
  createIconsProvider,
  useUser,
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

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
  useLocation,
  useMatch,
  useSearchParams,
} from "react-router-dom";
import { SignInWithMagicLink } from "./screens/SignInWithMagicLink";
import { EmbededChat } from "./screens/ChatScreen/EmbededChat";

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

const ProtectedRoute = () => {
  const { user, isLoading } = useUser();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const match = useMatch("/external/channel/:channelPublicId");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <RootProvider>
        <Outlet />
      </RootProvider>
    );
  }

  if (match) {
    return (
      <Navigate
        to={`/auth/sign-in/magic-link?callback=${
          location.pathname
        }&${searchParams.toString()}`}
      />
    );
  }
  return (
    <Navigate
      to={`/auth/sign-in?callback=${
        location.pathname
      }&${searchParams.toString()}`}
    />
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: (
            <main>
              <HomeScreen />
            </main>
          ),
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
              path: "external/channel/:channelPublicId",
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
                {
                  path: ":messagePublicId",
                  element: <ThreadScreen kind="dm" />,
                },
              ],
            },
            { path: "/people", element: <PeopleScreen /> },
          ],
        },

        {
          path: "/*",
          element: <div>404</div>,
        },
      ],
    },
    {
      path: "/embeded/:channelPublicId/:messagePublicId?",
      element: <EmbededChat />,
    },
    {
      path: "/auth",
      Component: () => (
        <main>
          <Outlet />
        </main>
      ),
      children: [
        {
          path: "sign-in",
          element: <SignInScreen />,
        },
        {
          path: "sign-up",
          element: <SignUpScreen />,
        },
        {
          path: "sign-in/magic-link",
          element: <SignInWithMagicLink />,
        },
      ],
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
              <RouterProvider router={router} />
            </AuthProvider>
          </HttpProvider>
        </ConfigProvider>
      </IconsProvider>
    </SWRConfig>
  );
}

export default App;
