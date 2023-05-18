import { useContext } from "react";
import useSWR from "swr";

import { Queries } from "./schema";

import { ConfigContext } from "../components/context/ConfigContext";

export function useQuery<T extends keyof Queries>(
  key: T,
  args: Partial<Queries[T]["takes"]> = {}
) {
  const { apiUrl } = useContext(ConfigContext);
  const endpoint = `${apiUrl}${key}?args=${JSON.stringify(args)}`;
  const fetcher = (endpoint: string): Promise<Queries[T]["returns"]> =>
    fetch(endpoint).then((res) => res.json());

  return useSWR(endpoint, fetcher);
}
