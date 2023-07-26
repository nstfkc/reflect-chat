import { Channel } from "db";
import { useQuery } from "../../utils/useQuery";
import { useOrganisation } from "../../auth";
import { View, FlatList, Pressable } from "react-native";
import { Text } from "../lib/Text";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { ChatContext } from "../context/Chat/ChatContext";
import { useSubjectValue } from "../../utils/useSubjectValue";

interface ChannelItemProps {
  channel: Channel;
  isActive: boolean;
  onPress: VoidFunction;
}

const ChannelItem = (props: ChannelItemProps) => {
  const { channel, isActive, onPress } = props;
  const { getChat } = useContext(ChatContext);
  const chat = getChat({ kind: "channel", channelId: channel.id });
  const unreadMentions = useSubjectValue(chat.unseenMentions$);
  return (
    <Pressable
      style={{
        padding: 3,
        borderRadius: 6,
        backgroundColor: isActive ? "rgba(0,0,0,0.2)" : "transparent",
      }}
      onPress={onPress}
      key={channel.id}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16 }}>
          <Text style={{ fontWeight: "bold" }}>#</Text> {channel.name}
        </Text>
        {unreadMentions.size > 0 ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 20,
              height: 20,
              borderRadius: 6,
              backgroundColor: "rgba(0,0,0,0.2)",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              {unreadMentions.size}
            </Text>
          </View>
        ) : null}
      </View>
    </Pressable>
  );
};

interface ChannelListProps {
  activeChannelId: string | undefined;
  onChannelClick: (channel: Channel) => void;
}

export const ChannelList = (props: ChannelListProps) => {
  const { onChannelClick, activeChannelId } = props;
  const { organisation } = useOrganisation();
  const { unreadMentions } = useContext(MessageContext);
  const { data, isLoading } = useQuery("listChannels", {
    organisationId: organisation.id as any,
  });

  if (isLoading && !data) {
    return null;
  }

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontWeight: "600", fontSize: 16 }}>Channels</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const isActive = activeChannelId === item.publicId;
          const undreadChannelMentions = (
            unreadMentions[`key-${item.id}`] ?? new Set()
          ).size;
          return (
            <ChannelItem
              onPress={() => onChannelClick(item)}
              isActive={isActive}
              channel={item}
              key={item.id}
            />
          );
        }}
      ></FlatList>
    </View>
  );
};
