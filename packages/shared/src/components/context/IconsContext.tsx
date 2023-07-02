import { PropsWithChildren, createContext } from "react";

type Icon = (props: { size?: number; strokeWidth?: number }) => JSX.Element;

interface Icons {
  Users: Icon;
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
