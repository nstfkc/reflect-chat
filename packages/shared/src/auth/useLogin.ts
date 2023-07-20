"use client";

import { Organisation } from "db";
import { useQuery } from "../utils/useQuery";
import { useMutation } from "../utils/useMutation";
import { useContext } from "react";
import { AuthContext } from "./Context";
import { useSWRConfig } from "swr";

export function useSignIn() {
  const { onSignIn } = useContext(AuthContext);
  const { mutate } = useQuery("me");
  return useMutation("signIn", {
    onSuccess: (user) => {
      onSignIn(user.token);
      mutate(user as any);
    },
  });
}

export function useSignUp() {
  return useMutation("signUp");
}

export function useUser() {
  const { data, isLoading, error, mutate } = useQuery("me");
  return {
    user: data,
    isLoading,
    error,
    mutate,
  };
}

export function useSignOut() {
  const { onSignOut } = useContext(AuthContext);
  const { mutate } = useQuery("me");
  return useMutation("signOut", {
    onSuccess: () => {
      mutate(null);
      onSignOut();
    },
  });
}

export function useOrganisation() {
  const { user, isLoading: userIsLoading } = useUser();
  const { data, isLoading: organisationIdIsLoading } = useQuery(
    "getCurrentOrganisationId",
    {}
  );

  let organisation: Organisation | null = user.memberships[0]?.organisation;
  if (data?.currentOrganisationId && user) {
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
