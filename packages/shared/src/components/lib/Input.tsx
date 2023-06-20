import { TextInput, TextInputProps } from "react-native";

export const Input = (props: TextInputProps) => {
  const {} = props;
  return (
    <TextInput
      {...props}
      style={{
        fontSize: 16,
        backgroundColor: "rgba(0,0,0,0.05)",
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 6,
      }}
      placeholderTextColor="gray"
    />
  );
};
