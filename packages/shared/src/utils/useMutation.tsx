import useSWRMutation from "swr/mutation";
import { useContext } from "react";
import type { Mutations } from "db";

import { ConfigContext } from "../components/context/ConfigContext";
import { HttpContext } from "../components/context/HttpContext";

type UnwrapPromise<T> = T extends Promise<infer R> ? R : never;

export function useMutation<T extends keyof Mutations>(key: T) {
  const { apiUrl } = useContext(ConfigContext);
  const { http } = useContext(HttpContext);

  const endpoint = `${apiUrl}${key}`;

  const fetcher = async (
    url: string,
    {
      arg,
    }: {
      arg: Parameters<Mutations[T]["handler"]>[0];
    }
  ) => {
    const { data, res } = await http({
      url: `${apiUrl}${url}`,
      data: arg,
    });
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      (error as any).info = data;
      (error as any).status = res.status;
      throw error;
    }
    return data.data as UnwrapPromise<ReturnType<Mutations[T]["handler"]>>;
  };

  return useSWRMutation(endpoint, fetcher);
}
