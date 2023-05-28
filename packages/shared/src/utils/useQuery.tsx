import useSWR, { SWRResponse } from "swr";

import { Queries, HandlerReturn, GenericError, Precedure } from "db";
import { useContext } from "react";
import { HttpContext } from "../components/context/HttpContext";
import { ConfigContext } from "../components/context/ConfigContext";

type InferPrecedureData<T> = T extends Precedure<infer R, any> ? R : never;

export function useQuery<T extends keyof Queries>(key: T) {
  const { apiUrl } = useContext(ConfigContext);
  const { http } = useContext(HttpContext);

  const fetcher = async (url: string) => {
    const { data, res } = await http({
      url: `${apiUrl}${url}`,
    });
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      (error as any).info = data.error;
      throw error;
    }
    type Data = HandlerReturn<InferPrecedureData<Queries[T]>>;
    const _data = data as Data;
    if (_data.success === false) {
      const error = new Error("An error occurred while fetching the data.");
      (error as any).info = _data.error;
      throw error;
    } else {
      return _data.data;
    }
  };
  return useSWR(key, fetcher) as unknown as SWRResponse<
    InferPrecedureData<Queries[T]>,
    { info: GenericError }
  >;
}
