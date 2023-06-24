"use client";
import { PropsWithChildren, ReactNode, createContext, useContext } from "react";
import { SignedInUser } from "./useMe";
import { useQuery } from "../utils/useQuery";

interface AuthContextValue {
  user: SignedInUser;
  onSignOut: VoidFunction;
  onSignIn: (token: string) => void;
  isUserLoading: boolean;
}

export const AuthContext = createContext({} as AuthContextValue);

interface AuthProviderProps {
  children: ReactNode;
  onSignOut?: VoidFunction;
  onSignIn?: (token: string) => void;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children, onSignOut = () => {}, onSignIn = (_) => {} } = props;
  const { data, isLoading, mutate } = useQuery("me", null, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });

  return (
    <AuthContext.Provider
      value={{
        onSignIn,
        onSignOut: () => {
          console.log("mutated");
          mutate(null);
        },
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
