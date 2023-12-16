import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { Pressable, View, Switch } from "react-native";
import { Text } from "../lib/Text";

import { Button } from "../lib/Button";

import { useOrganisation, useSignIn } from "../../auth";
import { useEffect } from "react";
import { Input } from "../lib/Input";
import { useTheme } from "../context/ThemeContext";
import { useMutation } from "../../utils/useMutation";
import { Channel } from "db";
import { useQuery } from "../../utils/useQuery";
import { useSocket } from "../context/SocketContext";

interface CreateChannelFormProps {
  onSuccess: (channel: Channel) => void;
}

export const CreateChannel = (props: CreateChannelFormProps) => {
  const {
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      isPrivate: false,
    },
  });

  const { organisation } = useOrganisation();
  const { trigger, isMutating, error } = useMutation("createChannel");
  const { data, mutate } = useQuery("listChannels", {
    organisationId: organisation.id as any,
  });
  const { socket } = useSocket();

  const onSubmit = () => {
    trigger({
      name: watch("name"),
      kind: watch("isPrivate") ? "PRIVATE" : "PUBLIC",
      organisationId: organisation.id,
    }).then((res) => {
      if (res.success === true) {
        props.onSuccess(res.data);
        socket.emit("channel-created", res.data);
        mutate([...data, res.data]);
      }
    });
  };

  useEffect(() => {
    if (error?.info?.title === "VALIDATION_ERROR") {
      error.info.payload.issues.forEach((issue) => {
        setError(issue.path[0] as any, { message: issue.message });
      });
    }
  }, [error, setError]);

  const theme = useTheme();
  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              autoFocus={true}
              placeholder="Channel name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name?.message && <Text>{errors.name.message}</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Switch onValueChange={onChange} value={value}></Switch>
              <Text>Private</Text>
            </View>
          )}
          name="isPrivate"
        />
      </View>
      <View style={{ gap: 24 }}>
        <Button onPress={handleSubmit(onSubmit)}>Create</Button>
      </View>
    </View>
  );
};
