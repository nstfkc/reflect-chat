import { useForm } from "react-hook-form";
import { useSignIn } from "../../auth";
import { FormField } from "../lib/FormField";
import { Button } from "../lib/Button";
import { useEffect, useState } from "react";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const { trigger, isMutating, error } = useSignIn();
  const onSubmit = () => {
    trigger({
      email: watch("email"),
      password: watch("password"),
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <FormField
        label="Email"
        id="email"
        type="email"
        {...register("email")}
        error={errors?.["email"]?.message as any}
      />

      <FormField
        label="Password"
        id="password"
        type="password"
        error={errors?.["password"]?.message as any}
        {...register("password")}
      />
      <div>
        <Button type="submit" disabled={isMutating}>
          Submit
        </Button>
      </div>
    </form>
  );
};
