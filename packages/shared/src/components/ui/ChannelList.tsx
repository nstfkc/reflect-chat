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
    <View>
      <Text style={{ fontWeight: "600", fontSize: 16, opacity: 0.8 }}>
        Channels
      </Text>
      <FlatList
        style={{ paddingVertical: 8 }}
        data={data}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={{ paddingVertical: 2 }}
              onPress={() => onChannelClick(item)}
              key={item.id}
            >
              <Text style={{ fontSize: 14 }}>
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
