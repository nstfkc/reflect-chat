"use client";

import { useContext } from "react";
import useSWRMutation from "swr/mutation";
import { AuthContext } from "./Context";
import { Organisation, User } from "db";
import { HttpContext } from "../components/context/HttpContext";
import { useQuery } from "../utils/useQuery";
import { useMutation } from "../utils/useMutation";

export function useSignIn() {
  const { mutate } = useQuery("me");
  return useMutation("signIn", {
    onSuccess: (user) => {
      mutate(user as any);
    },
  });
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
  const { data, isLoading, error } = useQuery("me");
  return {
    user: data,
    isLoading,
    error,
  };
}

export function useSignOut() {
  const { mutate } = useQuery("me");
  return useMutation("signOut", {
    onSuccess: () => {
      mutate(null);
    },
  });
}

export function useOrganisation() {
  const { user, isLoading: userIsLoading } = useUser();
  const { data, isLoading: organisationIdIsLoading } = useQuery(
    "getCurrentOrganisationId"
  );
  let organisation: Organisation | null = null;
  if (data && user) {
    organisation = user.memberships
      .map((m) => {
        return m.organisation;
      })
      .find((org) => {
        if (org.publicId === data.currentOrganisationId) {
          return org;
        }
      });
  }

  return {
    organisation,
    isLoading: userIsLoading || organisationIdIsLoading,
  };
}

export function useSwitchOrganisation() {
  const { mutate } = useQuery("getCurrentOrganisationId");

  return useMutation("setCurrentOrganisationId", {
    onSuccess: ({ currentOrganisationId }) => {
      mutate({ currentOrganisationId });
    },
  });
}
