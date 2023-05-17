import { useContext } from "react";
import useSWR from "swr";

import { Queries } from "./schema";

import { ConfigContext } from "../components/context/ConfigContext";

export function useQuery<T extends keyof Queries>(key: T) {
  const { apiUrl } = useContext(ConfigContext);
  const endpoint = `${apiUrl}${key}`;
  const fetcher = (): Promise<Queries[T]["returns"]> =>
    fetch(endpoint).then((res) => res.json());

  return useSWR(key, fetcher);
}
