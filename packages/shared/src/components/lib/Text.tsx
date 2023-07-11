import { PropsWithChildren } from "react";
import { Text as TextBase, TextStyle, StyleProp } from "react-native";
import { useTheme } from "../context/ThemeContext";

interface TextProps {
  style?: StyleProp<TextStyle>;
}

export const Text = (props: PropsWithChildren<TextProps>) => {
  const { children, style } = props;
  const theme = useTheme();

  return (
    <TextBase style={[style, { color: theme.colors.secondary }]}>
      {children}
    </TextBase>
  );
};
