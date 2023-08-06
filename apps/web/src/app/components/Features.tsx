"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { features, Message } from "./mockConversations";
import { UserAvatar } from "./UserAvatar";

interface FeatureProps {
  title: string;
  description: string;
  children: ReactNode;
  imageUrl?: string;
  reversed?: boolean;
}

const Feature = (props: FeatureProps) => {
  const { children, title, description, imageUrl, reversed = false } = props;

  return (
    <div>
      <div
        className={[
          "flex flex-col md:flex-row gap-8",
          reversed ? "md:flex-row-reverse" : "",
        ].join(" ")}
      >
        <div className="w-full md:w-1/2">
          <h4 className="text-lg font-bold">{title}</h4>
          <p>{description}</p>
        </div>
        <div className="w-full md:w-1/2 bg-alt2 rounded-lg aspect-[5/3] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

interface Message {
  user: { avatarColor: string };
  contents: Array<{ length: number }>;
}

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

const RealTimeChat = () => {
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
      <div className="flex flex-col justify-end h-full gap-4 p-2">
        {messages.map((message, index) => (
          <MessageRenderer id={index} message={message} key={index} />
        ))}
      </div>
    </Feature>
  );
};

const PeerToPeer = () => {
  return (
    <Feature
      reversed
      title="High-Quality Peer-to-Peer Audio and Video Calls"
      description="Bridge geographical gaps with crystal-clear audio and video calls that
          bring you closer to your colleagues. Whether it's a quick
          check-in or a detailed discussion, our high-quality calls ensure that
          every interaction is meaningful and productive."
    >
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="w-[64px] rounded-md aspect-[4/3] border-2 border-secondary">
            <div className="w-[8px] mx-auto rounded-sm mt-[-3px] border-[2px] border-secondary"></div>
            <div className="flex h-full justify-center p-1">
              <div className="border-2 border-alt1 rounded-full w-[28px] h-[28px] animate-pulse">
                <div className="rounded-full w-[24px] h-[24px] overflow-hidden">
                  <UserAvatar size={24} user="Michael Selkis" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[80px] border-[1.5px] mt-[-1px] rounded-[2px] border-secondary"></div>
        </div>
        <div className="flex flex-col flex-1 max-w-[128px] mx-[-8px] gap-2">
          <div className="h-1 bg-gray-700/60 relative overflow-hidden">
            <motion.div
              animate={{ left: "110%" }}
              initial={{ left: "-10%" }}
              transition={{
                duration: 0.85,
                repeatType: "loop",
                repeat: Infinity,
                repeatDelay: 0.2,
              }}
              className="absolute w-2 h-2 top-[-2px] rounded-full bg-gray-700"
            ></motion.div>
          </div>

          <div className="h-1 bg-gray-700/60 relative overflow-hidden">
            <motion.div
              animate={{ left: "-10%" }}
              initial={{ left: "110%" }}
              transition={{
                duration: 0.8,
                repeatType: "loop",
                repeat: Infinity,
                repeatDelay: 0.2,
              }}
              className="absolute w-2 h-2 top-[-2px] rounded-full bg-gray-700"
            ></motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="w-[64px] rounded-md aspect-[4/3] border-2 border-secondary">
            <div className="w-[8px] mx-auto rounded-sm mt-[-3px] border-[2px] border-secondary"></div>
            <div className="flex h-full justify-center p-1">
              <div className="border-2 border-alt1 rounded-full w-[28px] h-[28px] animate-pulse">
                <div className="rounded-full w-[24px] h-[24px] overflow-hidden">
                  <UserAvatar size={24} user="Alina Lambert" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[80px] border-[1.5px] mt-[-1px] rounded-[2px] border-secondary"></div>
        </div>
      </div>
    </Feature>
  );
};

export const Features = () => {
  return (
    <section id="features" className="px-4">
      <div className="">
        <h3 className="text-2xl font-bold">Features</h3>
      </div>
      <div className="h-4"></div>
      <div className="flex flex-col gap-8">
        <RealTimeChat />
        <PeerToPeer />
        <Feature
          title=" Integrated Knowledge Base"
          description="Harness the collective wisdom of your team with Reflect's
          integrated knowledge base. It's a central hub where crucial
          information resides, facilitating swift access and informed
          decision-making. Say goodbye to digging through emails or lost
          documents."
        ></Feature>
        <Feature
          reversed
          title="AI-Powered Personal Assistant"
          description="Meet your virtual productivity partner. Our AI assistant seamlessly
          integrates into your workflow, handling routine tasks, and even
          offering smart suggestions based on your preferences and work
          patterns. It's like having a reliable co-pilot for your daily
          activities."
        ></Feature>
        <Feature
          title="Streamlined Automations"
          description="Efficiency takes center stage with Reflect's automations.
          Repetitive tasks that used to eat up your time can now be automated,
          allowing you to streamline processes and maintain consistent workflows
          effortlessly."
        ></Feature>
        <Feature
          reversed
          title="Effortless 3rd Party Integrations"
          description="Reflect plays well with others. We've designed our platform to
          seamlessly integrate with your favorite third-party applications,
          ensuring that your tools work harmoniously to enhance your
          communication experience."
        ></Feature>
      </div>
      <div className="h-8"></div>
      <div>
        <p>
          And much more to explore and leverage as you elevate your team&apos;s
          communication capabilities.
        </p>
      </div>
    </section>
  );
};
