import { TextInput, TextInputProps } from "react-native";

export const Input = (props: TextInputProps & { hasError?: boolean }) => {
  const { value = "", style = {}, ...rest } = props;
  return (
    <TextInput
      {...rest}
      value={value}
      style={{
        fontSize: 16,
        backgroundColor: "rgba(0,0,0,0.05)",
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 6,
        ...(style as any),
      }}
      placeholderTextColor="gray"
    />
  );
};
