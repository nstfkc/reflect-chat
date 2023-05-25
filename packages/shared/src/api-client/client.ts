import type { Queries } from "./endpoints";
import useSWR from "swr";

function useQuery<T extends keyof Queries>(
  url: T,
  args: Parameters<Queries[T]["handler"]>[0]
) {
  const fetcher = () => {
    return fetch(url).then((res) => res.json()) as ReturnType<
      Queries[T]["handler"]
    >;
  };
  return useSWR(url, fetcher);
}

function useChannel() {
  const { data, error } = useQuery("/channel/create", {
    kind: "PRIVATE",
    name: "Hi",
  });

  if (data.success) {
  } else if (data.success === false) {
    data.error;
  }
}
