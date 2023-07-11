import { PropsWithChildren } from "react";
import { SocketProvider } from "./SocketContext";
import { MessageProvider } from "./MessageContext";
import { UsersProvider } from "./UsersContext";
import { UsersTypingProvider } from "./UsersTypingContext";
import { ThemeProvider } from "./ThemeContext";

export const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <SocketProvider>
      <MessageProvider>
        <UsersProvider>
          <UsersTypingProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </UsersTypingProvider>
        </UsersProvider>
      </MessageProvider>
    </SocketProvider>
  );
};
