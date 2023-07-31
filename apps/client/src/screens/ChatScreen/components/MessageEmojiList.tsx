import { Reaction } from "@prisma/client";
import { useContext } from "react";
import { useUser, MessageWithThread, ChatInstanceContext } from "shared";
import { Emoji } from "emoji-picker-react";

interface MessageEmojiListProps {
  message: MessageWithThread;
}

export const MessageEmojiList = (props: MessageEmojiListProps) => {
  const { message } = props;
  const { user } = useUser();
  const { chat } = useContext(ChatInstanceContext);

  if (message.reactions?.length <= 0) {
    return null;
  }

  let emojiMap: Record<string, Reaction[]> = {};

  for (const reaction of message?.reactions ?? []) {
    if (!emojiMap[reaction?.unified]) {
      emojiMap[reaction?.unified] = [];
    }

    emojiMap[reaction?.unified].push(reaction);
  }

  return (
    <div className="flex gap-1">
      {Object.entries(emojiMap).map(([unified, reactions], index) => {
        const exist = reactions.find(
          (reaction) => reaction?.userId === user?.id
        );

        return (
          <button
            onClick={() => {
              if (exist) {
                chat.deleteReaction(exist);
              } else {
                chat.createReaction({
                  messageId: message.id,
                  unified,
                });
              }
            }}
            key={index}
            className={[
              "flex gap-1 items-center bg-black/10 rounded-md py-1 px-2 border-2",
              exist ? "border-green-600/50" : "border-black/10",
            ].join(" ")}
          >
            <Emoji size={16} unified={unified} />
            <span className="text-xs font-semibold opacity-75">
              {reactions.length}
            </span>
          </button>
        );
      })}
    </div>
  );
};
