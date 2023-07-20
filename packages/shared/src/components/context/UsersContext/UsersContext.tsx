"use client";

import { ReactNode, createContext } from "react";
import { User, UserProfile, UserStatusKind, UserStatus } from "db";
import { useQuery } from "../../../utils/useQuery";
import { useOrganisation } from "../../../auth";
import { useSocket } from "../SocketContext";

interface UsersContextValue {
  users: (User & { userProfile: UserProfile })[];
  getUserByPublicId: (
    id: string
  ) =>
    | (User & { userProfile: UserProfile } & { userStatus: UserStatus })
    | null;
  getUserById: (
    id: number
  ) =>
    | (User & { userProfile: UserProfile } & { userStatus: UserStatus })
    | null;
  setUserStatusById: (userId: number, userStatus: UserStatusKind) => void;
  setUserProfileById: (userId: number, userProfile: UserProfile) => void;
}

export const UsersContext = createContext({ users: [] } as UsersContextValue);

interface UserProviderProps {
  children: ReactNode;
}

export const UsersProvider = (props: UserProviderProps) => {
  const { children } = props;
  const { organisation } = useOrganisation();
  const { data: users = [], mutate } = useQuery("listUsers", {
    organisationId: organisation.publicId,
  });

  const { socket } = useSocket(
    "update-user-status",
    ({ userStatusId, userStatus }) => {
      mutate((users) => {
        return [
          ...users.map((user) => {
            if (user.userStatusId === userStatusId) {
              return {
                ...user,
                userStatus: {
                  ...user.userStatus,
                  status: userStatus,
                },
              };
            }
            return user;
          }),
        ];
      });
    }
  );

  useSocket("update-user-profile", ({ userId, userProfile }) => {
    mutate((users) => {
      return [
        ...users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              userProfile,
            };
          }
          return user;
        }),
      ];
    });
  });

  const initialStatuses = new Map<number, UserStatusKind>();
  users.forEach((user) => {
    initialStatuses.set(user.userStatus.id, user.userStatus.status);
  });

  const setUserStatusById = (
    userStatusId: number,
    userStatus: UserStatusKind
  ) => {
    socket.emit("update-user-status", { userStatusId, userStatus });

    mutate((users) => {
      return [
        ...users.map((user) => {
          if (user.userStatusId === userStatusId) {
            return {
              ...user,
              userStatus: {
                ...user.userStatus,
                status: userStatus,
              },
            };
          }
          return user;
        }),
      ];
    });
  };

  const setUserProfileById = (userId: number, userProfile: UserProfile) => {
    socket.emit("update-user-profile", { userId, userProfile });

    mutate((users) => {
      return [
        ...users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              userProfile,
            };
          }
          return user;
        }),
      ];
    });
  };

  const getUserById = (userId: number) => {
    return users.find((user) => user.id === userId);
  };

  const getUserByPublicId = (userPublicId: string) => {
    return users.find((user) => user.publicId === userPublicId);
  };

  if (!users || users.length === 0) {
    return null;
  }

  return (
    <UsersContext.Provider
      value={{
        users,
        getUserById,
        getUserByPublicId,
        setUserStatusById,
        setUserProfileById,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
