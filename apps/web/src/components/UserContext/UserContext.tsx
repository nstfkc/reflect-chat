"use client";

import { User } from "db";

import { ReactNode, createContext, useCallback, useState } from "react";
import { useSocket } from "../SocketContext/useSocket";

interface UserContextValue {
  user: User;
  allUsers: User[];
  getUserById: (id: string) => User | undefined;
}

export const UserContext = createContext({} as UserContextValue);

interface UserProviderProps {
  user: User;
  users: User[];
  children: ReactNode;
}

export const UserProvider = (props: UserProviderProps) => {
  const { user, children } = props;
  const [users, setUsers] = useState(props.users);

  const getUserById = useCallback(
    (id: string) => {
      return users.find((user) => user.id === id);
    },
    [users]
  );

  useSocket("user-connected", ({ user }) => {
    setUsers((users) => {
      if (!users.find((u) => u.id === user.id)) {
        return [...users, user];
      }
      return users;
    });
  });

  const value: UserContextValue = {
    user,
    allUsers: users,
    getUserById,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
