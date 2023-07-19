import { Pressable, View } from "react-native";
import { UserProfilePicture } from "./UserProfilePicture";
import { useOrganisation, useUser } from "../../auth";
import { useTheme } from "../context/ThemeContext";
import { Text } from "../lib/Text";
import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import { userStatuses } from "../../constants/userStatus";
import { UserStatusKind } from "db";

interface UserActionsProps {
  onStatusSelect: (userStatus: UserStatusKind) => void;
}

export const UserActions = (props: UserActionsProps) => {
  const { onStatusSelect } = props;
  const { user } = useUser();
  const { getUserById, setUserStatusById } = useContext(UsersContext);
  const theme = useTheme();
  const { organisation } = useOrganisation();

  const userStatus = getUserById(user.id).userStatus.status;

  const handleUserStatusSelect = (userStatus: UserStatusKind) => {
    setUserStatusById(user.userStatus.id, userStatus);
    onStatusSelect(userStatus);
  };

  return (
    <View style={{ gap: 12 }}>
      <View>
        <UserProfilePicture
          size={32}
          userId={user.id}
          statusIndicatorBorderColor={theme.colors.alt2}
          textStyle={{ fontWeight: "500" }}
        />
      </View>
      <View>
        <Pressable>
          <Text style={{ fontWeight: "500" }}>Set your status</Text>
        </Pressable>
        <View style={{ gap: 4, paddingVertical: 4 }}>
          {userStatuses.map((status) => {
            return (
              <Pressable
                key={status.kind}
                onPress={() => handleUserStatusSelect(status.kind)}
                style={{
                  paddingHorizontal: 4,
                  paddingVertical: 2,
                  borderRadius: 6,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  backgroundColor:
                    userStatus === status.kind
                      ? "rgba(0,0,0,0.2)"
                      : "transparent",
                }}
              >
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: status.color,
                  }}
                ></View>
                <Text>{status.label}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
      <View></View>
      <View>
        <Pressable>
          <Text style={{ fontWeight: "500" }}>Profile</Text>
        </Pressable>
      </View>
      <View>
        <Pressable style={{ flexDirection: "row", gap: 3 }}>
          <Text style={{ fontWeight: "500" }}>
            Sign out {organisation.name}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
