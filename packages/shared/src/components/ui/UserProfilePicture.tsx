import { View, Image, TextStyle } from "react-native";
import { Text } from "../lib/Text";
import { useContext } from "react";
import { ConfigContext } from "../context/ConfigContext";
import { UsersContext } from "../context/UsersContext";

interface UserWithProfilePictureProps {
  userId: string;
  textStyle?: TextStyle;
  size?: number;
  showUserName?: boolean;
}

export const UserProfilePicture = (props: UserWithProfilePictureProps) => {
  const { assetsServiceUrl } = useContext(ConfigContext);
  const { getUserById } = useContext(UsersContext);
  const { userId, size = 16, showUserName = true, textStyle } = props;

  const user = getUserById(userId);
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: user.userProfile.profileColor,
          borderRadius: size / 4,
        }}
      >
        {user.userProfile.profilePictureUrl && (
          <Image
            style={{ borderRadius: size / 4 }}
            source={{
              width: size,
              height: size,
              uri: [assetsServiceUrl, user.userProfile.profilePictureUrl].join(
                "/"
              ),
            }}
          />
        )}
      </View>
      {showUserName ? <Text style={{ ...textStyle }}>{user.name}</Text> : null}
    </View>
  );
};
