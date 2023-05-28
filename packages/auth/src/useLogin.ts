"use client";

import { useContext } from "react";
import useSWRMutation from "swr/mutation";
import { AuthContext } from "./Context";
import { User } from "db";
import { useMe, SignedInUser } from "./useMe";
import { HttpContext } from "shared";

export function useSignIn() {
  const { http } = useContext(HttpContext);
  const { authURL } = useContext(AuthContext);
  const { mutate } = useMe(authURL);
  const { trigger } = useSWRMutation(
    `${authURL}/sign-in`,
    async (
      url: string,
      { arg }: { arg: { email: string; password: string } }
    ) => {
      const { data } = await http({
        url,
        method: "POST",
        data: arg,
      });
      return data as SignedInUser;
    }
  );
  return (...params: Parameters<typeof trigger>) => {
    trigger(...params).then((value) => {
      mutate(value);
    });
  };
}

interface SignUpArgs extends Record<string, string> {
  email: string;
  password: string;
  name: string;
}

export function useSignUp() {
  const { http } = useContext(HttpContext);
  const { authURL } = useContext(AuthContext);
  return useSWRMutation(
    `${authURL}/sign-up`,
    async (url: string, { arg }: { arg: SignUpArgs }) => {
      const { data } = await http({
        url,
        method: "POST",
        data: arg,
      });
      return data as Pick<User, "name" | "email">;
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
