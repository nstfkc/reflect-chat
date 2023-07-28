import { useNavigate } from "react-router-dom";

import { useTheme, SignUpForm } from "shared";

export const SignUpScreen = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundColor: theme.colors.primary }}
      className="flex w-full h-screen justify-center items-center"
    >
      <div className="w-[340px] max-w-md p-4">
        <SignUpForm
          onSuccess={(email) => navigate(`/sign-in?email=${email}`)}
          onSignInPress={() => navigate("/sign-in")}
        />
      </div>
    </div>
  );
};
