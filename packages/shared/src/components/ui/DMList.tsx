import { View, Text, Pressable } from "react-native";
import { useQuery } from "../../utils/useQuery";
import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

interface DMListProps {
  onConversationPress: (user) => void;
}

export const DMList = (props: DMListProps) => {
  const { onConversationPress } = props;
  const { data = [] } = useQuery("listDirectMessages");
  const userIds = Array.from(
    new Set(
      data.map((message) => [message.receiverId, message.senderId]).flat()
    )
  );

  const { users: allUsers } = useContext(UsersContext);

  const users = allUsers.filter((u) => userIds.includes(u.publicId));

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontWeight: "600", fontSize: 16, opacity: 0.8 }}>
        Direct Messages
      </Text>
      {users.map((user) => {
        return (
          <Pressable
            key={user.publicId}
            onPress={() => onConversationPress(user)}
          >
            <View
              style={{ flexDirection: "row", gap: 4, alignItems: "center" }}
            >
              <View
                style={{
                  width: 16,
                  height: 16,
                  backgroundColor: user.userProfile.profileColor,
                  borderRadius: 4,
                }}
              ></View>
              <Text>{user.name}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};
