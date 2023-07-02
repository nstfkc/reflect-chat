import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";
import { useQuery } from "../../../utils/useQuery";
import { insertDateBetweenMessages } from "./utils";

interface UseChatHistoryProps {
  channelId: string | null;
  receiverId: string | null;
}

export const useChatHistory = (props: UseChatHistoryProps) => {
  const { channelId, receiverId } = props;
  const { getMessageHistoryById } = useContext(MessageContext);
  const { data: history = [] } = useQuery("listMessages", {
    channelId,
    receiverId,
  });

  const h = getMessageHistoryById(channelId ?? receiverId);
  return insertDateBetweenMessages([...history, ...h]);
};
