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
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { Message, User } from "../../../../../packages/db/src";

export const MessageList = (props: { messages: Message[] }) => {
  const { messages } = props;
  const { user } = useUser();
  const users = messages.reduce((acc, message) => {
    if (!message.sender) {
      return acc;
    }
    return {
      ...acc,
      [message.senderId]: message.sender,
    };
  }, {} as Record<number, User>);

  const virtuoso = useRef<VirtuosoHandle>(null);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div className="h-[400px]">
      <div
        ref={container}
        className="gap-8 overflow-scroll w-[300px] max-w-full"
        style={{ height: "100%" }}
      >
        <Virtuoso
          ref={virtuoso}
          data={messages}
          style={{ height: "100%" }}
          alignToBottom={true}
          followOutput={true}
          itemContent={(_, message) => {
            return (
              <div key={message.id} className="py-2">
                <div className={["flex flex-col w-full"].join(" ")}>
                  <div
                    className={
                      message.senderId === user.id ? "text-left" : "text-right"
                    }
                  >
                    <span className="font-bold">
                      {users[message.senderId]?.userProfile.username}
                    </span>
                  </div>
                  <div
                    className={[
                      message.senderId === user?.id
                        ? "text-left"
                        : "text-right",
                      "bg-white/60 rounded-lg p-1",
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
    if (e.key === "Enter" && text.length > 0) {
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
    <div>
      <textarea ref={inputRef} onKeyDown={handleKeyDown} />
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
    setMessages((messages) => {
      if (messages.find((m) => m.publicId === message.publicId)) {
        return messages;
      }
      if (messages.find((m) => m.id === message.id)) {
        return messages;
      }
      return [...messages, message];
    });
  });

  return (
    <div className="p-4">
      <div>
        <div className="flex align-start gap-1">
          <div>Q:</div>
          <MessageFragment content={JSON.parse(initialMessage.text)} />
        </div>
      </div>
      <MessageList messages={messages} />
      <div>
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

  const { data: initialMessage } = useQuery("getMessage", {
    messagePublicId: messagePublicId as string,
  });

  if (initialMessage) {
    return (
      <SocketProvider>
        <Chat initialMessage={initialMessage} />
      </SocketProvider>
    );
  }

  return (
    <div>
      <VisitorSignInForm
        onSuccess={(messagePublicId) =>
          navigate(`/embeded/${channelPublicId}/${messagePublicId}`)
        }
        channelId={channelPublicId!}
      />
    </div>
  );
};
