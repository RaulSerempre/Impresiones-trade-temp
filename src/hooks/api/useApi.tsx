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

export function useReactMutation<T, Y>(
  callback: (data: T) => Promise<Y>,
  onsuccess?: () => void,
  onerror?: () => void
) {
  const mutation = useMutation({
    mutationFn: callback,
    onSuccess: () => onsuccess && onsuccess(),
    onError: () => onerror && onerror(),
  });

  return mutation;
}
