import { Message } from "@prisma/client";
import { TbMessage, TbEdit, TbX } from "react-icons/tb";

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
  MessageContext,
  UserProfilePicture,
} from "shared";

const MessageEditingContext = createContext({ isEditActive: false });

function MessageWrapper({
  children,
  message,
}: PropsWithChildren<{ message: MessageWithThread }>) {
  const [isEditActive, setIsEditActive] = useState(false);
  const navigate = useNavigate();
  return (
    <MessageEditingContext.Provider value={{ isEditActive }}>
      <div className={"group hover:bg-gray-400/10 rounded-md relative p-1"}>
        {children}
        {message.thread?.length > 0 ? (
          <div className="pl-[38px]">
            <button
              onClick={() => navigate(message.publicId, { state: { message } })}
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
        <div className="absolute opacity-0 group-hover:opacity-100 right-0 top-0 p-1 h-full">
          <div className="flex gap-2">
            <button
              onClick={() => navigate(message.publicId, { state: { message } })}
            >
              <TbMessage className="stroke-2 text-xl" />
            </button>
            <button onClick={() => setIsEditActive((c) => !c)}>
              {isEditActive ? (
                <TbX className="stroke-2 text-xl" />
              ) : (
                <TbEdit className="stroke-2 text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>
    </MessageEditingContext.Provider>
  );
}

const MessageRendererFragmentWrapper = ({ message }: { message: Message }) => {
  const { isEditActive } = useContext(MessageEditingContext);
  const { updateMessage } = useContext(MessageContext);

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
            updateMessage(
              {
                ...message,
                text,
              },
              []
            );
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
}

export const MessageRender = memo((props: MessageProps) => {
  const { messagesOrDate } = props;
  if (typeof messagesOrDate === "string") {
    return (
      <div className="py-8 text-center font-semibold text-sm">
        {messagesOrDate}
      </div>
    );
  }

  function renderMessageWrapper(message: MessageWithThread) {
    const C = (props: PropsWithChildren) => (
      <MessageWrapper message={message}>{props.children}</MessageWrapper>
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
