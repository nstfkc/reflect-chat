import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";
import { useQuery } from "../../../utils/useQuery";
import { insertDateBetweenMessages } from "./utils";

interface UseChatHistoryProps {
  channelId: number | null;
  receiverId: number | null;
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

export const useChannelChatHistory = (props: { channelId: number }) => {
  const { channelId } = props;
  const { getMessageHistoryById } = useContext(MessageContext);
  const { data: history = [] } = useQuery("listChannelMessages", {
    channelId,
  });

  const h = getMessageHistoryById(channelId);

  console.log({ h });
  return insertDateBetweenMessages([...history, ...h]);
};

export const useDMChatHistory = (props: { receiverId: number }) => {
  const { receiverId } = props;
  const { getMessageHistoryById } = useContext(MessageContext);
  const { data: history = [] } = useQuery("listDMMessages", {
    receiverId,
  });

  const h = getMessageHistoryById(receiverId);
  return insertDateBetweenMessages([...history, ...h]);
};

export const useThreadChatHistory = (props: { messagePublicId: string }) => {
  const { messagePublicId } = props;
  const { getMessageHistoryById } = useContext(MessageContext);
  const { data: message } = useQuery("listThreadMessages", {
    messagePublicId,
  });

  const h = getMessageHistoryById(message?.id);
  return {
    message,
    thread: insertDateBetweenMessages([...(message?.thread ?? []), ...h]) ?? [],
  };
};
