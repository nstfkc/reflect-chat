import { Message } from "@prisma/client";
import { TbMessage } from "react-icons/tb";

import { PropsWithChildren, memo } from "react";
import { useNavigate } from "react-router-dom";
import { JSONContent, ChatMessage } from "shared";

function MessageWrapper({
  children,
  message,
}: PropsWithChildren<{ message: Message }>) {
  const navigate = useNavigate();
  return (
    <div className={"group hover:bg-gray-400/10 rounded-md relative p-1"}>
      {children}
      <div className="absolute opacity-0 group-hover:opacity-100 right-0 top-0 p-1 h-full">
        <button
          onClick={() => navigate(message.publicId, { state: { message } })}
        >
          <TbMessage className="stroke-2 text-xl" />
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

export const MessageRender = memo((props: MessageProps) => {
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
