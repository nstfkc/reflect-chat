import { createId } from "@paralleldrive/cuid2";
import { useNavigate, useParams } from "react-router-dom";
import {
  SocketProvider,
  useLazyQuery,
  useMutation,
  useQuery,
  useSocket,
  useUser,
} from "shared";
import { VisitorSignInForm } from "shared/src/components/forms/VisitorSignInForm";
import { MessageFragment } from "./components/MessageFragment";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";

import { KeyboardEvent, forwardRef, useEffect, useRef, useState } from "react";
import { Message, User } from "../../../../../packages/db/src";

const Scroller = forwardRef(({ style, ...props }, ref) => {
  // an alternative option to assign the ref is
  // <div ref={(r) => ref.current = r}>
  return (
    <div style={{ ...style }} className="no-scrollbar" ref={ref} {...props} />
  );
});

export const MessageList = (props: {
  messages: Message[];
  initialMessage: Message;
}) => {
  const { messages, initialMessage } = props;
  const { user } = useUser();

  const virtuoso = useRef<VirtuosoHandle>(null);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div className="h-full">
      <div
        ref={container}
        className="gap-8 overflow-scroll w-[300px] max-w-full h-full no-scrollbar"
        style={{ height: "100%" }}
      >
        <Virtuoso
          ref={virtuoso}
          data={[initialMessage, ...messages]}
          style={{ height: "100%" }}
          alignToBottom={true}
          followOutput={true}
          components={{
            Scroller: Scroller,
          }}
          itemContent={(_, message) => {
            return (
              <div key={message.publicId} className="py-2">
                <div className={["flex flex-col w-full"].join(" ")}>
                  <div
                    className={
                      message.senderId === user?.id ? "text-left" : "text-right"
                    }
                  >
                    <span className="font-bold">
                      {message.senderId === user?.id
                        ? "You"
                        : message.sender?.userProfile.username}
                    </span>
                  </div>
                  <div
                    className={[
                      message.senderId === user?.id
                        ? "text-left"
                        : "text-right",
                      "rounded-lg p-1",
                    ].join(" ")}
                  >
                    <MessageFragment content={JSON.parse(message.text)} />
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

const MessageInput = (props: {
  onCreate: (m: Message) => void;
  channelId: number;
  conversationId: number;
}) => {
  const { user } = useUser();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { trigger } = useMutation("createMessage");

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const text = inputRef.current?.value;
    if (e.key === "Enter" && !e.shiftKey && text.length > 0) {
      e.preventDefault();
      const message = {
        text: JSON.stringify([
          {
            type: "paragraph",
            content: [{ type: "text", text }],
          },
        ]),
        senderId: user?.id!,
        conversationId: props.conversationId,
        publicId: createId(),
      } as Message;

      props.onCreate(message);

      if (inputRef.current) {
        inputRef.current.value = null;
      }

      trigger(message as any);
    }
  };

  return (
    <div className="">
      <textarea
        className="w-full resize-none bg-black/5 rounded-md p-1 outline-none"
        rows={3}
        placeholder="Type a message..."
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

const Chat = ({ initialMessage }: { initialMessage: Message }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const loadMessages = useLazyQuery("listThreadMessages");

  useEffect(() => {
    loadMessages({
      conversationId: initialMessage.id,
      withUsers: true,
    }).then((res) => {
      setMessages(res);
    });
  }, []);

  useSocket("message:created", (message) => {
    if (message.conversationId === initialMessage.id) {
      setMessages((messages) => {
        if (messages.find((m) => m.publicId === message.publicId)) {
          return messages;
        }
        if (messages.find((m) => m.id === message.id)) {
          return messages;
        }
        return [...messages, message];
      });
    }
  });

  return (
    <div className="p-4 h-[500px] flex flex-col justify-between">
      <div className="h-[426px]">
        <MessageList initialMessage={initialMessage} messages={messages} />
      </div>

      <div className="h-[80px]">
        <MessageInput
          onCreate={(message) => {
            setMessages((messages) => [...messages, message]);
          }}
          channelId={initialMessage.channelId!}
          conversationId={initialMessage.id}
        />
      </div>
    </div>
  );
};

export const EmbededChat = () => {
  const { channelPublicId, messagePublicId } = useParams();
  const navigate = useNavigate();

  const { data: initialMessage, isLoading } = useQuery("getMessage", {
    messagePublicId: messagePublicId as string,
  });

  if (initialMessage) {
    return (
      <SocketProvider>
        <Chat initialMessage={initialMessage} />
      </SocketProvider>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Form />;
};

const Form = () => {
  const { channelPublicId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const localMessagePublicId = localStorage.getItem("messagePublicId");
    if (localMessagePublicId) {
      navigate(`/embeded/${channelPublicId}/${localMessagePublicId}`);
    }
  }, []);

  return (
    <div className="p-4 h-full">
      <VisitorSignInForm
        onSuccess={(messagePublicId) => {
          window.localStorage.setItem("messagePublicId", messagePublicId);
          navigate(`/embeded/${channelPublicId}/${messagePublicId}`);
        }}
        channelId={channelPublicId!}
      />
    </div>
  );
};
