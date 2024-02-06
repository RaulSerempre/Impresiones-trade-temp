"use client";
import { ButtonComponent, InputComponent } from "@/src/components";
import React, { useEffect, useState } from "react";
import { ModalComponent } from "@/src/components/modal-component/modal.component";
import { SubmitHandler, useForm } from "react-hook-form";
import { OtpModal } from "./otpModal";
import { useValidatePasswordMutation } from "@/src/hooks/api";
import {
  IValidatePasswordRequest,
  passwordFormValidation,
} from "@/src/lib/validations/password-form.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { authentication } from "@/src/api/actions/login";
import { useFormState } from "react-dom";

const defaultValue: IValidatePasswordRequest = {
  email: "",
  password: "",
};

export const PasswordFormComponent = () => {
  // const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [showModal, setshowModal] = useState(false);
  const [otpModal, setotpModal] = useState(false);
  
  // const email = searchParams.get("email") || undefined;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<IValidatePasswordRequest>({
    mode: "onChange",
    // defaultValues: {...defaultValue , email: email},
    resolver: zodResolver(passwordFormValidation),
  });

  const [state, dispatch] = useFormState(authentication, undefined)
  
  // useEffect(() => {
  //   if (!email) replace("/auth/login");
  // }, []);


  const validatePasswordMutation = useValidatePasswordMutation();

  // const onSubmit: SubmitHandler<IValidatePasswordRequest> = (
  //   data: IValidatePasswordRequest
  // ) => {

    
  //   console.log("1111Llegamos a este punto : ", data);
    
  //   authentication(data)
  //   // try {
  //   //   const response = validatePasswordMutation.mutateAsync(data);
  //   // } catch (error) {
      
  //   // }
  // };

  // const requestUserName = (formData: FormData) => {
  //   console.log("2222Llegamos a este punto : ", formData);
  //   formData.append('email', email as string)
    
  //   authentication(formData)
  // }

  return (
    <>
     {/*onSubmit={handleSubmit(onSubmit)}  */}
      <form className="text-left" action={dispatch} >
        <div className="mb-6">
          <InputComponent
            {...register("password")}
            name="password"
            autoComplete={"on"}
            variant="underlined"
            type="password"
            label="Contraseña"
            placeholder="Escribe tu contraseña"
            messageError={errors.password?.message}
          />
        </div>
        <div className="w-full flex justify-center">
          <ButtonComponent
            type="submit"
            variant="solid"
            // disabled={validatePasswordMutation.isPending}
          >
            {validatePasswordMutation.isPending
              ? "Cargando..."
              : "Iniciar sesión"}
          </ButtonComponent>
        </div>
        <div className="w-full flex justify-center">
          <ButtonComponent
            variant="link"
            disabled={validatePasswordMutation.isPending}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setotpModal(true)}}
            className="mt-6"
          >
            {"Olvidé mi contraseña"}
          </ButtonComponent>
        </div>
      </form>
      {/* {console.log("DATA PASS: ", watch())} */}

      {/* Not fount user modal */}
      {showModal && (
        <ModalComponent
          // icon={<TbAlertCircleFilled />}
          colorIcon=""
          title={validatePasswordMutation.data?.data.title || ""}
          message={validatePasswordMutation.data?.data.message}
          onCloseEvent={() => {
            setshowModal(false);
          }}
        />
      )}

      {console.log( "WATCH : ", watch())}
      

      {/* recovery password */}
      {otpModal && (
        <OtpModal
          email="p****@gmai.com"
          onCloseEvent={() => {
            setotpModal(false);
          }}
        />
      )}
    </>
  );
};
