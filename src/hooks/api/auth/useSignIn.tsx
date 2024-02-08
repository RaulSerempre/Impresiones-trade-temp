"use client";

import { signInAction } from "@/src/api/actions/signin.action";
import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

export const useSignInMutation = (
  seterrorMessage: Dispatch<SetStateAction<string | undefined>>
) => {
  const [openOtpModal, setopenOtpModal] = useState<Boolean>(false);
  const { replace } = useRouter();

  const mutation = useMutation({
    mutationFn: signInAction,
    onSuccess: (response) => {
      // Redireccionar al inicio
      response === "success" && replace("/trade/tutorial");
    },
    onError: (error) => {
      seterrorMessage("Correo o contraseña invalidos");
    },
  });

  return {
    mutation,
    openOtpModal,
    setopenOtpModal,
  };
};
