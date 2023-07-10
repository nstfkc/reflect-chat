import { PropsWithChildren } from "react";
import { SocketProvider } from "./SocketContext";
import { MessageProvider } from "./MessageContext";
import { UsersProvider } from "./UsersContext";
import { UsersTypingProvider } from "./UsersTypingContext";

export const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <SocketProvider>
      <MessageProvider>
        <UsersProvider>
          <UsersTypingProvider>{children}</UsersTypingProvider>
        </UsersProvider>
      </MessageProvider>
    </SocketProvider>
  );
};
