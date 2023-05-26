import { useContext } from "react";
import useSWRMutation from "swr/mutation";

import { Mutations } from "db";
import { ConfigContext } from "../components/context/ConfigContext";

export function useMutation<T extends keyof Mutations>(key: T) {
  const { apiUrl } = useContext(ConfigContext);
  const endpoint = `${apiUrl}${key}`;

  const fetcher = async (
    url: string,
    {
      arg,
    }: {
      arg: Parameters<Mutations[T]["handler"]>[0];
    }
  ) => {
    return await fetch(url, {
      method: "POST",
      body: JSON.stringify(arg),
    }).then((res) => res.json() as ReturnType<Mutations[T]["handler"]>);
  };

  return useSWRMutation(endpoint, fetcher, {});
}
