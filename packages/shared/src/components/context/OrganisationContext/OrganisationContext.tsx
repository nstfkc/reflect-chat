import { Channel, Organisation, User, UserProfile, UserStatus } from "db";
import { PropsWithChildren, createContext } from "react";
import { useQuery } from "../../../utils/useQuery";
import { useOrganisation } from "../../../auth";

interface OrganisationContextValue {
  organisation: Organisation;
  channels: Channel[];
  users: (User & { userProfile: UserProfile } & { userStatus: UserStatus })[];
}

export const OrganisationContext = createContext(
  {} as OrganisationContextValue
);

export const OrganisationProvider = (props: PropsWithChildren) => {
  const { organisation } = useOrganisation();
  const { data: users, isLoading: usersLoading } = useQuery("listUsers", {
    organisationId: organisation.publicId,
  });
  const { data: channels, isLoading: channelsLoading } = useQuery(
    "listChannels",
    {
      organisationId: organisation.id,
    }
  );

  if (usersLoading || channelsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <OrganisationContext.Provider value={{ organisation, users, channels }}>
      {props.children}
    </OrganisationContext.Provider>
  );
};
