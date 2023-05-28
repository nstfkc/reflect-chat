import { ReactNode, createContext } from "react";

export const HttpContext = createContext({
  fetch,
});

interface HttpProviderProps {
  fetch: typeof fetch;
  children: ReactNode;
}

export const HttpProvider = (props: HttpProviderProps) => {
  return (
    <HttpContext.Provider value={{ fetch: props.fetch }}>
      {props.children}
    </HttpContext.Provider>
  );
};
