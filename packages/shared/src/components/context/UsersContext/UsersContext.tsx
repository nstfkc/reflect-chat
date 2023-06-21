"use client";

import { ReactNode, createContext, useCallback } from "react";
import { useSocket } from "../SocketContext/useSocket";
import { User } from "db";
import { useQuery } from "../../../utils/useQuery";

interface UsersContextValue {}

export const UsersContext = createContext({} as UsersContextValue);

interface UserProviderProps {
  children: ReactNode;
}

export const UsersProvider = (props: UserProviderProps) => {
  const { children } = props;
  return <UsersContext.Provider value={{}}>{children}</UsersContext.Provider>;
};
