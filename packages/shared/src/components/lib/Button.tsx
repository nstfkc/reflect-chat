import { PropsWithChildren } from "react";
import { Text, Pressable, PressableProps, StyleSheet } from "react-native";
import { Theme, useTheme } from "../context/ThemeContext";

interface ButtonProps extends PressableProps {}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, ...rest } = props;
  const theme = useTheme();
  return (
    <Pressable {...rest} style={styles(theme).button}>
      <Text style={styles(theme).label}>{children}</Text>
    </Pressable>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 12,
      textAlign: "center",
      backgroundColor: theme.colors.secondary,
    },
    label: {
      textAlign: "center",
      fontSize: 16,
      fontWeight: "600",
      letterSpacing: 1,
      color: theme.colors.primary,
    },
  });
