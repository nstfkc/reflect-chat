import { View, Text } from "react-native";
import { useContext } from "react";
import { useUser } from "../../../auth";
import { OrganisationContext } from "../../context/OrganisationContext/OrganisationContext";
import { ChatInstanceContext } from "../../context/Chat/ChatInstanceContext";
import { useSubjectValue } from "../../../utils/useSubjectValue";

export function useTypingUsers() {
  const { user } = useUser();
  const { getUserById } = useContext(OrganisationContext);
  const { chat } = useContext(ChatInstanceContext);
  const whoIsTyping = useSubjectValue(chat.whoIsTyping$);

  return Array.from(whoIsTyping)
    .filter((userId) => userId !== user.id)
    .map((userId) => getUserById(userId));
}

export const TypingUsersList = () => {
  const users = useTypingUsers();

  return (
    <View style={{ height: 16, flexDirection: "row" }}>
      {users.length > 2 ? (
        <View>
          <Text>Multiple people are typing</Text>
        </View>
      ) : (
        users.map((user, index, arr) => (
          <View key={user?.id}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 12, opacity: 0.8, fontWeight: "bold" }}>
                {user?.userProfile?.username}{" "}
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
