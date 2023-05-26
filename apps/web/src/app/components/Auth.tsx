"use client";
import { ReactNode } from "react";

import {} from "next/router";

interface AuthProps {
  children: ReactNode;
  publishableKey: string;
}

export const Auth = (props: AuthProps) => {
  const { children, publishableKey } = props;

  return <div>Auth</div>;
};
