"use client";

import { User } from "db";
import useSWR from "swr";

import { ReactNode, createContext, useCallback } from "react";
import { useSocket } from "../SocketContext/useSocket";

interface UserContextValue {
  user: User;
  allUsers: User[];
  getUserById: (id: string) => User | undefined;
}

export const UserContext = createContext({} as UserContextValue);

const fetchUsers = (): Promise<User[]> =>
  fetch("/_api/users").then((res) => res.json());

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = (props: UserProviderProps) => {
  const { children } = props;
  const {
    data: users = [],
    isLoading,
    mutate,
  } = useSWR("/_api/users", fetchUsers);

  const { user } = useSocket("user-connected", ({ user }) => {
    if (!users.find((u) => u.id === user.id)) {
      mutate([...users, user]);
    }
  });

  const getUserById = useCallback(
    (id: string) => {
      return users.find((user) => user.id === id);
    },
    [users]
  );

  if (isLoading) {
    return null;
  }

  const value: UserContextValue = {
    user,
    allUsers: users,
    getUserById,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
