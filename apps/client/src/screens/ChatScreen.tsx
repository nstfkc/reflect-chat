import {
  useContext,
  Fragment,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import { useParams } from "react-router-dom";
import {
  useQuery,
  useOrganisation,
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
    <div className="ProseMirror">
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
    </div>
  );
};

export const ChatScreen = () => {
  const { channelId } = useParams();
  const { organisation } = useOrganisation();
  const { user } = useUser();
  const { sendMessage, canSendMessage } = useContext(MessageContext);
  const { data: channels = [] } = useQuery("listChannels", {
    organisationId: organisation?.publicId!,
  });

  const channel = channels.find(({ id }) => id === channelId);

  const chatHistory = useChatHistory(channel);

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
    <FileUploaderProvider pathPrefix={channelId!}>
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
                  <Fragment key={index}>
                    <ChatMessage
                      messages={messagesOrDate}
                      fragmentRenderer={(message) => (
                        <MessageRendererFragment
                          content={JSON.parse(message.text).content}
                        ></MessageRendererFragment>
                      )}
                    />
                  </Fragment>
                );
              }}
            />
          </div>
        </div>
        <div className="w-full border-t-2 border-black bg-gray-100/50">
          <div>{canSendMessage ? "" : "Cant send message"}</div>
          <TextEditor
            onSubmit={(message) => {
              sendMessage(
                {
                  channelId: channelId,
                  senderId: user?.publicId,
                  text: message,
                },
                []
              );
            }}
            placeholder={(channel as any)?.name}
            usersCanBeMentioned={[]}
          />
        </div>
      </div>
    </FileUploaderProvider>
  );
};
