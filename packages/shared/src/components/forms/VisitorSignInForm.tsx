import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { Pressable, View } from "react-native";
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
  const [invalidCredentialsError, setInvalidCredentialsError] = useState("");

  const onSubmit = (values) => {
    trigger({
      email: values.email,
      name: values.name,
      text: values.text,
      channelId: values.channelId,
    }).then((res) => {
      if (res.success === true) {
        onSuccess(res.data.message.publicId);
      }
    });
  };

  useEffect(() => {
    if (error?.info?.title === "INVALID_CREDENTIALS_ERROR") {
      setInvalidCredentialsError("Invalid crendentials");
    }
    if (error?.info?.title === "VALIDATION_ERROR") {
      error.info.payload.issues.forEach((issue) => {
        setError(issue.path[0] as any, { message: issue.message });
      });
    }
  }, [error, setError]);

  return (
    <View style={{ gap: 16 }}>
      <Text style={{ fontWeight: "900", fontSize: 24 }}>Reflect</Text>
      <View style={{ gap: 8 }}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email?.message && <Text>{errors.email.message}</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
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
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Your message"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="text"
        />
      </View>
      <View style={{ gap: 24 }}>
        <Button disabled={isMutating} onPress={handleSubmit(onSubmit)}>
          Sign In
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
