import { PropsWithChildren } from "react";
import { SocketProvider } from "./SocketContext";
import { MessageProvider } from "./MessageContext";
import { UsersProvider } from "./UsersContext";
import { UsersTypingProvider } from "./UsersTypingContext";
import { ThemeProvider } from "./ThemeContext";
import { OrganisationProvider } from "./OrganisationContext/OrganisationContext";
import { ChatProvider } from "./Chat/ChatContext";

export const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <SocketProvider>
      <OrganisationProvider>
        <MessageProvider>
          <UsersProvider>
            <UsersTypingProvider>
              <ChatProvider>
                <ThemeProvider>{children}</ThemeProvider>
              </ChatProvider>
            </UsersTypingProvider>
          </UsersProvider>
        </MessageProvider>
      </OrganisationProvider>
    </SocketProvider>
  );
};
