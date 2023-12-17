import { useNavigate, useSearchParams } from "react-router-dom";

import { useTheme } from "shared";
import { SignInWithMagicLinkForm } from "shared/src/components/forms/SignInWithMagicLinkForm";

export const SignInWithMagicLink = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  return (
    <div
      style={{ backgroundColor: theme.colors.primary }}
      className="flex w-full h-screen justify-center items-center"
    >
      <div className="w-[340px] max-w-md p-4">
        <SignInWithMagicLinkForm
          token={params.get("token") ?? ""}
          onSuccess={() => navigate(params.get("callback") ?? "/")}
        />
      </div>
    </div>
  );
};
