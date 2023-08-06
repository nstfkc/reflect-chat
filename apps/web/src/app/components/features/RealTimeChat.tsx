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
      title="Real-Time Chat with User-Centric Approach"
      description="Experience the power of real-time messaging that's rooted in a
      user-centric philosophy. Our chat feature is not just about exchanging
      messages – it's about maintaining fluid conversations that
      effortlessly adapt to your communication style."
    >
      <div className="flex flex-col justify-end h-full gap-4 p-2 select-none">
        {messages.map((message, index) => (
          <MessageRenderer id={index} message={message} key={index} />
        ))}
      </div>
    </Feature>
  );
};
