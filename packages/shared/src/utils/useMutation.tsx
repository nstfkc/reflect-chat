import useSWRMutation, { SWRMutationResponse } from "swr/mutation";
import { useContext } from "react";
import type {
  GenericError,
  Mutations,
  InferPrecedureData,
  HandlerReturn,
  InferPrecedureArgs,
} from "db";

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
      (error as any).info = data.error;
      throw error;
    }
    const _data = data as UnwrapPromise<ReturnType<Mutations[T]["handler"]>>;
    if (_data.success === false) {
      const error = new Error("An error occurred while fetching the data.");
      (error as any).info = _data.error;
      throw error;
    }
    return _data;
  };

  return useSWRMutation(endpoint, fetcher) as unknown as SWRMutationResponse<
    HandlerReturn<InferPrecedureData<Mutations[T]>>,
    { info: GenericError } | undefined,
    InferPrecedureArgs<Mutations[T]>
  >;
}
