import { CapacitorHttp } from "@capacitor/core";
import { AuthProvider, SignedIn, SignedOut, useUser, useSignOut } from "shared";
import { HttpProvider, HTTPHandler, ConfigProvider, SignInForm } from "shared";
import { SafeAreaProvider } from "./components/SafeAreaViewContext";
import { SafeAreaView } from "./components/SafeAreaView";

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

  if (user) {
    return (
      <div>
        {user.memberships.map((m) => {
          return <div key={m.organisationId}>{m.organisation.name}</div>;
        })}
      </div>
    );
  }

  return <div>Loading...</div>;
};

const SignOutButton = () => {
  const { trigger } = useSignOut();

  return (
    <button className="bg-black text-white" onClick={trigger}>
      Sign out
    </button>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <ConfigProvider
        apiUrl={import.meta.env.VITE_API_HOST}
        assetsServiceUrl={import.meta.env.VITE_ASSESTS_SERVICE_HOST}
      >
        <HttpProvider http={http}>
          <AuthProvider authURL="http://0.0.0.0:8080/auth">
            <SafeAreaView>
              <SignedIn>
                <Component />
                <SignOutButton />
              </SignedIn>
              <SignedOut>
                <SignInForm />
              </SignedOut>
            </SafeAreaView>
          </AuthProvider>
        </HttpProvider>
      </ConfigProvider>
    </SafeAreaProvider>
  );
};

export default App;
