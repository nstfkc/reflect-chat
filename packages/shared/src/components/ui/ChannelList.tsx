import { Channel } from "db";
import { useQuery } from "../../utils/useQuery";
import { useOrganisation } from "../../auth";
import { View, Text, FlatList, Pressable } from "react-native";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

interface ChannelListProps {
  activeChannelId: string | undefined;
  onChannelClick: (channel: Channel) => void;
}

export const ChannelList = (props: ChannelListProps) => {
  const { onChannelClick, activeChannelId } = props;
  const { organisation } = useOrganisation();
  const { unreadMentions } = useContext(MessageContext);
  const { data, isLoading } = useQuery("listChannels", {
    organisationId: organisation.publicId,
  });

  if (isLoading && !data) {
    return null;
  }

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontWeight: "600", fontSize: 16, opacity: 0.7 }}>
        Channels
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const isActive = activeChannelId === item.id;
          const undreadChannelMentions = (unreadMentions[item.id] ?? new Set())
            .size;
          return (
            <Pressable
              style={{
                padding: 3,
                borderRadius: 6,
                backgroundColor: isActive ? "rgba(0,0,0,0.2)" : "transparent",
              }}
              onPress={() => onChannelClick(item)}
              key={item.id}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 16, opacity: 0.8 }}>
                  <Text style={{ fontWeight: "bold", opacity: 0.7 }}>#</Text>{" "}
                  {item.name}
                </Text>
                {undreadChannelMentions > 0 ? (
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
                      {undreadChannelMentions}
                    </Text>
                  </View>
                ) : null}
              </View>
            </Pressable>
          );
        }}
      ></FlatList>
    </View>
  );
};
