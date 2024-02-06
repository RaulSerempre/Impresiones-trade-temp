import { validatePasswordApi } from "@/src/api/services/auth/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";


  
// export const useValidateEmailMutation = ( ) => {
//   const [data, setdata] = useState<IValidateEmailResponse>();
//   const { push } = useRouter();
//   const [errorModal, setErrorModal] = useState<Boolean>(false);
//   const mutation = useMutation({
//     mutationFn: validateEmailApi,
//     onSuccess: (response) => {
//       setdata(response);
//       push(`/auth/password/?email=${response.email}`);
//     },
//     onError: (error) => {
//       setErrorModal(true);
//       errorModal  && <ErrorModalLogin
//           displayCloseButton={true}
//           message={
//             "El correo digitado no tiene una cuenta vigente. Para ingresar, debe crear una cuenta."
//           } //{validateEmailMutation.data?.data.message}
//           onCloseEvent={() => {
//             setErrorModal(false);
//           }}
//         />
//     } 
//   });

//   return {
//     data,
//     mutation,
//   }
// };


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

