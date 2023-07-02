import { useContext, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import { useParams, useLocation } from "react-router-dom";
import {
  TextEditor,
  FileUploaderProvider,
  MessageContext,
  useUser,
  JSONContent,
  ChatMessage,
  useChatHistory,
} from "shared";

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
            return <MessageRendererFragment key={index} content={c.content} />;
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
          default:
            return <pre key={index}>{JSON.stringify(c)}</pre>;
        }
      })}
    </>
  );
};

export const ChatScreen = () => {
  const { state } = useLocation();
  const { user } = useUser();
  const { sendMessage, canSendMessage } = useContext(MessageContext);

  const { channel, user: receiver } = state;

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
    <FileUploaderProvider pathPrefix={channel?.id ?? receiver?.publicId}>
      <div className="h-full flex flex-col justify-between">
        <div className="relative h-full">
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
                if (typeof messagesOrDate === "string") {
                  return (
                    <div
                      className="py-8 text-center font-semibold text-sm"
                      key={index}
                    >
                      {messagesOrDate}
                    </div>
                  );
                }
                return (
                  <div className="ProseMirror" key={index}>
                    <ChatMessage
                      messages={messagesOrDate}
                      fragmentRenderer={(message) => (
                        <MessageRendererFragment
                          content={JSON.parse(message.text)}
                        ></MessageRendererFragment>
                      )}
                    />
                  </div>
                );
              }}
            />
          </div>
        </div>
        <div className="p-3">
          <div className="w-full shadow-xl rounded-xl bg-white/30">
            <div>{canSendMessage ? "" : "Cant send message"}</div>
            <TextEditor
              onSubmit={(message) => {
                sendMessage(
                  {
                    receiverId: receiver?.publicId,
                    channelId: channel?.id,
                    senderId: user?.publicId,
                    text: message,
                  },
                  []
                );
              }}
              placeholder={`Message #${channel?.name}`}
              usersCanBeMentioned={[]}
            />
          </div>
        </div>
      </div>
    </FileUploaderProvider>
  );
};
