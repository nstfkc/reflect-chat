"use client";
import { ReactNode } from "react";
import { User, UserAvatar } from "./UserAvatar";
import { Emoji, EmojiStyle } from "emoji-picker-react";
interface MessageProps {
  user: User;
  hour: string;
  children: ReactNode;
}

const Message = (props: MessageProps) => {
  return (
    <div className="flex gap-2 px-2 text-xs">
      <div>
        <UserAvatar size={24} user={props.user} />
      </div>
      <div>
        <div>
          <span className="font-bold">{props.user}</span>{" "}
          <span className="opacity-75 text-[10px]">{props.hour}</span>
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

const Mention = (props: { user: User | "channel" }) => {
  return (
    <span className="bg-black/10 rounded-md px-1 py-[1px] font-semibold opacity-[0.8] leading-0">
      @{props.user}
    </span>
  );
};

export const general: Array<{
  user: User;
  message: JSX.Element;
  hour: string;
}> = [
  {
    user: "Enes Tufekci",
    hour: "10:54 am",
    message: (
      <div>
        Hey <Mention user="channel" />, I see some problems with the logs, can
        we have a look together?
      </div>
    ),
  },
  {
    user: "Dave Schneider",
    hour: "10:55 am",
    message: <p>Hey, sure give me 10 mins.</p>,
  },
];

export const GeneralChat = () => {
  return (
    <>
      {general.map((message) => {
        return (
          <Message key={message.hour} user={message.user} hour={message.hour}>
            {message.message}
          </Message>
        );
      })}
    </>
  );
};
