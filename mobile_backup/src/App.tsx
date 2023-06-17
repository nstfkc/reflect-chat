import { Device } from "@capacitor/device";
import { CapacitorHttp } from "@capacitor/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  AuthProvider,
  SignedIn,
  SignedOut,
  SignInScreen,
  SocketProvider,
  useQuery,
} from "shared";
import { HttpProvider, HTTPHandler, ConfigProvider } from "shared";
import { SafeAreaProvider } from "./components/SafeAreaViewContext";
import { SafeAreaView } from "./components/SafeAreaView";

import { PropsWithChildren, useEffect, useState } from "react";
import { HomeScreen } from "./components/HomeScreen";
import { useOrganisation, useUser } from "shared/src/auth";

const http: HTTPHandler = async (params) => {
  const { url, data, headers, method } = params;
  const res = await CapacitorHttp.request({
    url,
    method,
    data,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  const status = String(res.status);
  const ok = status.startsWith("2") || status.startsWith("3");

  return {
    data: res.data,
    res: {
      ok,
      status: res.status,
    },
  };
};

const router = createBrowserRouter([
  {
    path: "/:channelId?/:messageId?",
    Component: () => (
      <Preload>
        <HomeScreen />
      </Preload>
    ),
  },
]);

const PreloadUsers = ({
  organisationId,
  children,
}: PropsWithChildren<{ organisationId: string }>) => {
  const { data } = useQuery("listUsers", { organisationId });

  if (!data) {
    return <div>Loading....</div>;
  }
  return <>{children}</>;
};

const Preload = ({ children }: PropsWithChildren) => {
  const { user } = useUser();
  const { organisation } = useOrganisation();

  if (!user || !organisation) {
    return <div>Loading..</div>;
  }
  return (
    <>
      <PreloadUsers organisationId={organisation.publicId}>
        {children}
      </PreloadUsers>
    </>
  );
};

const App = () => {
  const [platform, setPlatform] = useState(null);
  useEffect(() => {
    Device.getInfo().then(({ platform }) => {
      setPlatform(platform);
    });
  }, []);

  const serverHost =
    platform === "web" ? "" : "https://reflect-chat-api.fly.dev";

  return (
    <SafeAreaProvider platform={platform}>
      <ConfigProvider
        serverHost={serverHost}
        assetsServiceUrl={import.meta.env.VITE_ASSESTS_SERVICE_HOST}
      >
        <HttpProvider http={http}>
          <AuthProvider>
            <SignedIn>
              <SocketProvider>
                <RouterProvider router={router}></RouterProvider>
              </SocketProvider>
            </SignedIn>
            <SignedOut>
              <SafeAreaView>
                <SignInScreen />
              </SafeAreaView>
            </SignedOut>
          </AuthProvider>
        </HttpProvider>
      </ConfigProvider>
    </SafeAreaProvider>
  );
};

export default App;
