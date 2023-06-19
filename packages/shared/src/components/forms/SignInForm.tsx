import { useForm, Controller } from "react-hook-form";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useSignIn } from "../../auth";
import { FormField } from "../lib/FormField";
import { useEffect, useState } from "react";

interface Props {
  onSuccess: (token: string) => void;
}

export const SignInForm = (props: Props) => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const { trigger, isMutating, error } = useSignIn();
  const onSubmit = () => {
    console.log("submit");
    trigger({
      email: watch("email"),
      password: watch("password"),
    }).then((res) => {
      if (res?.success === true) {
        props.onSuccess((res.data as any).token);
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
        setError(issue.path[0], { message: issue.message });
      });
    }
  }, [error, setError]);

  return (
    <View>
      <Text>{JSON.stringify(error)}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
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
          <TextInput
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
