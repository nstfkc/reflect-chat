"use client";

import { ReactNode, createContext, useCallback, useMemo } from "react";
import { useSocket } from "../SocketContext/useSocket";
import { User, UserProfile } from "db";
import { useQuery } from "../../../utils/useQuery";
import { useOrganisation } from "../../../auth";

interface UsersContextValue {
  users: (User & { userProfile: UserProfile })[];
  getUserById: (id: string) => (User & { userProfile: UserProfile }) | null;
}

export const UsersContext = createContext({ users: [] } as UsersContextValue);

interface UserProviderProps {
  children: ReactNode;
}

export const UsersProvider = (props: UserProviderProps) => {
  const { children } = props;
  const { organisation } = useOrganisation();
  const { data: users = [] } = useQuery("listUsers", {
    organisationId: organisation.publicId,
  });

  const getUserById = (userId: string) => {
    return users.find((user) => user.publicId === userId);
  };

  return (
    <UsersContext.Provider value={{ users, getUserById }}>
      {children}
    </UsersContext.Provider>
  );
};
