import { PropsWithChildren } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, ...rest } = props;
  return (
    <TouchableOpacity {...rest} style={styles().button}>
      <Text style={styles().label}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = () =>
  StyleSheet.create({
    button: {
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 12,
      textAlign: "center",
      backgroundColor: "#000",
    },
    label: {
      textAlign: "center",
      fontSize: 16,
      fontWeight: "600",
      letterSpacing: 1,
      color: "#FFF",
    },
  });
