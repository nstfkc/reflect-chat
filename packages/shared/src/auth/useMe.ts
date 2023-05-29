"use client";

import { Membership, User, UserProfile, Prisma, Organisation } from "db";
import { useContext } from "react";
import useSWR from "swr";
import { HttpContext } from "../components/context/HttpContext";

export interface SignedInUser extends User {
  userProfile: UserProfile;
  memberships: (Membership & { organization: Organisation })[];
}

export function useMe(authURL: string) {
  const { http } = useContext(HttpContext);
  const fetchMe = async (url: string): Promise<SignedInUser> => {
    const { data, res } = await http({ url });
    if (res.ok) {
      return data.data;
    }
    return null;
  };
  return useSWR(`${authURL}/me`, fetchMe);
}
