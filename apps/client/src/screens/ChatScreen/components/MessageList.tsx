import { Message } from "@prisma/client";

import { MessageRender } from "./Message";
import { MessageWithThread } from "shared";

import { useRef, memo } from "react";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";

interface MessageListProps {
  messages: (string | MessageWithThread[])[];
  onMessageRender: (message: Message) => void;
}

export const MessageList = memo((props: MessageListProps) => {
  const { messages } = props;

  const virtuoso = useRef<VirtuosoHandle>(null);
  const container = useRef<HTMLDivElement>(null);

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
              onMessageRender={props.onMessageRender}
              key={index}
              messagesOrDate={messagesOrDate}
            />
          );
        }}
      />
    </div>
  );
});

MessageList.displayName = "MessageList";
