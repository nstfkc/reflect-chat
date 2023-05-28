"use client";

import { Membership, User, UserProfile } from "db";
import { useContext } from "react";
import { HttpContext } from "shared";
import useSWR from "swr";

export interface SignedInUser extends User {
  userProfile: UserProfile;
  memberships: Membership[];
}

export function useMe(authURL: string) {
  const { fetch } = useContext(HttpContext);
  const fetchMe = async (url: string): Promise<SignedInUser> => {
    const { data } = await fetch(url, { credentials: "include" }).then((res) =>
      res.json()
    );
    return data;
  };
  return useSWR(`${authURL}/me`, fetchMe);
}
