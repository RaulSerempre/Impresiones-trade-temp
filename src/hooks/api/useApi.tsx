import {
  QueryFunction,
  useMutation,
  useQuery,
} from "@tanstack/react-query";

export function useReactQuery<T>(
  queryKey: string,
  callback: QueryFunction<T>,
  enabled: boolean = true
) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: callback,
    enabled,
  });
}