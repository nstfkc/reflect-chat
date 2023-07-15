import { View, Pressable, Image } from "react-native";
import { Text } from "../lib/Text";
import { useQuery } from "../../utils/useQuery";
import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import { useUser } from "../../auth";
import { MessageContext } from "../context/MessageContext";
import { ConfigContext } from "../context/ConfigContext";
import { UserProfilePicture } from "./UserProfilePicture";

interface DMListProps {
  onConversationPress: (user) => void;
}

export const DMList = (props: DMListProps) => {
  const { onConversationPress } = props;
  const { user } = useUser();
  const { data = [] } = useQuery("listDirectMessages");
  const { unreadMessages } = useContext(MessageContext);
  const { assetsServiceUrl } = useContext(ConfigContext);

  const newDMUserIds = Object.entries(unreadMessages)
    .map(([, messages]) =>
      Array.from(messages)
        .filter((message) => message.receiverId === user.publicId)
        .map((message) => message.senderId)
    )
    .flat();

  const userIds = Array.from(
    new Set([
      ...data.map((message) => [message.receiverId, message.senderId]).flat(),
      ...newDMUserIds,
    ])
  );

  const { users: allUsers } = useContext(UsersContext);

  const users = allUsers.filter(
    (u) => userIds.includes(u.publicId) && u.publicId !== user.publicId
  );

  return (
    <View style={{ gap: 8 }}>
      <Text
        style={{
          fontWeight: "600",
          fontSize: 16,
        }}
      >
        Direct Messages
      </Text>
      <Pressable key={user.publicId} onPress={() => onConversationPress(user)}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <UserProfilePicture size={20} userId={user.publicId} />
          <Text style={{ fontSize: 12 }}>(You)</Text>
        </View>
      </Pressable>

      {users.map((user) => {
        const unreadMessageCount = (unreadMessages[user.publicId] ?? new Set())
          .size;
        return (
          <Pressable
            key={user.publicId}
            onPress={() => onConversationPress(user)}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <UserProfilePicture size={20} userId={user.publicId} />

              {unreadMessageCount > 0 ? (
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
                    {unreadMessageCount}
                  </Text>
                </View>
              ) : null}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};
