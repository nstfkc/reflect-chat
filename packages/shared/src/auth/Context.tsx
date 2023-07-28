"use client";
import { PropsWithChildren, ReactNode, createContext, useContext } from "react";
import { SignedInUser } from "./useMe";
import { useQuery } from "../utils/useQuery";

interface AuthContextValue {
  user: SignedInUser;
  onSignOut: VoidFunction;
  onSignIn: (token: string) => void;
  isUserLoading: boolean;
  error: any;
}

export const AuthContext = createContext({} as AuthContextValue);

interface AuthProviderProps {
  children: ReactNode;
  onSignOut?: VoidFunction;
  onSignIn?: (token: string) => void;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children, onSignOut = () => {}, onSignIn = (_) => {} } = props;
  const { data, isLoading, mutate, error } = useQuery("me", null, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });

  return (
    <AuthContext.Provider
      value={{
        onSignIn,
        onSignOut: () => {
          onSignOut();
          mutate(null);
        },
        isUserLoading: isLoading,
        user: data as any,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const SignedIn = (props: PropsWithChildren) => {
  const { isUserLoading, user, error } = useContext(AuthContext);

  if (user && !isUserLoading && !error) {
    return <>{props.children}</>;
  }
  return null;
};

export const SignedOut = (props: PropsWithChildren) => {
  const { isUserLoading, error } = useContext(AuthContext);

  if (error && !isUserLoading) {
    return <>{props.children}</>;
  }

  return null;
};
