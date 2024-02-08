"use client";

import { validateEmailApiv2 } from "@/src/api/services/auth/validate-email.service";
import {
  IValidateEmailError,
  IValidateEmailResponse,
} from "@/src/interfaces/auth";
import { EEmailStatus } from "@/src/lib/constants/enum/check-email.enum";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

export const useValidateEmailMutationv2 = (
  seterrorMessage: Dispatch<SetStateAction<string | undefined>>
) => {
  const { push } = useRouter();
  const [openOtpModal, setopenOtpModal] = useState<Boolean>(false);

  const mutation = useMutation({
    mutationFn: validateEmailApiv2,
    onSuccess: (response: IValidateEmailResponse) => {
      if (response.status === 0 && response.blocked == true)
        return seterrorMessage(
          "El correo digitado no tiene una cuenta vigente. Para ingresar, debe crear una cuenta."
        );

      if (response.status === EEmailStatus.SUCCESS_WITH_PASSWORD) {
        return push(`/auth/password/?email=${response.email}`);
      }

      if (response.status === EEmailStatus.SUCCESS_WITHOUT_PASSWORD) {
        setopenOtpModal(true);
      }
    },
    onError: (error: AxiosError<IValidateEmailError>) => {
      if (axios.isAxiosError(error) && error.response?.data?.status) {
        /** Temporal  */
        if (error.response.data.status === EEmailStatus.ERROR_NOT_FOUNT)
          seterrorMessage(
            "El email digitado no tiene una cuenta vigente. Contáctenos al correo xxxxx@xxxx.com"
          );
      } else console.log("Error: ", error);
    },
  });

  return {
    mutation,
    openOtpModal,
    setopenOtpModal,
  };
};
