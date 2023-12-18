import { Input } from "../lib/Input";
import { Button } from "../lib/Button";
import { View } from "react-native";
import { useMutation } from "../../utils/useMutation";
import { Controller, useForm } from "react-hook-form";
import { Text } from "../lib/Text";
import { useState } from "react";

export const CreateChannelInvitation = (props: {
  channelId: number;
  onSuccess: VoidFunction;
}) => {
  const { trigger, isMutating } = useMutation("createChannelInvitation");
  const [token, setToken] = useState("");

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      name: "",
      pin: "",
    },
  });

  const onSubmit = (values) => {
    const { email, name, pin } = values;
    trigger({
      channelId: props.channelId,
      email,
      name,
      pin,
    }).then((res) => {
      if (res.success) {
        setToken(res.data.token);
      }
    });
  };

  if (token) {
    return (
      <View>
        <Text>{token}</Text>
      </View>
    );
  }

  return (
    <View style={{ gap: 8 }}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            autoFocus={true}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            autoFocus={true}
            placeholder="Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            autoFocus={true}
            placeholder="Pin"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="pin"
      />
      <Button disabled={isMutating} onPress={handleSubmit(onSubmit)}>
        Send
      </Button>
    </View>
  );
};
