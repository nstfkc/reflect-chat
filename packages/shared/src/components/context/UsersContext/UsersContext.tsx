"use client";

import type { User } from "db";

import { ReactNode, createContext, useCallback } from "react";
import { useSocket } from "../SocketContext/useSocket";
import useSWR from "swr";

interface UsersContextValue {
  allUsers: User[];
  getUserById: (id: string) => User | undefined;
}

export const UsersContext = createContext({} as UsersContextValue);

interface UserProviderProps {
  children: ReactNode;
}

const fetchUsers = (): Promise<User[]> =>
  fetch("/_api/users").then((res) => res.json());

export const UsersProvider = (props: UserProviderProps) => {
  const { children } = props;
  const { data: users = [], mutate } = useSWR("/_api/users", fetchUsers);

  useSocket("user-connected", ({ user }) => {
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

  if (!users) {
    return null;
  }

  const value: UsersContextValue = {
    allUsers: users,
    getUserById,
  };
  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
