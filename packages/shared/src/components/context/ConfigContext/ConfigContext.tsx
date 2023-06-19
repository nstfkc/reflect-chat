"use client";
import { ReactNode, createContext } from "react";

interface ConfigContextValue {
  apiUrl: string;
  socketUrl: string;
  assetsServiceUrl: string;
}

export const ConfigContext = createContext({} as ConfigContextValue);

interface ConfigProviderProps {
  baseUrl: string;
  children: ReactNode;
}

export const ConfigProvider = (props: ConfigProviderProps) => {
  const { children, baseUrl } = props;

  return (
    <ConfigContext.Provider
      value={{
        apiUrl: [baseUrl, "api"].join("/"),
        socketUrl: baseUrl,
        assetsServiceUrl: [baseUrl, "media"].join("/"),
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
