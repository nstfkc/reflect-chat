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

interface SignInWithMagicLinkProps {
  onSuccess: VoidFunction;
  token: string;
}

const Form = (props: {
  data: { channelId: string; email: string; name: string };
  onSuccess: VoidFunction;
}) => {
  const { data, onSuccess } = props;
  console.log(data);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: data?.email,
      name: data?.name,
      channelId: data?.channelId,
      pin: "",
    },
  });

  const { trigger, isMutating, error } = useSignInWithInvitation();
  const [invalidCredentialsError, setInvalidCredentialsError] = useState("");

  const onSubmit = (values) => {
    trigger({
      email: values.email,
      pin: values.pin,
      channelId: Number(values.channelId),
    }).then((res) => {
      if (res.success === true) {
        onSuccess();
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
              autoFocus={true}
              placeholder="PIN"
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="pin"
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

export const SignInWithMagicLinkForm = (props: SignInWithMagicLinkProps) => {
  const { token } = props;

  const { data } = useQuery("getChannelInvitation", {
    token,
  });

  if (!data) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return <Form data={data} onSuccess={props.onSuccess} />;
};
