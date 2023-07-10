import { Channel, User, Message } from "@prisma/client";
import { TbBulb } from "react-icons/tb";

import {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  PropsWithChildren,
  memo,
} from "react";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import { useLocation } from "react-router-dom";
import {
  TextEditor,
  FileUploaderProvider,
  MessageContext,
  useUser,
  JSONContent,
  ChatMessage,
  useChatHistory,
  UsersContext,
  UsersTypingContext,
  TypingUsersList,
} from "shared";

function MessageWrapper({ children }: PropsWithChildren<{ message: Message }>) {
  return (
    <div className={"group hover:bg-gray-400/10 rounded-md relative p-1"}>
      {children}
      <div className="absolute opacity-0 group-hover:opacity-100 right-0 top-0 p-1 h-full">
        <button>
          <TbBulb className="text-yellow-600 stroke-2 text-xl" />
        </button>
      </div>
    </div>
  );
}

interface MessageProps {
  messagesOrDate: string | Message[];
  channelOrUserId: string;
  markMentionsAsRead: (id: string) => (id: string) => void;
  markMessageAsRead: (id: string) => (id: string) => void;
}

const MessageRender = memo((props: MessageProps) => {
  const {
    markMentionsAsRead,
    markMessageAsRead,
    messagesOrDate,
    channelOrUserId,
  } = props;
  if (typeof messagesOrDate === "string") {
    return (
      <div className="py-8 text-center font-semibold text-sm">
        {messagesOrDate}
      </div>
    );
  }
  return (
    <div className="ProseMirror px-1">
      <ChatMessage
        onRender={(messageId) => {
          markMentionsAsRead(channelOrUserId)(messageId);
          markMessageAsRead(channelOrUserId)(messageId);
        }}
        messages={messagesOrDate}
        messageWrapper={(message) =>
          ({ children }) =>
            <MessageWrapper message={message}>{children}</MessageWrapper>}
        fragmentRenderer={(message) => (
          <MessageRendererFragment
            content={JSON.parse(message.text)}
          ></MessageRendererFragment>
        )}
      />
    </div>
  );
});

const MessageRendererFragment = ({
  content,
}: {
  content: JSONContent["content"];
}) => {
  if (!content) {
    return null;
  }

  return (
    <>
      {content.map((c, index) => {
        switch (c.type) {
          case "paragraph":
            return (
              <p key={index} className="opacity-[70%]">
                <MessageRendererFragment key={index} content={c.content} />
              </p>
            );
          case "text":
            return (
              <span
                key={index}
                className={`${c.marks
                  ?.map((mark) =>
                    mark.type === "bold"
                      ? "font-bold"
                      : mark.type === "italic"
                      ? "italic"
                      : mark.type === "strike"
                      ? "line-through"
                      : ""
                  )
                  .join(" ")}`}
              >
                {c.text}
              </span>
            );
          case "bulletList":
            return (
              <ul key={index}>
                <MessageRendererFragment key={index} content={c.content} />
              </ul>
            );
          case "listItem":
            return (
              <li key={index}>
                <MessageRendererFragment key={index} content={c.content} />
              </li>
            );
          case "mention":
            return (
              <span
                key={index}
                className="mention w-fit"
                data-publicid={c?.attrs?.id}
              >
                @{c?.attrs?.label}
              </span>
            );
          default:
            return <pre key={index}>{JSON.stringify(c)}</pre>;
        }
      })}
    </>
  );
};

