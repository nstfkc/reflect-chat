import { Channel, User } from "@prisma/client";

import { useContext, useEffect, useLayoutEffect, useMemo, useRef } from "react";
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

  const Editor = channel
    ? getEditor({
        kind: "channel",
        channel,
        sendMessage: (message) =>
          sendMessage(
            { text: message, channelId: channel.id, senderId: user?.publicId },
            []
          ),
      })
    : user
    ? getEditor({
        kind: "user",
        user: receiver,
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
    : () => <></>;

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
            {Editor ? <Editor /> : null}
          </div>
        </div>
      </div>
    </FileUploaderProvider>
  );
};

type GetEditorProps =
  | {
      kind: "channel";
      channel: Channel;
      sendMessage: (message: string) => void;
    }
  | {
      kind: "user";
      user: User;

      sendMessage: (message: string) => void;
    };

function getEditor(props: GetEditorProps) {
  const editors = new Map<string, () => JSX.Element>();
  if (props.kind === "channel") {
    if (!editors.has(props.channel.id)) {
      editors.set(props.channel.id, () => (
        <TextEditor
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
    if (!editors.has(props.user.publicId)) {
      editors.set(props.user.publicId, () => (
        <TextEditor
          onSubmit={(message) => {
            props.sendMessage(message);
          }}
          placeholder={`Message ${props.user.name}`}
        />
      ));
    }
    return editors.get(props.user.publicId);
  }
}
