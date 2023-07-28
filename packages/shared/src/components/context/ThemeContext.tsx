import { PropsWithChildren, createContext, useContext } from "react";

export const theme = {
  colors: {
    primary: "#FEF3E9",
    secondary: "#22333C",
    tertiary: "#5D513F",
    alt1: "#C6AD8F",
    alt2: "#EBE0D6",
  },
};

export type Theme = typeof theme;

export const ThemeContext = createContext({
  theme,
});

export const ThemeProvider = (props: PropsWithChildren) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const { theme } = useContext(ThemeContext);
  return theme;
}
