import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { Sidebar } from "./components/Sidebar";
import { SocketProvider } from "@/components/SocketContext/SocketContext";
import { UserProvider } from "@/components/UserContext/UserContext";
import { MessageProvider } from "@/components/MessageContext/MessageContext";
import { SWRProvider } from "../../components/SWRProvider";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRProvider>
      <SocketProvider>
        <UserProvider>
          <MessageProvider>
            <div className="flex h-full">
              <div className="w-[320px] h-full">
                <Sidebar />
              </div>
              <div className="grow h-screen">{children}</div>
            </div>
          </MessageProvider>
        </UserProvider>
      </SocketProvider>
    </SWRProvider>
  );
};

export default Layout;
