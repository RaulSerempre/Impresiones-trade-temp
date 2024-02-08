"use client";

import { validateOtpService } from "@/src/api/services/auth/validate-otp.service";
import { IValidateOtpResponse } from "@/src/interfaces/auth/validate-otp.interface";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const useValidateOtp = () => {
  const { push } = useRouter();
  const [errorOtp, seterrorOtp] = useState<boolean>(false)

  const mutation = useMutation({
    mutationFn: validateOtpService,
    onSuccess: (response: IValidateOtpResponse, variables) => {
      push(`/auth/new-password?otp=${variables.otp}&email=${variables.email}`)
    },
    onError: () => {
      seterrorOtp(true);
    },
  });

  return {
    mutation,
    errorOtp
  };
};
