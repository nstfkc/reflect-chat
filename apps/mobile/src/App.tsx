import { Device } from "@capacitor/device";
import { CapacitorHttp } from "@capacitor/core";
import { AuthProvider, SignedIn, SignedOut, useUser, useSignOut } from "shared";
import { HttpProvider, HTTPHandler, ConfigProvider, SignInForm } from "shared";
import { SafeAreaProvider } from "./components/SafeAreaViewContext";
import { SafeAreaView } from "./components/SafeAreaView";
import {
  useOrganisation,
  useSwitchOrganisation,
} from "shared/src/auth/useLogin";
import { useEffect, useState } from "react";

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

const Component = () => {
  const { user } = useUser();
  const { organisation } = useOrganisation();
  const { trigger } = useSwitchOrganisation();

  if (user) {
    return (
      <div>
        {user.memberships.map((m) => {
          return (
            <div>
              <button
                key={m.organisationId}
                onClick={() =>
                  trigger({ organisationId: m.organisation.publicId })
                }
              >
                {m.organisation.name}{" "}
                {organisation?.publicId === m.organisation.publicId
                  ? "Active"
                  : ""}
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  return <div>Loading...</div>;
};

const SignOutButton = () => {
  const { trigger } = useSignOut();

  return (
    <button
      className="bg-black text-white"
      onClick={() => {
        trigger({});
      }}
    >
      Sign out
    </button>
  );
};

const App = () => {
  const [platform, setPlatform] = useState(null);
  useEffect(() => {
    Device.getInfo().then(({ platform }) => {
      setPlatform(platform);
    });
  }, []);

  const baseAPIUrl = platform === "web" ? "" : "http://0.0.0.0:8080";

  return (
    <SafeAreaProvider platform={platform}>
      <ConfigProvider
        apiUrl={[baseAPIUrl, "api"].join("/")}
        assetsServiceUrl={import.meta.env.VITE_ASSESTS_SERVICE_HOST}
      >
        <HttpProvider http={http}>
          <AuthProvider>
            <SignedIn>
              <SafeAreaView>
                <Component />
                <SignOutButton />
              </SafeAreaView>
            </SignedIn>
            <SignedOut>
              <SafeAreaView>
                <SignInForm />
              </SafeAreaView>
            </SignedOut>
          </AuthProvider>
        </HttpProvider>
      </ConfigProvider>
    </SafeAreaProvider>
  );
};

export default App;
