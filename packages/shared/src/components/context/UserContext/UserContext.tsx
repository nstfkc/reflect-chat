import { useUser } from "@clerk/clerk-react";

import { ReactNode, createContext } from "react";
import { User } from "../../../types/global";

interface UserContextValue {
  user: User;
}

export const UserContext = createContext({} as UserContextValue);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = (props: UserProviderProps) => {
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <UserContext.Provider value={{ user: user as unknown as User }}>
      {props.children}
    </UserContext.Provider>
  );
};
