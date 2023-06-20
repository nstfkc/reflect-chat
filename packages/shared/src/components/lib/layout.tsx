import { View, ViewProps, StyleSheet } from "react-native";

interface BoxProps extends ViewProps {
  st?: Partial<StyleTokens>;
}

const defaultTokens: StyleTokens = {
  py: 0,
  px: 0,
};

export const Box = (props: BoxProps) => {
  const { children, style, st = defaultTokens, ...rest } = props;
  return (
    <View {...rest} style={[styles({ ...defaultTokens, ...st }).box, style]}>
      {children}
    </View>
  );
};

type StyleTokens = {
  py: number;
  px: number;
};

const styles = (tokens: StyleTokens) =>
  StyleSheet.create({
    box: {
      paddingVertical: tokens.py,
      paddingHorizontal: tokens.px,
    },
  });
