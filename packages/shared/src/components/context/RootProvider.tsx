import { PropsWithChildren } from "react";
import { SocketProvider } from "./SocketContext";
import { MessageProvider } from "./MessageContext";
import { UsersProvider } from "./UsersContext";

export const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <SocketProvider>
      <MessageProvider>
        <UsersProvider>{children}</UsersProvider>
      </MessageProvider>
    </SocketProvider>
  );
};
