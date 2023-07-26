import { PropsWithChildren, createContext } from "react";
import { Chat } from "./Chat";

interface ChatInstanceContextValue {
  chat: Chat;
}

export const ChatInstanceContext = createContext(
  {} as ChatInstanceContextValue
);

export const ChatInstanceProvider = (
  props: PropsWithChildren<ChatInstanceContextValue>
) => {
  return (
    <ChatInstanceContext.Provider value={{ chat: props.chat }}>
      {props.children}
    </ChatInstanceContext.Provider>
  );
};
