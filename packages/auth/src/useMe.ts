"use client";

import { Membership, User, UserProfile } from "db";
import useSWR from "swr";

export interface SignedInUser extends User {
  userProfile: UserProfile;
  memberships: Membership[];
}

export function useMe(authURL: string) {
  const fetchMe = async (url: string): Promise<SignedInUser> => {
    const { data } = await fetch(url, { credentials: "include" }).then((res) =>
      res.json()
    );
    return data;
  };
  return useSWR(`${authURL}/me`, fetchMe);
}