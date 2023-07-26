import { TbX } from "react-icons/tb";

import { useEffect, useState, useContext, useMemo } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import {
  FileUploaderProvider,
  TypingUsersList,
  ChatContext,
  useSubjectValue,
  ChatInstanceProvider,
} from "shared";
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
  const messages = useSubjectValue(chat.messages$);

  useEffect(() => {
    chat.activate();
    return () => {
      chat.deactivate();
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
    <ChatInstanceProvider chat={chat}>
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
                onMessageRender={chat.handleReadMessage}
                showThreadCount={false}
                messagesOrDate={[parentMessage as any]}
                parentId={0}
              />
            </div>
          </div>
          <div className="grow">
            <MessageList
              onMessageRender={chat.handleReadMessage}
              messages={messages}
            />
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
    </ChatInstanceProvider>
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
