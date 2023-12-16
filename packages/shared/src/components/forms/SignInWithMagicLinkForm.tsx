import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { Pressable, View } from "react-native";
import { Text } from "../lib/Text";

import { Button } from "../lib/Button";

import { useSignIn } from "../../auth";
import { useEffect } from "react";
import { Input } from "../lib/Input";
import { useTheme } from "../context/ThemeContext";

interface SignInWithMagicLinkProps {
  onSuccess: VoidFunction;
  email?: string;
}

export const SignInWithMagicLink = (props: SignInWithMagicLinkProps) => {
  const {
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: props.email ?? "",
      password: "",
    },
  });

  const { trigger, isMutating, error } = useSignIn();
  const [invalidCredentialsError, setInvalidCredentialsError] = useState("");
  const onSubmit = () => {
    trigger({
      email: watch("email"),
      password: watch("password"),
    }).then((res) => {
      if (res.success === true) {
        props.onSuccess();
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

  const theme = useTheme();
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
              autoFocus={!props.email}
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
              autoFocus={!!props.email}
              placeholder="Password"
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password?.message && <Text>{errors.password.message}</Text>}
      </View>
      <View style={{ gap: 24 }}>
        <Button disabled={isMutating} onPress={handleSubmit(onSubmit)}>
          Sign In
        </Button>
        {invalidCredentialsError.length ? (
          <Text>{invalidCredentialsError}</Text>
        ) : null}
        <Pressable
          onPress={props.onSignUpPress}
          style={{
            backgroundColor: theme.colors.alt2,
            padding: 16,
            borderRadius: 8,
          }}
        >
          <Text>
            Don&apos;t have an account? Try{" "}
            <Text style={{ fontWeight: "600" }}>sign up</Text>.
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
