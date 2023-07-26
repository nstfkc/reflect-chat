import { View, Pressable, Image } from "react-native";
import { Text } from "../lib/Text";
import { useContext, useEffect, useState } from "react";
import { useUser } from "../../auth";
import { UserProfilePicture } from "./UserProfilePicture";
import { theme } from "../context/ThemeContext";
import { ChatContext } from "../context/Chat/ChatContext";
import { User } from "db";
import { OrganisationContext } from "../context/OrganisationContext/OrganisationContext";
import { useSubjectValue } from "../../utils/useSubjectValue";

interface DMProps {
  userId: number;
  onConversationPress: (user: User) => void;
}
const DM = (props: DMProps) => {
  const { onConversationPress, userId } = props;
  const { getChat } = useContext(ChatContext);
  const { getUserById } = useContext(OrganisationContext);
  const user = getUserById(userId);

  const chat = getChat({ kind: "dm", receiverId: user.id });

  const unseenMessagesCount = useSubjectValue(chat.unseenMessageIds$);

  return (
    <Pressable key={user.publicId} onPress={() => onConversationPress(user)}>
      <View
        style={{
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <UserProfilePicture
          size={20}
          userId={user.id}
          statusIndicatorBorderColor={theme.colors.alt2}
        />

        {unseenMessagesCount.size > 0 ? (
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
              {unseenMessagesCount.size}
            </Text>
          </View>
        ) : null}
      </View>
    </Pressable>
  );
};

interface DMListProps {
  onConversationPress: (user) => void;
}

export const DMList = (props: DMListProps) => {
  const { onConversationPress } = props;
  const { user } = useUser();
  const { directMessageUserIds$ } = useContext(ChatContext);

  const directMessageUserIds = useSubjectValue(directMessageUserIds$);

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
          <UserProfilePicture
            size={20}
            userId={user.id}
            statusIndicatorBorderColor={theme.colors.alt2}
          />
          <Text style={{ fontSize: 12 }}>(You)</Text>
        </View>
      </Pressable>

      {directMessageUserIds.map((userId) => {
        return (
          <DM
            key={userId}
            onConversationPress={onConversationPress}
            userId={userId}
          />
        );
      })}
    </View>
  );
};
