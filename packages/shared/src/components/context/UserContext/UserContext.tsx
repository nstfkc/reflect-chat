import { ReactNode, createContext } from "react";
import { useUser } from "../../../auth";
import { User } from "db";

interface UserContextValue {
  user: User;
}

export const UserContext = createContext({} as UserContextValue);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = (props: UserProviderProps) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};
