"use client";
import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { Feature } from "./Feature";
import { Message, features } from "../mockConversations";

interface MessageProps {
  message: typeof features[number];
  id: number;
  render?: boolean;
}

const MessageRenderer = (props: MessageProps) => {
  const { message, render = true } = props;
  if (!render) {
    return null;
  }
  return (
    <motion.div
      key={props.id}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
    >
      <Message hour={message.hour} user={message.user}>
        {message.message}
      </Message>
    </motion.div>
  );
};

export const RealTimeChat = () => {
  const count = useRef(1);
  const [messages, setMessages] = useState(features.slice(0, count.current));

  useEffect(() => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      count.current++;
      setMessages((messages) => {
        return [
          ...messages,
          ...features.slice(count.current, count.current + 1),
        ];
      });
    }, Math.max(2000, Math.random() * 4000));
  }, [messages]);

  return (
    <Feature
      title="Real-Time Chat"
      description="Communicate with your team and clients in private or public channels in real-time."
    >
      <div className="flex flex-col justify-end h-full gap-4 p-2 select-none">
        {messages.map((message, index) => (
          <MessageRenderer id={index} message={message} key={index} />
        ))}
      </div>
    </Feature>
  );
};
