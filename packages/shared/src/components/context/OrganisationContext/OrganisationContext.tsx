import { Channel, Organisation, User, UserProfile, UserStatus } from "db";
import { PropsWithChildren, createContext, useCallback, useState } from "react";
import { useQuery } from "../../../utils/useQuery";
import { useOrganisation, useUser } from "../../../auth";
import { useSocket } from "../SocketContext";

export type UserWithProfileAndStatus = User & { userProfile: UserProfile } & {
  userStatus: UserStatus;
};

interface OrganisationContextValue {
  organisation: Organisation;
  channels: Channel[];
  directMessageUserIds: number[];
  users: UserWithProfileAndStatus[];
  getUserById: (id: number) => UserWithProfileAndStatus;
}

export const OrganisationContext = createContext(
  {} as OrganisationContextValue
);

export const OrganisationProvider = (props: PropsWithChildren) => {
  const { organisation } = useOrganisation();
  const { user } = useUser();
  const {
    data: users,
    isLoading: usersLoading,
    mutate,
  } = useQuery("listUsers", {
    organisationId: organisation?.publicId,
  });

  const [newUsers, setNewUsers] = useState([]);

  const { data: channels, isLoading: channelsLoading } = useQuery(
    "listChannels",
    {
      organisationId: organisation?.id,
    }
  );

  useSocket("user:created", (user) => {
    setNewUsers((users) => [...users, user]);
  });

  const { data: directMessages = [], isLoading: isLoadingDirectMessages } =
    useQuery("listDirectMessages");

  if (usersLoading || channelsLoading || isLoadingDirectMessages) {
    return <div>Loading organisation...</div>;
  }

  const directMessageUserIds = Array.from(
    new Set(
      directMessages
        .map((message) => [message.senderId, message.receiverId])
        .flat()
        .filter((id) => id !== user.id)
    )
  );

  const getUserById = (userId: number): UserWithProfileAndStatus => {
    return [...users, ...newUsers].find((user) => user.id === userId);
  };

  return (
    <OrganisationContext.Provider
      value={{
        organisation,
        users,
        channels,
        directMessageUserIds,
        getUserById,
      }}
    >
      {props.children}
    </OrganisationContext.Provider>
  );
};
