import { useForm } from "react-hook-form";
import { useSignIn } from "../../auth";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { trigger, isMutating } = useSignIn();
  const onSubmit = () => {
    trigger({
      email: watch("email"),
      password: watch("password"),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Email</label>
          <input defaultValue="enesxtufekci@gmail.com" {...register("email")} />
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
          <button className="bg-black text-white" type="submit">
            submit {isMutating ? "..." : ""}
          </button>
        </div>
      </form>
    </div>
  );
};
