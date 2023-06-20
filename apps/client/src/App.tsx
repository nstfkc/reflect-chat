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
  Button,
} from "shared";
import { HomeScreen } from "./screens/HomeScreen";

import { getConfig } from "config";

const config = getConfig(import.meta.env.PROD);

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
    <ConfigProvider baseUrl={config.baseUrl}>
      <HttpProvider accessToken={token} http={http}>
        <AuthProvider>
          <SignedOut>
            <div className="flex w-full h-screen justify-center items-center">
              <SignInForm
                onSuccess={(token) => {
                  updateToken(token);
                }}
              />
            </div>
          </SignedOut>
          <SignedIn>
            <HomeScreen />
          </SignedIn>
        </AuthProvider>
      </HttpProvider>
    </ConfigProvider>
  );
}

export default App;