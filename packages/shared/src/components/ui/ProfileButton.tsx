import { User, UserProfile } from "db";
import { Text, TouchableHighlight } from "react-native";

import { useUser } from "../../auth";

interface ProfileButtonProps {
  onPress: (user: User & { userProfile: UserProfile }) => void;
}

export const ProfileButton = (props: ProfileButtonProps) => {
  const { onPress } = props;
  const { user } = useUser();

  return (
    <TouchableHighlight>
      <Text style={{ fontSize: 16 }}>{user.name}</Text>
    </TouchableHighlight>
  );
};
