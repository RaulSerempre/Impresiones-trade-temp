import { createNewPasswordApi, validatePasswordApi } from "@/src/api/services/auth/auth.service";
import { useMutation } from "@tanstack/react-query";

export const useCreateNewPassword = (callbackSuccess: () => void) => {
  const mutation = useMutation({
    mutationFn: createNewPasswordApi,
    onSuccess: () => {
      callbackSuccess();
    },
  });

  return mutation;
};

