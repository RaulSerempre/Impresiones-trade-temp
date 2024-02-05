import { validateEmailApi, validatePasswordApi } from "@/src/api/services/auth/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";


  
export const useValidateEmailMutation = ( onErrorFn?: ()=>void) => {
  
  const { push } = useRouter();
  const mutation = useMutation({
    mutationFn: validateEmailApi,
    onSuccess: () => {
      // push('/auth/password')
    },
    onError: (error:any) => {
      console.log("ERROR : ", JSON.stringify(error));
    } 
  });

  return mutation;
};


export const useValidatePasswordMutation = (onSuccessFn?: ()=>void, onErrorFn?: ()=>void) => {
  const { push } = useRouter();
  const mutation = useMutation({
    mutationFn: validatePasswordApi,
    onSuccess: () => {
      push('/trade/tutorial')
    },
    onError: () => {
      onErrorFn && onErrorFn()
    } 
  });

  return mutation;
};