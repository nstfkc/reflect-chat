import useSWR from "swr";

import { Queries } from "db";
import { useContext } from "react";
import { HttpContext } from "../components/context/HttpContext";
import { ConfigContext } from "../components/context/ConfigContext";

type UnwrapPromise<T> = T extends Promise<infer R> ? R : never;

export function useQuery<T extends keyof Queries>(key: T) {
  const { apiUrl } = useContext(ConfigContext);
  const { http } = useContext(HttpContext);

  const fetcher = async (url: string) => {
    const { data, res } = await http({
      url: `${apiUrl}${url}`,
    });
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      (error as any).info = data;
      (error as any).status = res.status;
      throw error;
    }
    return data.data as UnwrapPromise<ReturnType<Queries[T]["handler"]>>;
  };
  return useSWR(key, fetcher);
}
