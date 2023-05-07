"use client";

import { SWRConfig } from "swr";
import { ReactNode } from "react";

interface SWRProviderProps {
  children: ReactNode;
}

export const SWRProvider = (props: SWRProviderProps) => {
  const { children } = props;

  return (
    <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
  );
};
