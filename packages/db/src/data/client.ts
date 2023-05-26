import useSWR from "swr";

import useSWRMutation from "swr/mutation";
import { Mutations } from "./endpoints";

export function useMutation<T extends keyof Mutations>(key: T) {
  const apiUrl = "";
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

const useChannnelMut = () => {
  const { data, trigger } = useMutation("/channel/create");
  if (data.success === false) {
    if (data.error.title === "VALIDATION_ERROR") {
      data.error.payload.issues.map((issue) => {
        issue.path;
      });
    }
  }
};
