import "./App.css";
import { useState, useEffect } from "react";

import {
  ConfigProvider,
  HttpProvider,
  HTTPHandler,
  AuthProvider,
  SignedOut,
  SignInForm,
  SignedIn,
  useSignOut,
} from "shared";

/* import { getConfig } from "config"; */

/* const config = getConfig(import.meta.env.PROD); */

interface SignOutProps {
  onSignOut: VoidFunction;
}
const SignOut = (props: SignOutProps) => {
  const { trigger } = useSignOut(props.onSignOut);
  return (
    <div>
      <button onClick={() => trigger({}).then(() => {})}>Sign out</button>
    </div>
  );
};

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
    <ConfigProvider baseUrl={"http://localhost:3000"}>
      <HttpProvider accessToken={token} http={http}>
        <AuthProvider>
          <SignedOut>
            <SignInForm
              onSuccess={(token) => {
                updateToken(token);
              }}
            />
          </SignedOut>
          <SignedIn>
            <SignOut onSignOut={() => updateToken(null)} />
          </SignedIn>
        </AuthProvider>
      </HttpProvider>
    </ConfigProvider>
  );
}

export default App;
