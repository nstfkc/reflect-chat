import { View, Text } from "react-native";
import { UsersContext } from "../../context/UsersContext";
import { useContext } from "react";
import { UsersTypingContext } from "../../context/UsersTypingContext";
import { useUser } from "../../../auth";

interface TypingUsersListProps {
  channelOrUserId: string;
}

export function useTypingUsers(channelOrUserId: string) {
  const { user } = useUser();
  const { getUserById } = useContext(UsersContext);
  const { typingUsersByChannelId } = useContext(UsersTypingContext);

  return Array.from(typingUsersByChannelId.get(channelOrUserId) ?? [])
    .filter((userId) => userId !== user.publicId)
    .map((userId) => getUserById(userId));
}

export const TypingUsersList = (props: TypingUsersListProps) => {
  const { channelOrUserId } = props;
  const users = useTypingUsers(channelOrUserId);

  return (
    <View style={{ height: 16, flexDirection: "row" }}>
      {users.length > 2 ? (
        <View>
          <Text>Multiple people are typing</Text>
        </View>
      ) : (
        users.map((user, index, arr) => (
          <View key={user?.publicId}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 12, opacity: 0.8, fontWeight: "bold" }}>
                {user.name}{" "}
                <Text style={{ fontWeight: "normal" }}>is typing</Text>
              </Text>
            </View>
            {index < arr.length - 1 ? <Text>, </Text> : null}
          </View>
        ))
      )}
    </View>
  );
};
