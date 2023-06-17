"use client";
import { ReactNode, createContext } from "react";

export interface HttpParams {
  url: string;
  data?: Record<string, string | number | boolean>;
  method?: "GET" | "POST";
  headers?: Record<string, string>;
}

const http = async (params: HttpParams) => {
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

export type HTTPHandler = typeof http;

export const HttpContext = createContext({
  http,
});

interface HttpProviderProps {
  http: typeof http;
  children: ReactNode;
}

export const HttpProvider = (props: HttpProviderProps) => {
  return (
    <HttpContext.Provider value={{ http: props.http }}>
      {props.children}
    </HttpContext.Provider>
  );
};
