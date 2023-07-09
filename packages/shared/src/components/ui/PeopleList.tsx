import { useContext } from "react";
import { View, Text, FlatList, Pressable, Image } from "react-native";

import { UsersContext } from "../context/UsersContext";
import { User } from "db";
import { ConfigContext } from "../context/ConfigContext";

interface Props {
  onUserPress: (user: User) => void;
}

export const PeopleList = (props: Props) => {
  const { users } = useContext(UsersContext);
  const { assetsServiceUrl } = useContext(ConfigContext);

  return (
    <View>
      <Text style={{ fontWeight: "600", fontSize: 18, opacity: 0.7 }}>
        People
      </Text>
      <FlatList
        style={{ paddingVertical: 8 }}
        keyExtractor={({ publicId }) => publicId}
        data={users}
        renderItem={({ item, index }) => (
          <>
            <Pressable
              onPress={() => props.onUserPress(item)}
              key={item.publicId}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <View
                style={{
                  width: 18,
                  height: 18,
                  backgroundColor: item.userProfile.profileColor,
                  borderRadius: 5,
                }}
              >
                {item.userProfile.profilePictureUrl && (
                  <Image
                    style={{ borderRadius: 4 }}
                    source={{
                      width: 20,
                      height: 20,
                      uri: [
                        assetsServiceUrl,
                        item.userProfile.profilePictureUrl,
                      ].join("/"),
                    }}
                  />
                )}
              </View>
              <Text style={{ fontSize: 14, opacity: 0.8 }}>{item.name}</Text>
            </Pressable>
            {index < users.length - 1 ? <View style={{ height: 8 }} /> : null}
          </>
        )}
      ></FlatList>
    </View>
  );
};
