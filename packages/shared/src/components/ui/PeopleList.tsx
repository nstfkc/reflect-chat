import { useContext } from "react";
import { View, Text, FlatList, Pressable } from "react-native";

import { UsersContext } from "../context/UsersContext";
import { User } from "db";

interface Props {
  onUserPress: (user: User) => void;
}

export const PeopleList = (props: Props) => {
  const { users } = useContext(UsersContext);
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
              />
              <Text style={{ fontSize: 14, opacity: 0.8 }}>{item.name}</Text>
            </Pressable>
            {index < users.length - 1 ? <View style={{ height: 8 }} /> : null}
          </>
        )}
      ></FlatList>
    </View>
  );
};
