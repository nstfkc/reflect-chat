import { ReactNode, createContext } from "react";

interface ConfigContextValue {
  apiUrl: string;
  socketUrl: string;
  assetsServiceUrl: string;
}

export const ConfigContext = createContext({} as ConfigContextValue);

interface ConfigProviderProps {
  serverHost: string;
  assetsServiceUrl: string;
  children: ReactNode;
}

export const ConfigProvider = (props: ConfigProviderProps) => {
  const { children, serverHost, assetsServiceUrl } = props;

  return (
    <ConfigContext.Provider
      value={{
        apiUrl: [serverHost, "api"].join("/"),
        socketUrl: serverHost,
        assetsServiceUrl,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
