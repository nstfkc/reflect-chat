"use client";
import { SignedIn, SignedOut } from "auth";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import {} from "next/router";

interface AuthProps {
  children: ReactNode;
}

const RedirectToSignIn = () => {
  const { push } = useRouter();
  useEffect(() => {
    push("/auth/sign-in");
  }, [push]);

  return <div></div>;
};

export const AuthGuard = (props: AuthProps) => {
  const { children } = props;

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};
