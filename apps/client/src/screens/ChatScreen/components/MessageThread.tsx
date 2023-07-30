import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserProfilePicture,
  MessageWithThread,
  ChatInstanceContext,
} from "shared";

export const MessageThread = (props: { message: MessageWithThread }) => {
  const { message } = props;
  const { thread = [] } = message;
  const { chat } = useContext(ChatInstanceContext);
  const navigate = useNavigate();

  if (thread.length <= 0 || chat.kind === "thread") {
    return null;
  }
  return (
    <button
      onClick={() => navigate(message.publicId, { state: { message } })}
      className="font-semibold text-xs flex gap-2 items-center"
    >
      <div className="flex gap-1 items-center">
        {Array.from(
          new Set(message.thread.map((message) => message.senderId))
        ).map((userId) => (
          <UserProfilePicture
            key={userId}
            userId={userId}
            showStatusIndicator={false}
            showUserName={false}
            size={24}
          />
        ))}
        <span className="text-green-500">{message.thread?.length} replies</span>
      </div>
    </button>
  );
};
