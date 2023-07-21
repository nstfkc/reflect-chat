import { User } from "@prisma/client";
import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  FileUploaderProvider,
  MessageContext,
  useUser,
  TypingUsersList,
  useSocket,
  useTheme,
  UserProfilePicture,
  UsersContext,
  useDMChatHistory,
} from "shared";
import { getEditor } from "./getEditor";
import { MessageList } from "./MessageList";

const DMChatHistory = (props: { receiver: User }) => {
  const messages = useDMChatHistory({
    receiverId: props.receiver.id,
  });

  return <MessageList parentId={props.receiver.id} messages={messages} />;
};

export const DMChat = () => {
  const { receiverPublicId } = useParams();
  const { getUserByPublicId } = useContext(UsersContext);
  const receiver = getUserByPublicId(receiverPublicId ?? "");
  const { sendMessage, canSendMessage } = useContext(MessageContext);
  const { user } = useUser();
  const theme = useTheme();
  const { socket } = useSocket();

  const Editor = useMemo(
    () =>
      getEditor({
        kind: "user",
        user: receiver!,
        onUpdate: () => {
          socket?.emit("user-typing", {
            channelOrUserId: receiver?.id!,
            userId: user?.id!,
          });
        },
        sendMessage: (message) =>
          sendMessage(
            {
              text: message,
              receiverId: receiver!.id,
              senderId: user?.id!,
            },
            []
          ),
      }),
    [socket, receiver, sendMessage, user]
  );

  if (!receiver) {
    return null;
  }

  return (
    <FileUploaderProvider pathPrefix={receiver?.publicId}>
      <div className="h-full flex flex-col justify-between">
        <div
          className="px-4 py-2 font-bold"
          style={{ backgroundColor: theme.colors.alt1 }}
        >
          <UserProfilePicture
            size={24}
            textStyle={{ fontWeight: "bold" }}
            statusIndicatorBorderColor={theme.colors.alt1}
            userId={receiver.id}
          />
        </div>
        <div className="relative h-full">
          <DMChatHistory receiver={receiver} />
        </div>
        <div className="p-2">
          <div className="px-6">
            <TypingUsersList channelOrUserId={user?.id!} />
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
