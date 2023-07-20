import { Channel, User, Message } from "@prisma/client";
import { TbBulb } from "react-icons/tb";

import {
  useContext,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  PropsWithChildren,
  memo,
} from "react";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import {
  TextEditor,
  FileUploaderProvider,
  MessageContext,
  useUser,
  JSONContent,
  ChatMessage,
  useChannelChatHistory,
  useDMChatHistory,
  TypingUsersList,
  useSocket,
  useTheme,
  UserProfilePicture,
  UsersContext,
  useQuery,
} from "shared";

function MessageWrapper({ children }: PropsWithChildren<{ message: Message }>) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className={"group hover:bg-gray-400/10 rounded-md relative p-1"}
    >
      {children}
      <div className="absolute opacity-0 group-hover:opacity-100 right-0 top-0 p-1 h-full">
        <button>
          <TbBulb className="text-yellow-600 stroke-2 text-xl" />
        </button>
      </div>
    </div>
  );
}

function renderMessageWrapper(message: Message) {
  const C = (props: PropsWithChildren) => (
    <MessageWrapper message={message}>{props.children}</MessageWrapper>
  );
  return C;
}

interface MessageProps {
  messagesOrDate: string | Message[];
  parentId: number;
  markMentionsAsRead: (id: number) => (id: number) => void;
  markMessageAsRead: (id: number) => (id: number) => void;
}

const MessageRender = memo((props: MessageProps) => {
  const { markMentionsAsRead, markMessageAsRead, messagesOrDate, parentId } =
    props;
  if (typeof messagesOrDate === "string") {
    return (
      <div className="py-8 text-center font-semibold text-sm">
        {messagesOrDate}
      </div>
    );
  }

  return (
    <div className="ProseMirror">
      <ChatMessage
        onRender={(messageId) => {
          markMentionsAsRead(parentId)(messageId);
          markMessageAsRead(parentId)(messageId);
        }}
        messages={messagesOrDate}
        messageWrapper={renderMessageWrapper}
        fragmentRenderer={(message) => (
          <MessageRendererFragment
            content={JSON.parse(message.text)}
          ></MessageRendererFragment>
        )}
      />
    </div>
  );
});

MessageRender.displayName = "MessageRender";

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
              <p key={index}>
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

const DMChatHistory = (props: { receiver: User }) => {
  const messages = useDMChatHistory({
    receiverId: props.receiver.id,
  });

  return <MessageList parentId={props.receiver.id} messages={messages} />;
};

const ChannelChatHistory = (props: { channel: Channel }) => {
  const messages = useChannelChatHistory({
    channelId: props.channel.id,
  });

  return <MessageList parentId={props.channel.id!} messages={messages} />;
};

interface MessageListProps {
  parentId: number;
  messages: (string | Message[])[];
}

