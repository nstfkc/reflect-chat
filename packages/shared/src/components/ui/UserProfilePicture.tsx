import { View, Image, TextStyle } from "react-native";
import { Text } from "../lib/Text";
import { memo, useContext } from "react";
import { ConfigContext } from "../context/ConfigContext";
import { useTheme } from "../context/ThemeContext";
import { userStatuses } from "../../constants/userStatus";
import { IconsContext } from "../context/IconsContext";
import { OrganisationContext } from "../context/OrganisationContext/OrganisationContext";

interface UserWithProfilePictureProps {
  userId: number;
  textStyle?: TextStyle;
  size?: number;
  showUserName?: boolean;
  showStatusIndicator?: boolean;
  statusIndicatorBorderColor?: string;
}

export const UserProfilePicture = memo((props: UserWithProfilePictureProps) => {
  const { assetsServiceUrl } = useContext(ConfigContext);
  const { getUserById } = useContext(OrganisationContext);
  const { icons } = useContext(IconsContext);
  const theme = useTheme();
  const {
    userId,
    size = 16,
    showUserName = true,
    showStatusIndicator = true,
    statusIndicatorBorderColor = theme.colors.secondary,
    textStyle,
  } = props;

  const UserIcon = icons.User;

  if (!userId) {
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
            borderRadius: size / 4,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
        >
          <UserIcon color={theme.colors.alt2} size={size - 2} />
        </View>
      </View>
    );
  }

  const user = getUserById(userId);

  const userStatus = userStatuses.find((status) => {
    return status.kind == user?.userStatus.status;
  });

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
          borderRadius: size / 4,
          backgroundColor: user.userProfile?.profileColor,
        }}
      >
        {user?.userProfile?.profilePictureUrl ? (
          <Image
            style={{ borderRadius: size / 4 }}
            source={{
              width: size,
              height: size,
              cache: "force-cache",
              uri: [
                assetsServiceUrl,
                user?.userProfile?.profilePictureUrl,
              ].join("/"),
            }}
            defaultSource={{
              width: size,
              height: size,
              cache: "force-cache",
              uri: [
                assetsServiceUrl,
                user?.userProfile?.profilePictureUrl,
              ].join("/"),
            }}
          />
        ) : (
          <View
            style={{
              width: size,
              height: size,
              borderRadius: size / 4,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.1)",
            }}
          >
            <UserIcon color={theme.colors.alt2} size={size - 2} />
          </View>
        )}
        {showStatusIndicator ? (
          <View
            style={{
              position: "absolute",
              width: size / 2,
              height: size / 2,
              borderRadius: 8,
              right: (-1 * size) / 6,
              bottom: (-1 * size) / 6,
              borderColor: statusIndicatorBorderColor,
              borderWidth: size / 10,
              backgroundColor: userStatus?.color ?? "green",
            }}
          />
        ) : null}
      </View>
      {showUserName ? (
        <Text style={{ ...textStyle }}>{user?.userProfile.username}</Text>
      ) : null}
    </View>
  );
});

UserProfilePicture.displayName = "UserProfilePicture";
