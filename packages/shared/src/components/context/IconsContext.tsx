import { PropsWithChildren, createContext } from "react";

type Icon = (props: {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) => JSX.Element;

interface Icons {
  Users: Icon;
  User: Icon;
}

interface IconsContextValue {
  icons: Icons;
}

export const IconsContext = createContext({} as IconsContextValue);

export const createIconsProvider = (icons: Icons) => {
  const IconsProvider = (props: PropsWithChildren) => {
    return (
      <IconsContext.Provider value={{ icons }}>
        {props.children}
      </IconsContext.Provider>
    );
  };

  return IconsProvider;
};
