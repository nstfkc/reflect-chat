import { useContext, useState } from "react";
import { TbMoodPlus } from "react-icons/tb";

import * as Popover from "@radix-ui/react-popover";
import { ChatInstanceContext, useTheme } from "shared";

import EmojiPicker from "emoji-picker-react";

export const EmojiButton = (props: { messageId: number }) => {
  const [isEmojiWindowOpen, setIsEmojiWindowOpen] = useState(false);
  const theme = useTheme();
  const { chat } = useContext(ChatInstanceContext);

  return (
    <Popover.Root
      onOpenChange={(p) => setIsEmojiWindowOpen(p)}
      open={isEmojiWindowOpen}
    >
      <Popover.Trigger asChild>
        <Popover.Anchor>
          <button onClick={() => setIsEmojiWindowOpen(true)}>
            <TbMoodPlus />
          </button>
        </Popover.Anchor>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <Popover.Close />
          <div
            className="p-4"
            style={
              {
                "--emoji-bg": theme.colors.alt2,
                "--text-color": theme.colors.secondary,
              } as any
            }
          >
            <EmojiPicker
              height={300}
              width={300}
              previewConfig={{ showPreview: false }}
              onEmojiClick={(event) => {
                console.log(event);
                chat.createReaction({
                  messageId: props.messageId,
                  unified: event.unified,
                });
              }}
            />
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
