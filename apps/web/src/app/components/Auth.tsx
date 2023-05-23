"use client";
import { ReactNode, useEffect, useState } from "react";
import {
  ClerkProvider,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/clerk-react";
import {} from "next/router";

interface AuthProps {
  children: ReactNode;
  publishableKey: string;
}

const Redirect = (props: { path: string }) => {
  const { path } = props;
  useEffect(() => {
    window.location.href = path;
  }, []);
  return null;
};

export const Auth = (props: AuthProps) => {
  const { children, publishableKey } = props;

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <div className="flex items-center justify-center h-screen">
          <Redirect path="/auth/sign-in" />
        </div>
      </SignedOut>
    </ClerkProvider>
  );
};
