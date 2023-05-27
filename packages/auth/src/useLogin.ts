"use client";

import { useContext } from "react";
import useSWRMutation from "swr/mutation";
import { AuthContext } from "./Context";
import { User } from "db";
import { useMe, SignedInUser } from "./useMe";

export function useSignIn() {
  const { authURL } = useContext(AuthContext);
  const { mutate } = useMe(authURL);
  const { trigger } = useSWRMutation(
    `${authURL}/sign-in`,
    async (
      url: string,
      { arg }: { arg: { email: string; password: string } }
    ) => {
      return await fetch(url, {
        method: "POST",
        body: JSON.stringify(arg),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }).then((res) => res.json() as unknown as SignedInUser);
    }
  );
  return (...params: Parameters<typeof trigger>) => {
    trigger(...params).then((value) => {
      mutate(value);
    });
  };
}

interface SignUpArgs {
  email: string;
  password: string;
  name: string;
}

export function useSignUp() {
  const { authURL } = useContext(AuthContext);
  return useSWRMutation(
    `${authURL}/sign-up`,
    async (url: string, { arg }: { arg: SignUpArgs }) => {
      return await fetch(url, {
        method: "POST",
        body: JSON.stringify(arg),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }).then((res) => res.json() as unknown as Pick<User, "name" | "email">);
    }
  );
}

export function useUser() {
  const { authURL } = useContext(AuthContext);
  const { data, isLoading, error } = useMe(authURL);
  return {
    user: data,
    isLoading,
    error,
  };
}
