import { View, Image } from "react-native";
import { Text } from "../lib/Text";
import { useUser } from "../../auth";
import { PropsWithChildren, useContext, useState } from "react";
import { ConfigContext } from "../context/ConfigContext";
import { useMutation } from "../../utils/useMutation";
import { UsersContext } from "../context/UsersContext";
import { Button } from "../lib/Button";
import { Input } from "../lib/Input";

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
  const { setUserProfileById } = useContext(UsersContext);
  const { trigger } = useMutation("updateProfile");

  const [username, setUserName] = useState(user.userProfile.username);
  const [profilePictureUrl, setNewProfilePictureUrl] = useState(
    user.userProfile.profilePictureUrl
  );

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>User Profile</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ImageWrapper
          onProfilePictureUpload={(path) => setNewProfilePictureUrl(path)}
        >
          <Image
            style={{ width: 128, height: 128, borderRadius: 16 }}
            source={{
              uri: [assetsServiceUrl, profilePictureUrl].join("/"),
            }}
          ></Image>
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
