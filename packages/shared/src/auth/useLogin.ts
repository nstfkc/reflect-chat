"use client";

import { useContext } from "react";
import useSWRMutation from "swr/mutation";
import { AuthContext } from "./Context";
import { User } from "db";
import { useMe, SignedInUser } from "./useMe";
import { HttpContext } from "../components/context/HttpContext";

export function useSignIn() {
  const { http } = useContext(HttpContext);
  const { authURL } = useContext(AuthContext);
  const { mutate } = useMe(authURL);
  return useSWRMutation(
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
      await mutate(data);
      return data as SignedInUser;
    }
  );
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

export function useSignOut() {
  const { http } = useContext(HttpContext);
  const { authURL } = useContext(AuthContext);
  const { mutate } = useMe(authURL);

  return useSWRMutation(`${authURL}/sign-out`, async (url: string) => {
    await http({
      url,
    }).then(() => {
      mutate(null);
    });
  });
}

export function useOrganisation() {}

export function useSwitchOrganisation() {
  const { http } = useContext(HttpContext);
  const { authURL } = useContext(AuthContext);
  const { mutate } = useMe(authURL);

  return useSWRMutation(
    `${authURL}/switch-organisation`,
    async (url: string, { arg }: { arg: { organisationId: string } }) => {
      await http({
        url,
        data: arg,
      }).then(() => {
        mutate(null);
      });
    }
  );
}
