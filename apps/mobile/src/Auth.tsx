import { SignIn, SignUp } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

export const Auth = () => {
  const [signedUp, setSignedUp] = useState(false);
  useEffect(() => {
    if (window.location.href.includes("sign-in")) {
      setSignedUp(true);
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {signedUp ? (
        <SignIn signUpUrl="/sign-up" />
      ) : (
        <SignUp
          appearance={{ elements: { socialButtons: false } }}
          signInUrl="/sign-in"
        />
      )}
    </div>
  );
};
