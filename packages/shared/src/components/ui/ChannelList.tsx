import { Channel } from "db";
import { useQuery } from "../../utils/useQuery";
import { useOrganisation } from "../../auth";
import { View, Text, FlatList, Pressable } from "react-native";

interface ChannelListProps {
  onChannelClick: (channel: Channel) => void;
}

export const ChannelList = (props: ChannelListProps) => {
  const { onChannelClick } = props;
  const { organisation } = useOrganisation();
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
          return (
            <Pressable
              style={{ paddingVertical: 3 }}
              onPress={() => onChannelClick(item)}
              key={item.id}
            >
              <Text style={{ fontSize: 16, opacity: 0.8 }}>
                <Text style={{ fontWeight: "bold", opacity: 0.7 }}>#</Text>{" "}
                {item.name}
              </Text>
            </Pressable>
          );
        }}
      ></FlatList>
    </View>
  );
};
