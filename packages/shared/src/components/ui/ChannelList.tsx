import { Channel } from "db";
import { useQuery } from "../../utils/useQuery";
import { useOrganisation } from "../../auth";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

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
    <View>
      <Text style={{ fontWeight: "600", fontSize: 18 }}>Channels</Text>
      <FlatList
        style={{ paddingVertical: 8 }}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ paddingVertical: 1 }}
              onPress={() => onChannelClick(item)}
              key={item.id}
            >
              <Text style={{ fontSize: 16 }}># {item.name}</Text>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};
