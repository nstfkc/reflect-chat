import { useUser } from "@clerk/clerk-react";
import { User } from "@shared/types/global";

import { ReactNode, createContext } from "react";

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
