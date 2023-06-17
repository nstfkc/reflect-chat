"use client";

import type { Socket } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

interface MessagesProps {
  messages: Message[];
  channelId: string;
}

type Message = {
  id: string;
  body: string;
};

function useSocket(channelId: string, listener: (...args: any) => void) {
  const [connected, setConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = io();

    socket.emit("joinRoom", channelId);

    socket.on("error", (err) => {
      console.log(err);
    });

    // log socket connection
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);
      setConnected(true);
      (socketRef as any).current = socket;
    });

    socket.on("message", listener);

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  return {
    connected,
    socket: socketRef.current,
  };
}

export const Messages = (props: MessagesProps) => {
  const { channelId } = props;
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<any[]>([]);

  const { socket, connected } = useSocket(props.channelId, (args) => {
    setChat((m) => [...m, args.body]);
  });

  const sendMessage = (e: any) => {
    e.preventDefault();
    socket?.emit("message", { body: message, channelId });
    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen py-16">
      <div className="grow">
        <div>
          {chat.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
      </div>
      <div>
        <textarea
          disabled={!connected}
          value={message}
          className="w-full bg-gray-300 p-4"
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              sendMessage(e);
            }
          }}
        />
      </div>
    </div>
  );
};
