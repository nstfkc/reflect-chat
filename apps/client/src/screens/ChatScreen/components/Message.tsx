import { Message, Reaction } from "@prisma/client";
import { TbMessage, TbMoodPlus, TbEdit, TbX } from "react-icons/tb";

import * as Popover from "@radix-ui/react-popover";

import {
  PropsWithChildren,
  memo,
  useState,
  useContext,
  createContext,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  MessageWithThread,
  JSONContent,
  ChatMessage,
  TextEditor,
  UserProfilePicture,
  useUser,
  useTheme,
  ChatInstanceContext,
} from "shared";

import EmojiPicker, { Emoji } from "emoji-picker-react";

const MessageEditingContext = createContext({
  isEditActive: false,
  toggleEdit: () => {},
});

function MessageWrapper({
  children,
  message,
  showThreadCount = true,
  onRender,
}: PropsWithChildren<{
  message: MessageWithThread;
  showThreadCount?: boolean;
  onRender: VoidFunction;
}>) {
  const [isEditActive, setIsEditActive] = useState(false);
  const [isEmojiWindowOpen, setIsEmojiWindowOpen] = useState(false);
  const { chat } = useContext(ChatInstanceContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const { user } = useUser();

  return (
    <MessageEditingContext.Provider
      value={{ isEditActive, toggleEdit: () => setIsEditActive((s) => !s) }}
    >
      <Popover.Root
        onOpenChange={(p) => setIsEmojiWindowOpen(p)}
        open={isEmojiWindowOpen}
      >
        <div
          ref={() => onRender()}
          className={"group hover:bg-gray-400/10 rounded-md relative p-1"}
        >
          {children}
          <div className="flex flex-col gap-1">
            {message.reactions?.length > 0 ? (
              <div className="pl-[38px] flex gap-1">
                {Object.entries(
                  message.reactions.reduce((acc, next) => {
                    if (acc[next.unified]) {
                      acc[next.unified] = [...(acc[next.unified] ?? []), next];
                      return acc;
                    }

                    return {
                      ...acc,
                      [next.unified]: [next],
                    };
                  }, {} as Record<string, Reaction[]>)
                ).map(([unified, reactions], index) => {
                  const exist = (reactions as Reaction[]).find(
                    (reaction) => reaction.userId === user?.id
                  );
                  return (
                    <button
                      onClick={() => {
                        if (exist) {
                          chat.deleteReaction(exist);
                        } else {
                          chat.createReaction({
                            messageId: message.id,
                            unified,
                          });
                        }
                      }}
                      key={index}
                      className={[
                        "flex gap-1 items-center bg-black/10 rounded-md py-1 px-2 border-2",
                        exist ? "border-green-600/50" : "border-black/10",
                      ].join(" ")}
                    >
                      <Emoji size={16} unified={unified} />
                      <span className="text-xs font-semibold opacity-75">
                        {(reactions as Reaction[]).length}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : null}
            {message.thread?.length > 0 && showThreadCount ? (
              <div className="pl-[38px]">
                <button
                  onClick={() =>
                    navigate(message.publicId, { state: { message } })
                  }
                  className="font-semibold text-xs flex gap-2 items-center"
                >
                  <div className="flex gap-1 items-center">
                    {Array.from(
                      new Set(message.thread.map((message) => message.senderId))
                    ).map((userId) => (
                      <UserProfilePicture
                        key={userId}
                        userId={userId}
                        showStatusIndicator={false}
                        showUserName={false}
                        size={24}
                      />
                    ))}
                    <span className="text-green-500">
                      {message.thread?.length} replies
                    </span>
                  </div>
                </button>
              </div>
            ) : null}
          </div>
          <div className="absolute opacity-0 group-hover:opacity-100 right-0 top-0 p-1 h-full">
            <div className="flex gap-2">
              {["2764-fe0f", "1f64f", "1f680", "1f600", "1f64c"].map(
                (unified) => (
                  <button
                    key={unified}
                    onClick={() =>
                      chat.createReaction({ messageId: message.id, unified })
                    }
                  >
                    <Emoji unified={unified} size={18} />
                  </button>
                )
              )}
              <Popover.Trigger asChild>
                <button onClick={() => setIsEmojiWindowOpen(true)}>
                  <TbMoodPlus />
                </button>
              </Popover.Trigger>
              {!message.conversationId ? (
                <button
                  onClick={() =>
                    navigate(message.publicId, { state: { message } })
                  }
                >
                  <TbMessage className="stroke-2 text-xl" />
                </button>
              ) : null}
              {message.senderId === user?.id ? (
                <button onClick={() => setIsEditActive((c) => !c)}>
                  {isEditActive ? (
                    <TbX className="stroke-2 text-xl" />
                  ) : (
                    <TbEdit className="stroke-2 text-xl" />
                  )}
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <Popover.Portal>
          <Popover.Content>
            <Popover.Close />
            <div
              className="p-4"
              style={
                {
                  "--emoji-bg": theme.colors.alt2,
                  "--text-color": theme.colors.secondary,
                } as any
              }
            >
              <EmojiPicker
                height={400}
                previewConfig={{ showPreview: false }}
                onEmojiClick={(event) => {
                  chat.createReaction({
                    messageId: message.id,
                    unified: event.unified,
                  });
                }}
              />
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </MessageEditingContext.Provider>
  );
}

const MessageRendererFragmentWrapper = ({ message }: { message: Message }) => {
  const { isEditActive, toggleEdit } = useContext(MessageEditingContext);
  const { chat } = useContext(ChatInstanceContext);
  if (isEditActive) {
    return (
      <div
        className="border-gray-400/30 border-[1px] rounded-lg p-1"
        ref={(el) => {
          el?.scrollIntoView();
        }}
      >
        <TextEditor
          showActions={false}
          initialContent={JSON.parse(message.text)}
          onSubmit={(text) => {
            chat.updateMessage({
              ...message,
              text,
            });
            toggleEdit();
          }}
          onMentionListUpdate={() => {}}
          onUpdate={() => {}}
          placeholder={""}
        />
      </div>
    );
  }
  return <MessageRendererFragment content={JSON.parse(message.text)} />;
};

interface MessageProps {
  messagesOrDate: string | MessageWithThread[];
  parentId?: number;
  showThreadCount?: boolean;
  onMessageRender: (message: Message) => void;
}

export const MessageRender = memo((props: MessageProps) => {
  const { messagesOrDate, showThreadCount, onMessageRender } = props;
  if (typeof messagesOrDate === "string") {
    return (
      <div className="py-8 text-center font-semibold text-sm">
        {messagesOrDate}
      </div>
    );
  }

  function renderMessageWrapper(message: MessageWithThread) {
    const C = (props: PropsWithChildren) => (
      <MessageWrapper
        onRender={() => onMessageRender(message)}
        showThreadCount={showThreadCount}
        message={message}
      >
        {props.children}
      </MessageWrapper>
    );
    return C;
  }
  return (
    <div className="ProseMirror">
      <ChatMessage
        messages={messagesOrDate}
        messageWrapper={renderMessageWrapper}
        fragmentRenderer={(message) => (
          <MessageRendererFragmentWrapper message={message} />
        )}
      />
    </div>
  );
});

MessageRender.displayName = "MessageRender";

export const MessageRendererFragment = ({
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
