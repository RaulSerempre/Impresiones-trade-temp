"use client";

import { createPasswordService } from "@/src/api/services/auth/create-password.service";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";

export const useCreatePassword = () => {
  const [successModal, setsuccessModal] = useState<boolean>(false)

  const mutation = useMutation({
    mutationFn: createPasswordService,
    onSuccess: () => {
      setsuccessModal(true)
    },
    onError: (error: AxiosError) => {
      console.log("Error  usecreatepassword: ", error);
    },
  });

  return {
    mutation,
    successModal,
    setsuccessModal
  };
};
