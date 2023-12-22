import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { Pressable, View, TextInput } from "react-native";
import { Text } from "../lib/Text";

import { Button } from "../lib/Button";

import { useSignIn, useSignInWithInvitation } from "../../auth";
import { useEffect } from "react";
import { Input } from "../lib/Input";
import { useTheme } from "../context/ThemeContext";
import { useQuery } from "../../utils/useQuery";
import { useMutation } from "../../utils/useMutation";
import { useVisitorSignIn } from "../../auth/useLogin";
import { Message } from "db";

const Form = (props: {
  data: { channelId: string };
  onSuccess: (messageId: string) => void;
}) => {
  const { data, onSuccess } = props;
  const {
    control,
    handleSubmit,
    setError,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      text: "",
      channelId: data?.channelId,
    },
  });

  const { trigger, isMutating, error } = useVisitorSignIn();

  const onSubmit = () => {
    const values = getValues();
    trigger({
      email: values.email,
      name: values.name,
      text: values.text,
      channelId: values.channelId,
    }).then((res) => {
      if (res.success === true) {
        onSuccess(res.data.message.publicId);
      } else {
        if (res.error?.info?.title === "VALIDATION_ERROR") {
          res.error.info.payload.issues.forEach((issue) => {
            setError(issue.path[0] as any, { message: issue.message });
          });
        }
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

  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value }, fieldState }) => {
            const showError = fieldState.error;
            return (
              <View>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 14,
                    color: showError ? "red" : "default",
                  }}
                >
                  {showError ? fieldState.error?.message ?? "Email" : "Email"}
                </Text>
                <Input
                  style={{
                    borderWidth: 2,
                    borderColor: showError ? "red" : "transparent",
                  }}
                  placeholder="Your email address"
                  onBlur={onBlur}
                  onChangeText={(event) => {
                    onChange(event);
                    clearErrors("email");
                  }}
                  value={value}
                />
              </View>
            );
          }}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value }, fieldState }) => {
            const showError = fieldState.error;
            return (
              <View>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 14,
                    color: showError ? "red" : "default",
                  }}
                >
                  {showError ? fieldState.error?.message ?? "Name" : "Name"}
                </Text>
                <Input
                  style={{
                    borderWidth: 2,
                    borderColor: showError ? "red" : "transparent",
                  }}
                  placeholder="Your Name"
                  onBlur={onBlur}
                  onChangeText={(event) => {
                    onChange(event);
                    clearErrors("name");
                  }}
                  value={value}
                />
              </View>
            );
          }}
          name="name"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value }, fieldState }) => {
            const showError = fieldState.error;
            return (
              <View>
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 14,
                    color: showError ? "red" : "default",
                  }}
                >
                  {showError
                    ? fieldState.error?.message ?? "Your Message"
                    : "Your Message"}
                </Text>
                <TextInput
                  multiline
                  rows="4"
                  style={{
                    fontSize: 16,
                    backgroundColor: "rgba(0,0,0,0.05)",
                    paddingHorizontal: 8,
                    paddingVertical: 12,
                    borderRadius: 6,
                    borderWidth: 2,
                    borderColor: showError ? "red" : "transparent",
                  }}
                  onChangeText={(event) => {
                    onChange(event);
                    clearErrors("text");
                  }}
                  value={value}
                />
              </View>
            );
          }}
          name="text"
        />
      </View>
      <View style={{ gap: 24 }}>
        <Button disabled={isMutating} onPress={onSubmit}>
          Send
        </Button>
      </View>
    </View>
  );
};

interface VisitorSignInFormProps {
  onSuccess: (messagePublicId: string) => void;
  channelId: string;
}

export const VisitorSignInForm = (props: VisitorSignInFormProps) => {
  return (
    <Form data={{ channelId: props.channelId }} onSuccess={props.onSuccess} />
  );
};
