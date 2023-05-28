"use client";

import { ReactNode, createContext, useCallback } from "react";
import { useSocket } from "../SocketContext/useSocket";
import { User } from "../../../types/global";

interface UsersContextValue {
  allUsers: User[];
  getUserById: (id: string) => User | undefined;
}

export const UsersContext = createContext({} as UsersContextValue);

interface UserProviderProps {
  children: ReactNode;
}

export const UsersProvider = (props: UserProviderProps) => {
  const { children } = props;
  const { data: users = [], mutate } = useQuery("/users");

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
