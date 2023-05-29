"use client";
import { PropsWithChildren, ReactNode, createContext, useContext } from "react";
import { SignedInUser } from "./useMe";
import { useQuery } from "../utils/useQuery";

interface AuthContextValue {
  user: SignedInUser;
  isUserLoading: boolean;
  authURL: string;
}

export const AuthContext = createContext({} as AuthContextValue);

interface AuthProviderProps {
  children: ReactNode;
  authURL: string;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children, authURL } = props;
  const { data, isLoading, error } = useQuery("me");

  return (
    <AuthContext.Provider
      value={{
        authURL,
        isUserLoading: isLoading,
        user: data as any,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const SignedIn = (props: PropsWithChildren) => {
  const { isUserLoading, user } = useContext(AuthContext);

  if (user && !isUserLoading) {
    return <>{props.children}</>;
  }
  return null;
};

export const SignedOut = (props: PropsWithChildren) => {
  const { isUserLoading, user } = useContext(AuthContext);

  if (!user && !isUserLoading) {
    return <>{props.children}</>;
  }

  return null;
};
