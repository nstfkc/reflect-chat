import { View, Image } from "react-native";
import { Text } from "../lib/Text";
import { useUser } from "../../auth";
import { PropsWithChildren, useContext, useState } from "react";
import { ConfigContext } from "../context/ConfigContext";
import { useMutation } from "../../utils/useMutation";
import { UsersContext } from "../context/UsersContext";
import { Button } from "../lib/Button";
import { Input } from "../lib/Input";
import { IconsContext } from "../context/IconsContext";
import { useTheme } from "../context/ThemeContext";

interface UserProfileProps {
  ImageWrapper: (
    props: PropsWithChildren<{
      onProfilePictureUpload: (path: string) => void;
    }>
  ) => JSX.Element;
  handleClose: VoidFunction;
}

export const UserProfile = (props: UserProfileProps) => {
  const { ImageWrapper } = props;
  const { user, mutate } = useUser();
  const { assetsServiceUrl } = useContext(ConfigContext);
  const { icons } = useContext(IconsContext);
  const { setUserProfileById } = useContext(UsersContext);
  const { trigger } = useMutation("updateProfile");
  const theme = useTheme();

  const [username, setUserName] = useState(user.userProfile.username);
  const [profilePictureUrl, setNewProfilePictureUrl] = useState(
    user.userProfile.profilePictureUrl
  );

  const UserIcon = icons.User;

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>User Profile</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ImageWrapper
          onProfilePictureUpload={(path) => setNewProfilePictureUrl(path)}
        >
          {profilePictureUrl ? (
            <Image
              style={{ width: 128, height: 128, borderRadius: 16 }}
              source={{
                uri: [assetsServiceUrl, profilePictureUrl].join("/"),
              }}
            ></Image>
          ) : (
            <View
              style={{
                width: 128,
                height: 128,
                borderRadius: 16,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.1)",
              }}
            >
              <UserIcon color={user.userProfile.profileColor} size={72} />
            </View>
          )}
        </ImageWrapper>
      </View>

      <View>
        <Text style={{ fontWeight: "600" }}>Username</Text>
        <Input
          value={username}
          onChangeText={(text) => setUserName(text)}
        ></Input>
      </View>
      <View style={{ paddingVertical: 4 }}></View>
      <View>
        <Button
          onPress={() =>
            trigger({ username, profilePictureUrl }).then((res) => {
              if (res.success === true) {
                setUserProfileById(user.id, res.data);
                mutate({ ...user, userProfile: res.data });
              }
            })
          }
        >
          Save
        </Button>
      </View>
    </View>
  );
};
