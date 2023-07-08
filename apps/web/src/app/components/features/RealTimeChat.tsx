"use client";
import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

interface Message {
  user: { avatarColor: string };
  contents: Array<{ length: number }>;
}

interface MessageProps {
  message: Message;
  id: number;
  render: boolean;
}

const MessageRenderer = (props: MessageProps) => {
  const { message, render } = props;
  if (!render) {
    return null;
  }
  return (
    <motion.div
      key={props.id}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
    >
      <div className="flex gap-2">
        <div
          className={[
            "w-[32px] h-[32px] rounded-full bg-opacity-30",
            message.user.avatarColor,
          ].join(" ")}
        ></div>
        <div className="flex flex-col gap-1 flex-1">
          {message.contents.map((m, index) => {
            return (
              <div
                key={index}
                style={{ "--w": `${m.length}%` } as any}
                className="bg-gray-600/30 h-[22px] w-[--w] rounded-md"
              ></div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const createMessage = (avatarColors: string[]): Message => {
  const message: Message = {
    user: {
      avatarColor:
        Math.floor(Math.random() * 100) > 50
          ? avatarColors[0]
          : avatarColors[1],
    },
    contents: [],
  };
  for (let i = 0; i < Math.ceil(Math.random() * 2); i++) {
    message.contents.push({
      length: Math.max(30, Math.floor(Math.random() * 50) + 10),
    });
  }
  return message;
};

export const RealTimeChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        createMessage(["bg-red-600", "bg-green-600"]),
        createMessage(["bg-red-600", "bg-green-600"]),
      ]);
    }
    const timer = setTimeout(() => {
      clearTimeout(timer);
      setMessages((messages) => {
        return [...messages, createMessage(["bg-red-600", "bg-green-600"])];
      });
    }, Math.max(2000, Math.random() * 4000));
  }, [messages]);

  return (
    <div>
      <div>
        <h3 className="font-black text-xl tracking-wider">Real-time chat</h3>
        <p>
          You can communicate with your peers and team mates via direct messages
          and public or private channels.
        </p>
        <p>
          <strong>reflect</strong> aims to provide the best user experience to
          make your daily activities as efficient and enjoyable as possible.
        </p>
      </div>

      <div className="h-8"></div>
      <div className="border-2 border-gray-700 p-4 rounded-lg">
        <div className="h-48 max-h-48 overflow-hidden relative">
          <div className="absolute w-full bottom-0">
            {messages.map((message, index) => {
              return (
                <div key={index}>
                  <MessageRenderer
                    render={index > messages.length - 6}
                    id={index}
                    message={message}
                  />
                  <div className="h-3"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-2"></div>
        <div className="bg-white/60 rounded-xl h-16"></div>
      </div>
    </div>
  );
};
