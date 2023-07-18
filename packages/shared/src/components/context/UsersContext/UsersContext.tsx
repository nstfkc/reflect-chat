"use client";

import { ReactNode, createContext, useState } from "react";
import { User, UserProfile } from "db";
import { useQuery } from "../../../utils/useQuery";
import { useOrganisation } from "../../../auth";
import { useSocket } from "../SocketContext";
import { UserStatus } from "../../../types/global";

interface UsersContextValue {
  users: (User & { userProfile: UserProfile })[];
  getUserById: (
    id: string
  ) => (User & { userProfile: UserProfile } & { status: UserStatus }) | null;
  setUserStatusById: (userId: string, userStatus: UserStatus) => void;
}

export const UsersContext = createContext({ users: [] } as UsersContextValue);

interface UserProviderProps {
  children: ReactNode;
}

export const UsersProvider = (props: UserProviderProps) => {
  const { children } = props;
  const { organisation } = useOrganisation();

  const [userStatuses, setUserStatuses] = useState(
    new Map<string, UserStatus>()
  );

  const { socket } = useSocket(
    "update-user-status",
    ({ userId, userStatus }) => {
      setUserStatuses((currentUserStatuses) => {
        currentUserStatuses.set(userId, userStatus);
        return new Map(currentUserStatuses);
      });
    }
  );

  const { data: users = [] } = useQuery("listUsers", {
    organisationId: organisation.publicId,
  });

  const getUserStatusById = (userId: string) => {
    return userStatuses.get(userId) ?? "offline";
  };

  const setUserStatusById = (userId: string, userStatus: UserStatus) => {
    socket.emit("update-user-status", { userId, userStatus });
    setUserStatuses((currentUserStatuses) => {
      currentUserStatuses.set(userId, userStatus);
      return new Map(currentUserStatuses);
    });
  };

  const getUserById = (userId: string) => {
    const user = users.find((user) => user.publicId === userId);
    return {
      ...user,
      status: getUserStatusById(userId),
    };
  };

  if (!users || users.length === 0) {
    return null;
  }

  return (
    <UsersContext.Provider value={{ users, getUserById, setUserStatusById }}>
      {children}
    </UsersContext.Provider>
  );
};
