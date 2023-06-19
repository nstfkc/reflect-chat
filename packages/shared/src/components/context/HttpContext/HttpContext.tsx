"use client";
import { ReactNode, createContext, useCallback } from "react";

export interface HttpParams {
  url: string;
  data?: Record<string, string | number | boolean>;
  method?: "GET" | "POST";
  headers?: Record<string, string>;
}

const defaultHttp = async (params: HttpParams) => {
  const { data, headers = {}, method = "GET", url } = params;
  const res = await fetch(url, {
    method,
    ...(data ? { body: JSON.stringify(data) } : {}),
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });
  const _data = await res.json();

  return {
    data: _data,
    res: {
      ok: res.ok,
      status: res.status,
    },
  };
};

export type HTTPHandler = typeof defaultHttp;

export const HttpContext = createContext({
  http: defaultHttp,
});

interface HttpProviderProps {
  http: HTTPHandler | null;
  accessToken: string | null;
  children: ReactNode;
}

export const HttpProvider = (props: HttpProviderProps) => {
  const { children, accessToken, http = defaultHttp } = props;
  const httpHandler = useCallback(
    (params: HttpParams) => {
      const handler = http ?? defaultHttp;
      return handler({
        ...params,
        headers: {
          ...params.headers,
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
    [accessToken, http]
  );

  return (
    <HttpContext.Provider
      value={{
        http: httpHandler,
      }}
    >
      {children}
    </HttpContext.Provider>
  );
};