const MessageList = memo((props: MessageListProps) => {
  const { messages, parentId } = props;
  const { markMentionsAsRead, markMessageAsRead } = useContext(MessageContext);
  const initialRender = useRef(false);

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
    if (!initialRender.current) {
      initialRender.current = true;
      virtuoso?.current?.scrollToIndex({
        index: messages.length - 1,
        align: "end",
        behavior: "auto",
      });
    }
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
        data={messages}
        style={{ height: "100%" }}
        alignToBottom={true}
        followOutput={true}
        itemContent={(index, messagesOrDate) => {
          return (
            <MessageRender
              key={index}
              parentId={parentId}
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

MessageList.displayName = "MessageList";

const DMChat = () => {
  const { receiverPublicId } = useParams();
  const { getUserByPublicId } = useContext(UsersContext);
  const receiver = getUserByPublicId(receiverPublicId ?? "");
  const { sendMessage, canSendMessage } = useContext(MessageContext);
  const { user } = useUser();
  const theme = useTheme();
  const { socket } = useSocket();

  const Editor = useMemo(
    () =>
      getEditor({
        kind: "user",
        user: receiver!,
        onUpdate: () => {
          socket?.emit("user-typing", {
            channelOrUserId: receiver?.id!,
            userId: user?.id!,
          });
        },
        sendMessage: (message) =>
          sendMessage(
            {
              text: message,
              receiverId: receiver!.id,
              senderId: user?.id!,
            },
            []
          ),
      }),
    [socket, receiver, sendMessage, user]
  );

  if (!receiver) {
    return null;
  }

  return (
    <FileUploaderProvider pathPrefix={receiver?.publicId}>
      <div className="h-full flex flex-col justify-between">
        <div
          className="px-4 py-2 font-bold"
          style={{ backgroundColor: theme.colors.alt1 }}
        >
          <UserProfilePicture
            size={24}
            textStyle={{ fontWeight: "bold" }}
            statusIndicatorBorderColor={theme.colors.alt1}
            userId={receiver.id}
          />
        </div>
        <div className="relative h-full">
          <DMChatHistory receiver={receiver} />
        </div>
        <div className="p-2">
          <div className="px-6">
            <TypingUsersList channelOrUserId={user?.id!} />
          </div>
          <div className="w-full rounded-xl bg-white/40">
            <div>{canSendMessage ? "" : "Cant send message"}</div>
            {Editor ? <Editor /> : null}
          </div>
        </div>
      </div>
    </FileUploaderProvider>
  );
};

const ChannelChat = () => {
  const { channelPublicId } = useParams();
  const { sendMessage, canSendMessage } = useContext(MessageContext);
  const { user } = useUser();
  const theme = useTheme();
  const { socket } = useSocket();
  const { data = [] } = useQuery("listChannels", { organisationId: "1" });

  // TODO: fix type
  const channel = (data as any)!.find(
    (channel: any) => channel.publicId === channelPublicId
  );

  const onUpdate = useCallback(() => {
    socket?.emit("user-typing", {
      channelOrUserId: channel?.id,
      userId: user?.id!,
    });
  }, [socket, user?.id, channel?.id]);

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
                  channelId: channel?.id,
                  senderId: user?.id!,
                },
                []
              ),
          })
        : () => <></>,
    [onUpdate, channel, sendMessage, user]
  );

  if (!channel) {
    return null;
  }

  return (
    <FileUploaderProvider pathPrefix={channel?.publicId}>
      <div className="h-full flex flex-col justify-between">
        <div
          className="px-4 py-2 font-bold"
          style={{ backgroundColor: theme.colors.alt1 }}
        >
          <div>{`# ${channel.name}`}</div>
        </div>
        <div className="relative h-full">
          <ChannelChatHistory channel={channel} />
        </div>
        <div className="p-2">
          <div className="px-6">
            <TypingUsersList channelOrUserId={channel.id} />
          </div>
          <div className="w-full rounded-xl bg-white/40">
            <div>{canSendMessage ? "" : "Cant send message"}</div>
            {Editor ? <Editor /> : null}
          </div>
        </div>
      </div>
    </FileUploaderProvider>
  );
};

export const ThreadScreen = () => {
  return <div>Threads</div>;
};

interface ChatScreenProps {
  kind: "channel" | "dm";
}

export const ChatScreen = (props: ChatScreenProps) => {
  return (
    <div className="flex h-full">
      <div className="flex-1">
        {props.kind === "channel" ? <ChannelChat /> : null}
        {props.kind === "dm" ? <DMChat /> : null}
      </div>
      <div className="max-w-sm">
        <Outlet />
      </div>
    </div>
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
  const editors = new Map<number, () => JSX.Element>();
  if (props.kind === "channel") {
    if (!editors.has(props.channel.id)) {
      editors.set(props.channel.id, () => (
        <TextEditor
          onUpdate={props.onUpdate}
          onSubmit={(message) => {
            props.sendMessage(message);
          }}
          placeholder={`Message #${props.channel.name}`}
        />
      ));
    }
    return editors.get(props.channel.id);
  }

  if (props.kind === "user") {
    if (!editors.has(props.user.id)) {
      editors.set(props.user.id, () => (
        <TextEditor
          onUpdate={props.onUpdate}
          onSubmit={(message) => {
            props.sendMessage(message);
          }}
          placeholder={`Message ${(props.user as any).userProfile.username}`}
        />
      ));
    }
    return editors.get(props.user.id);
  }
}
