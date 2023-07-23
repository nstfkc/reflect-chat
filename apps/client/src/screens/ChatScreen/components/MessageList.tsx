import { Message } from "@prisma/client";
import { MessageRender } from "./Message";
import { useEffect, useLayoutEffect, useMemo, useRef, memo } from "react";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";

interface MessageListProps {
  messages: (string | Message[])[];
}

export const MessageList = memo((props: MessageListProps) => {
  const { messages } = props;
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
          return <MessageRender key={index} messagesOrDate={messagesOrDate} />;
        }}
      />
    </div>
  );
});

MessageList.displayName = "MessageList";
