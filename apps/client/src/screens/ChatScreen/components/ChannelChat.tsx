import { useContext, useMemo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  OrganisationContext,
  FileUploaderProvider,
  TypingUsersList,
  useTheme,
  ChatContext,
  ChatInstanceProvider,
  useSubjectValue,
  IconsContext,
  Button,
} from "shared";

import { Channel } from "@prisma/client";
import { getEditor } from "./getEditor";
import { MessageList } from "./MessageList";
import { Modal } from "../../../components/Modal";
import { Collapsible } from "../../../components/Collapsible";
import { CreateChannelInvitation } from "shared/src/components/forms/CreateChannelInvitation";

const InviteExternal = ({ channelId }: { channelId: number }) => {
  const [expandCollapsible, setExpandCollapsible] = useState(false);
  return (
    <Collapsible
      label="Invite external"
      open={expandCollapsible}
      onOpenChange={setExpandCollapsible}
    >
      <div className="flex flex-col gap-2 py-4">
        <CreateChannelInvitation
          onSuccess={() => setExpandCollapsible(false)}
          channelId={channelId}
        />
      </div>
    </Collapsible>
  );
};

const ChannelHeader = (props: { channel: Channel }) => {
  const { channel } = props;
  const { icons } = useContext(IconsContext);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  return (
    <div className="flex px-4 py-2 justify-between items-center bg-black/10">
      <div className="font-bold">
        <div>{`# ${channel.name}`}</div>
      </div>
      <div>
        <button onClick={() => setShowSettingsModal(true)}>
          <icons.Settings />
        </button>
      </div>
      {showSettingsModal && (
        <Modal
          onOpenChange={(s) => setShowSettingsModal(s)}
          open={showSettingsModal}
          title="Channel Settings"
          description=""
        >
          <InviteExternal channelId={channel.id} />
        </Modal>
      )}
    </div>
  );
};

export const ChannelChat = () => {
  const { channelPublicId } = useParams();
  const { channels } = useContext(OrganisationContext);
  const { getChat } = useContext(ChatContext);

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
            onUpdate: chat.handleTextUpdate,
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
          <ChannelHeader channel={channel} />
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
