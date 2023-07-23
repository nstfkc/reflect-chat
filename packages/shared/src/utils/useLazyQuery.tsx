import { useSWRConfig } from "swr";

import {
  Queries,
  HandlerReturn,
  InferPrecedureData,
  InferPrecedureArgs,
} from "db";
import { useContext } from "react";
import { HttpContext } from "../components/context/HttpContext";
import { ConfigContext } from "../components/context/ConfigContext";

export function useLazyQuery<T extends keyof Queries>(key: T) {
  const { mutate } = useSWRConfig();
  const { apiUrl } = useContext(ConfigContext);
  const { http } = useContext(HttpContext);

  const fetcher = async (url: string) => {
    const { data, res } = await http({
      url: `${apiUrl}/${url}`,
    });
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      (error as any).info = typeof data.error === "string" ? data : data.error;
      throw error;
    }
    type Data = HandlerReturn<InferPrecedureData<Queries[T]>>;
    const _data = data as Data;
    if (_data.success === false) {
      const error = new Error("An error occurred while fetching the data.");
      (error as any).info = _data.error;
      throw error;
    } else {
      mutate(url, _data.data);
      return _data.data;
    }
  };

  return (args?: InferPrecedureArgs<Queries[T]>) => {
    const queryParams = new URLSearchParams({ ...args } as any);
    const queryString = queryParams.toString();
    const keyWithQueryString = queryString.length
      ? `${key}?${queryString}`
      : key;
    return fetcher(keyWithQueryString);
  };
}
