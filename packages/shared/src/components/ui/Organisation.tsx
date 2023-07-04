import { View, Text, Pressable } from "react-native";

import { useOrganisation } from "../../auth";
import { useContext } from "react";
import { IconsContext } from "../context/IconsContext";

interface OrganisationProps {
  navigateToPeople: VoidFunction;
}

export const Organisation = (props: OrganisationProps) => {
  const { organisation } = useOrganisation();
  const {
    icons: { Users },
  } = useContext(IconsContext);
  const { navigateToPeople } = props;

  return (
    <View style={{ gap: 8 }}>
      <View>
        <Text
          style={{
            fontWeight: "900",
            fontSize: 18,
            opacity: 0.6,
            letterSpacing: 0.4,
          }}
        >
          {organisation.name}
        </Text>
      </View>
      <View>
        <Pressable onPress={() => navigateToPeople()}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Users />
            <Text
              style={{
                fontWeight: "500",
                letterSpacing: 0.5,
                fontSize: 16,
                opacity: 0.7,
              }}
            >
              People
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
