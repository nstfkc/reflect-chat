import { useNavigate, useSearchParams } from "react-router-dom";

import { SignInForm, useTheme } from "shared";

export const SignInScreen = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  return (
    <div
      style={{ backgroundColor: theme.colors.primary }}
      className="flex w-full h-screen justify-center items-center"
    >
      <div className="w-[340px] max-w-md p-4">
        <SignInForm
          email={params.get("email") ?? ""}
          onSuccess={() => navigate(`${params.get("callback") ?? "/"}`)}
          onSignUpPress={() => navigate("/sign-up")}
        />
      </div>
    </div>
  );
};
