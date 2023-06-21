import { SignInForm } from "../components/forms";

interface SignInScreenProps {}

export const SignInScreen = (props: SignInScreenProps) => {
  const {} = props;

  return (
    <div className="p-4">
      <SignInForm onSuccess={() => {}} />
    </div>
  );
};
