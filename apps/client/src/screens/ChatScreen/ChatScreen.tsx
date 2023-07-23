import { TbX } from "react-icons/tb";

import { useEffect, useState, useContext, useMemo } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { FileUploaderProvider, TypingUsersList, ChatContext } from "shared";
import { getEditor } from "./components/getEditor";
import { MessageList } from "./components/MessageList";
import { DMChat } from "./components/DMChat";
import { ChannelChat } from "./components/ChannelChat";
import { MessageRender } from "./components/Message";

interface ThreadScreenProps {
  kind: "channel" | "dm";
}

export const ThreadScreen = (props: ThreadScreenProps) => {
  const {
    channelPublicId,
    receiverPublicId,
    messagePublicId = "",
  } = useParams();
  const parentId =
    props.kind === "channel" ? channelPublicId : receiverPublicId;
  const { getMessageByPublicId, getChat } = useContext(ChatContext);

  const parentMessage = getMessageByPublicId(messagePublicId);
  const navigate = useNavigate();

  const chat = getChat({ kind: "thread", conversationId: parentMessage?.id! });
  const [messages, setMessages] = useState(chat.messages$.getValue());

  useEffect(() => {
    chat.activate();
    const subs = chat.messages$.subscribe((messages) => setMessages(messages));
    setMessages(chat.messages$.getValue());
    return () => {
      chat.deactivate();
      subs.unsubscribe();
    };
  }, [chat]);

  const Editor = useMemo(
    () =>
      parentMessage
        ? getEditor({
            kind: "thread",
            message: parentMessage,
            onUpdate: () => {},
            sendMessage: (message) => chat.createMessage(message),
          })
        : () => <></>,
    [chat, parentMessage]
  );

  if (!parentMessage) {
    return null;
  }

  return (
    <FileUploaderProvider pathPrefix={parentMessage?.publicId!}>
      <div className="bg-black/5 shadow-md h-full flex flex-col">
        <div className="p-4 flex justify-between items-center">
          <span className="font-bold">Thread</span>
          <button onClick={() => navigate(`/${props.kind}/${parentId}`)}>
            <TbX className="text-2xl" />
          </button>
        </div>
        <div className="p-2">
          <div className="bg-black/5 rounded-lg">
            <MessageRender
              showThreadCount={false}
              messagesOrDate={[parentMessage as any]}
              parentId={0}
            />
          </div>
        </div>
        <div className="grow">
          <MessageList messages={messages} />
        </div>
        <div className="p-2">
          <div className="px-6">
            <TypingUsersList channelOrUserId={parentMessage?.id!} />
          </div>
          <div className="w-full rounded-xl bg-white/40">
            {Editor ? <Editor /> : null}
          </div>
        </div>
      </div>
    </FileUploaderProvider>
  );
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
      <div className="max-w-md">
        <Outlet />
      </div>
    </div>
  );
};
