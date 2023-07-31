import { useContext, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  OrganisationContext,
  FileUploaderProvider,
  MessageContext,
  TypingUsersList,
  useTheme,
  ChatContext,
  ChatInstanceProvider,
  useSubjectValue,
} from "shared";
import { getEditor } from "./getEditor";
import { MessageList } from "./MessageList";

export const ChannelChat = () => {
  const { channelPublicId } = useParams();
  const { canSendMessage } = useContext(MessageContext);
  const { channels } = useContext(OrganisationContext);
  const { getChat } = useContext(ChatContext);
  const theme = useTheme();

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

  const Editor = useMemo(
    () =>
      channel
        ? getEditor({
            kind: "channel",
            channel,
            onUpdate: () => chat.handleTextUpdate(),
            sendMessage: (text) => chat.createMessage(text),
          })
        : () => <></>,
    [chat, channel]
  );

  if (!channel) {
    return null;
  }

  return (
    <ChatInstanceProvider chat={chat}>
      <FileUploaderProvider pathPrefix={channel?.publicId}>
        <div className="h-full flex flex-col justify-between">
          <div
            className="px-4 py-2 font-bold"
            style={{ backgroundColor: theme.colors.alt1 }}
          >
            <div>{`# ${channel.name}`}</div>
          </div>
          <div className="relative h-full">
            {messages ? (
              <MessageList
                onMessageRender={chat.handleReadMessage}
                messages={messages}
              />
            ) : null}
          </div>
          <div className="p-2">
            <div className="px-6">
              <TypingUsersList />
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
