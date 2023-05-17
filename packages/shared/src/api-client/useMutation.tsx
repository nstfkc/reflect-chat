import { useContext } from "react";
import useSWRMutation from "swr/mutation";

import { Mutations } from "./schema";
import { ConfigContext } from "../components/context/ConfigContext";

export function useMutation<T extends keyof Mutations>(key: T) {
  const { apiUrl } = useContext(ConfigContext);
  const endpoint = `${apiUrl}/${key}`;

  const fetcher = async (
    url: string,
    {
      arg,
    }: {
      arg: Mutations[T]["takes"];
    }
  ): Promise<Mutations[T]["returns"]> => {
    return await fetch(url, {
      method: "POST",
      body: JSON.stringify(arg),
    }).then((res) => res.json());
  };

  return useSWRMutation(endpoint, fetcher, {});
}
