"use client";

import { validateEmailApiv2 } from "@/src/api/services/auth/validate-email.service";
import { IValidateEmailResponse } from "@/src/interfaces/aurh";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const useValidateEmailMutationv2 = () => {
  const [data, setdata] = useState<IValidateEmailResponse>();
  const { push } = useRouter();
  const [errorModal, setErrorModal] = useState<Boolean>(false);
  const mutation = useMutation({
    mutationFn: validateEmailApiv2,
    onSuccess: (response: IValidateEmailResponse) => {
      setdata(response);
      push(`/auth/password/?email=${response.email}`);
    },
    onError: (error) => {
      console.log("ERROR IN MUTATE : ", error);
      setErrorModal(true);
    },
  });

  return {
    data,
    mutation,
    errorModal,
    setErrorModal,
  };
};