const ChatHistory = memo(() => {
  console.log("render");
  const { markMentionsAsRead, markMessageAsRead } = useContext(MessageContext);
  const { state } = useLocation();

  const { channel, user: receiver } = state;

  const channelOrUserId = channel ? channel.id : receiver.publicId;

  const chatHistory = useChatHistory({
    channelId: channel?.id,
    receiverId: receiver?.publicId,
  });

  const virtuoso = useRef<VirtuosoHandle>(null);
  const container = useRef<HTMLDivElement>(null);

  const resizeObserver = useMemo(
    () =>
      new ResizeObserver(() => {
        virtuoso?.current?.scrollTo({ top: 99999 });
      }),
    []
  );

  useLayoutEffect(() => {
    virtuoso?.current?.scrollToIndex({
      index: chatHistory.length - 1,
      align: "end",
      behavior: "auto",
    });
  });

  useEffect(() => {
    resizeObserver.observe(container?.current!);
  }, [resizeObserver]);

  return (
    <div
      ref={container}
      className="gap-8 overflow-scroll"
      style={{ height: "100%" }}
    >
      <Virtuoso
        ref={virtuoso}
        data={chatHistory}
        style={{ height: "100%" }}
        alignToBottom={true}
        followOutput={true}
        itemContent={(index, messagesOrDate) => {
          return (
            <MessageRender
              key={index}
              channelOrUserId={channelOrUserId}
              markMentionsAsRead={markMentionsAsRead}
              markMessageAsRead={markMessageAsRead}
              messagesOrDate={messagesOrDate}
            />
          );
        }}
      />
    </div>
  );
});

ChatHistory.displayName = "ChatHistory";

export const ChatScreen = () => {
  const { setUserTyping } = useContext(UsersTypingContext);

  const { sendMessage, canSendMessage } = useContext(MessageContext);
  const { state } = useLocation();
  const { user } = useUser();

  const { channel, user: receiver } = state;

  const channelOrUserId = channel ? channel.id : receiver.publicId;

  const onUpdate = () => {
    if (channel) {
      setUserTyping({
        channelOrUserId,
        userId: user?.publicId!,
      });
    } else {
      setUserTyping({
        channelOrUserId: user?.publicId!,
        userId: user?.publicId!,
      });
    }
  };

  const Editor = useMemo(
    () =>
      channel
        ? getEditor({
            kind: "channel",
            channel,
            onUpdate,
            sendMessage: (message) =>
              sendMessage(
                {
                  text: message,
                  channelId: channel.id,
                  senderId: user?.publicId,
                },
                []
              ),
          })
        : user
        ? getEditor({
            kind: "user",
            user: receiver,
            onUpdate,
            sendMessage: (message) =>
              sendMessage(
                {
                  text: message,
                  receiverId: receiver.publicId,
                  senderId: user?.publicId,
                },
                []
              ),
          })
        : () => <></>,
    []
  );

  return (
    <FileUploaderProvider pathPrefix={channel?.id ?? receiver?.publicId}>
      <div className="h-full flex flex-col justify-between">
        <div className="relative h-full">
          <ChatHistory />
        </div>

        <div className="px-4">
          <div className="w-full rounded-xl bg-white/60">
            <div>{canSendMessage ? "" : "Cant send message"}</div>
            {Editor ? <Editor /> : null}
          </div>
        </div>
        <div className="px-6">
          <TypingUsersList channelOrUserId={channelOrUserId} />
        </div>
      </div>
    </FileUploaderProvider>
  );
};

type GetEditorProps =
  | {
      kind: "channel";
      channel: Channel;
      onUpdate: VoidFunction;
      sendMessage: (message: string) => void;
    }
  | {
      kind: "user";
      user: User;
      onUpdate: VoidFunction;
      sendMessage: (message: string) => void;
    };

function getEditor(props: GetEditorProps) {
  const editors = new Map<string, () => JSX.Element>();
  if (props.kind === "channel") {
    if (!editors.has(props.channel.id)) {
      editors.set(props.channel.id, () => (
        <TextEditor
          onUpdate={props.onUpdate}
          onSubmit={(message) => {
            console.log({ message });
            props.sendMessage(message);
          }}
          placeholder={`Message #${props.channel.name}`}
        />
      ));
    }
    return editors.get(props.channel.id);
  }
  if (props.kind === "user") {
    if (!editors.has(props.user.publicId)) {
      editors.set(props.user.publicId, () => (
        <TextEditor
          onUpdate={props.onUpdate}
          onSubmit={(message) => {
            console.log({ message });
            props.sendMessage(message);
          }}
          placeholder={`Message ${props.user.name}`}
        />
      ));
    }
    return editors.get(props.user.publicId);
  }
}
