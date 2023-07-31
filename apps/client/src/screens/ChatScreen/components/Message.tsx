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
  ChatMessage,
  TextEditor,
  useUser,
  ChatInstanceContext,
} from "shared";
import { Emoji } from "emoji-picker-react";
import { EmojiButton } from "./EmojiButton";

import { MessageThread } from "./MessageThread";
import { MessageFragment } from "./MessageFragment";
import { MessageEmojiList } from "./MessageEmojiList";

const MessageEditingContext = createContext({
  isEditActive: false,
  toggleEdit: () => {},
});

interface MessageWrapperProps {
  message: MessageWithThread;
  showThreadCount?: boolean;
  onRender: VoidFunction;
}

const MessageWrapper = ({
  children,
  message,
  onRender,
}: PropsWithChildren<MessageWrapperProps>) => {
  const [isEditActive, setIsEditActive] = useState(false);

  const { chat } = useContext(ChatInstanceContext);
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <MessageEditingContext.Provider
      value={{ isEditActive, toggleEdit: () => setIsEditActive((s) => !s) }}
    >
      <div
        ref={() => onRender()}
        className={"group hover:bg-gray-400/10 rounded-md relative p-1"}
      >
        {children}
        <div className="flex flex-col gap-1 pl-[38px]">
          <MessageEmojiList message={message} />
          <MessageThread message={message} />
        </div>
        <div className="absolute opacity-0 group-hover:opacity-100 right-0 top-0 p-1 h-full">
          <div className="flex gap-2">
            {chat.kind !== "thread" &&
              ["2705", "1f440", "1f64c"].map((unified) => (
                <button
                  key={unified}
                  onClick={() =>
                    chat.createReaction({ messageId: message.id, unified })
                  }
                >
                  <Emoji unified={unified} size={18} />
                </button>
              ))}
            <EmojiButton messageId={message.id} />
            {!message.conversationId && chat.kind !== "thread" ? (
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
    </MessageEditingContext.Provider>
  );
};

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
  return <MessageFragment content={JSON.parse(message.text)} />;
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
    const Wrapper = (props: PropsWithChildren) => (
      <MessageWrapper
        onRender={() => onMessageRender(message)}
        showThreadCount={showThreadCount}
        message={message}
      >
        {props.children}
      </MessageWrapper>
    );
    return Wrapper;
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
