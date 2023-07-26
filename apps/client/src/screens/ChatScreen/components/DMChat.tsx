import { useContext, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FileUploaderProvider,
  useUser,
  TypingUsersList,
  useTheme,
  UserProfilePicture,
  UsersContext,
  ChatContext,
  useSubjectValue,
} from "shared";
import { getEditor } from "./getEditor";
import { MessageList } from "./MessageList";

export const DMChat = () => {
  const theme = useTheme();
  const { receiverPublicId } = useParams();
  const { getUserByPublicId } = useContext(UsersContext);
  const { user } = useUser();
  const receiver = getUserByPublicId(receiverPublicId ?? "");

  const { getChat } = useContext(ChatContext);
  const chat = getChat({ kind: "dm", receiverId: receiver?.id! });

  const messages = useSubjectValue(chat.messages$);

  useEffect(() => {
    chat.activate();
    return () => {
      chat.deactivate();
    };
  }, [chat]);

  const Editor = useMemo(
    () =>
      getEditor({
        kind: "user",
        user: receiver!,
        onUpdate: () => {
          //
        },
        sendMessage: (message) => chat.createMessage(message),
      }),
    [chat, receiver]
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
          <MessageList
            onMessageRender={chat.handleReadMessage}
            messages={messages}
          />
        </div>
        <div className="p-2">
          <div className="px-6">
            <TypingUsersList channelOrUserId={user?.id!} />
          </div>
          <div className="w-full rounded-xl bg-white/40">
            {Editor ? <Editor /> : null}
          </div>
        </div>
      </div>
    </FileUploaderProvider>
  );
};
