import { useContext, useCallback, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  OrganisationContext,
  FileUploaderProvider,
  MessageContext,
  useUser,
  TypingUsersList,
  useSocket,
  useTheme,
  ChatContext,
  useSubjectValue,
} from "shared";
import { getEditor } from "./getEditor";
import { MessageList } from "./MessageList";

export const ChannelChat = () => {
  const { channelPublicId } = useParams();
  const { canSendMessage } = useContext(MessageContext);
  const { channels } = useContext(OrganisationContext);
  const { getChat } = useContext(ChatContext);
  const { user } = useUser();
  const theme = useTheme();
  const { socket } = useSocket();

  const channel = channels.find(
    (channel: any) => channel.publicId === channelPublicId
  );

  const chat = getChat({ kind: "channel", channelId: channel?.id! });
  const messages = useSubjectValue(chat.messages$);

  useEffect(() => {
    chat.activate();
    return () => {
      chat.deactivate();
    };
  }, [chat]);

  const onUpdate = useCallback(() => {
    /* socket?.emit("user-typing", {
     *   channelOrUserId: channel?.id,
     *   userId: user?.id!,
     * }); */
  }, [socket, user?.id, channel?.id]);

  const Editor = useMemo(
    () =>
      channel
        ? getEditor({
            kind: "channel",
            channel,
            onUpdate,
            sendMessage: (message) => chat.createMessage(message),
          })
        : () => <></>,
    [onUpdate, chat, channel]
  );

  if (!channel) {
    return null;
  }

  return (
    <FileUploaderProvider pathPrefix={channel?.publicId}>
      <div className="h-full flex flex-col justify-between">
        <div
          className="px-4 py-2 font-bold"
          style={{ backgroundColor: theme.colors.alt1 }}
        >
          <div>{`# ${channel.name}`}</div>
        </div>
        <div className="relative h-full">
          {messages ? <MessageList messages={messages} /> : null}
        </div>
        <div className="p-2">
          <div className="px-6">
            <TypingUsersList channelOrUserId={channel.id} />
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
