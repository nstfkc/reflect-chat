import { ReactNode, createContext } from "react";

interface ConfigContextValue {
  apiUrl: string;
}

export const ConfigContext = createContext({} as ConfigContextValue);

interface ConfigProviderProps extends ConfigContextValue {
  children: ReactNode;
}

export const ConfigProvider = (props: ConfigProviderProps) => {
  const { children, ...value } = props;

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};
