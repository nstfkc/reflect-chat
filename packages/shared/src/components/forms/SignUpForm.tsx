import { useForm, Controller } from "react-hook-form";
import { View, Pressable } from "react-native";
import { Button } from "../lib/Button";

import { useSignIn, useSignUp } from "../../auth";
import { useEffect } from "react";
import { Input } from "../lib/Input";
import { Text } from "../lib/Text";

import { useTheme } from "../context/ThemeContext";

interface Props {
  onSignInPress: VoidFunction;
  onSuccess: (email: string) => void;
}

export const SignUpForm = (props: Props) => {
  const {
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const { trigger, isMutating, error } = useSignUp();
  const onSubmit = () => {
    console.log("submit");
    trigger({
      email: watch("email"),
      name: watch("username"),
      password: watch("password"),
    }).then((res) => {
      if (res.success === true) {
        props.onSuccess(res.data.user.email);
      }
    });
  };

  useEffect(() => {
    if (error?.info?.title === "INVALID_CREDENTIALS_ERROR") {
      setError("password", { message: "Invalid credentials" });
      setError("email", { message: "Invalid credentials" });
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
              autoFocus={true}
              placeholder="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />

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
        {errors.email && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Password"
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
      </View>
      <View style={{ gap: 24 }}>
        <Button disabled={isMutating} onPress={handleSubmit(onSubmit)}>
          Sign Up
        </Button>
        <Pressable
          onPress={props.onSignInPress}
          style={{
            backgroundColor: theme.colors.alt2,
            padding: 16,
            borderRadius: 8,
          }}
        >
          <Text>
            Have an account? Try{" "}
            <Text style={{ fontWeight: "600" }}>sign in</Text>.
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
