"use client";
import { useForm } from "react-hook-form";
import { useSignIn } from "auth";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const signIn = useSignIn();
  const onSubmit = () => {
    signIn({
      email: watch("email"),
      password: watch("password"),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Email</label>
          <input
            defaultValue="enesxtufekci+2@gmail.com"
            {...register("email")}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            defaultValue="Gradestr.32"
            type="password"
            {...register("password")}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
