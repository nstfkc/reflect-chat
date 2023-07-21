import { TbX } from "react-icons/tb";

import { useContext, useCallback, useMemo } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import {
  FileUploaderProvider,
  MessageContext,
  useUser,
  useThreadChatHistory,
  TypingUsersList,
  useSocket,
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
  const { sendMessage, canSendMessage } = useContext(MessageContext);
  const { message: parentMessage, thread } = useThreadChatHistory({
    messagePublicId,
  });

  const { socket } = useSocket();

  const navigate = useNavigate();
  const { user } = useUser();

  const onUpdate = useCallback(() => {
    socket?.emit("user-typing", {
      channelOrUserId: parentMessage?.id!,
      userId: user?.id!,
    });
  }, [socket, user?.id, parentMessage?.id]);

  const Editor = useMemo(
    () =>
      parentMessage
        ? getEditor({
            kind: "thread",
            message: parentMessage,
            onUpdate,
            sendMessage: (message) =>
              sendMessage(
                {
                  text: message,
                  conversationId: parentMessage.id,
                  senderId: user?.id!,
                },
                []
              ),
          })
        : () => <></>,
    [onUpdate, parentMessage, sendMessage, user]
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
              messagesOrDate={[parentMessage]}
              parentId={0}
              markMentionsAsRead={() => () => {}}
              markMessageAsRead={() => () => {}}
            />
          </div>
        </div>
        <div className="grow">
          <MessageList parentId={parentMessage?.id!} messages={thread} />
        </div>
        <div className="p-2">
          <div className="px-6">
            <TypingUsersList channelOrUserId={parentMessage?.id!} />
          </div>
          <div className="w-full rounded-xl bg-white/40">
            <div>{canSendMessage ? "" : "Cant send message"}</div>
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
