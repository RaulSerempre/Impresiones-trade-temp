"use client";
import {
  ButtonComponent,
  CheckboxComponent,
  InputComponent,
} from "@/src/components";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useValidateEmailMutation } from "@/src/hooks/api/auth/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IValidateEmailRequest,
  emailValidationSchema,
} from "@/src/lib/validations";
import { ErrorModalLogin } from "./error-modal";
import { authentication } from "@/src/api/actions/login";

const defaultValues: IValidateEmailRequest = {
  email: "",
  remember: false,
};

export const LoginFormComponent = () => {
  const [showErrorModal, setshowErrorModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IValidateEmailRequest>({
    mode: "onChange",
    defaultValues,
    resolver: zodResolver(emailValidationSchema),
  });

  const validateEmailMutation = useValidateEmailMutation();

  const onSubmit: SubmitHandler<IValidateEmailRequest> = async (
    data: IValidateEmailRequest
  ) => {
    // validateEmailMutation.mutate(data);
    console.log("Llegamos aqui");
    
  //  await  authentication(data)
  };

  const requestUserName = (formData: FormData) => {
    // authentication(formData)
    
  // setshowErrorModal(true)
  console.log("Correidno");
  
  }

  return (
    <>
      <form className="text-left" action={requestUserName} >
        <div className="flex flex-col mb-8">
          <InputComponent
            messageError={errors.email?.message}
            variant="underlined"
            value={'ricardo@gmail.com'}
            {...register("email")}
            name="email"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            label="Correo electrónico"
            placeholder="Correo electrónico"
          />
        </div>

        <div className="flex mb-8 px-3">
          <CheckboxComponent
            defaultChecked={false}
            {...register("remember")}
            name="remember"
            variant="square"
            label="Recordarme"
          />
        </div>
        <div className="w-full flex justify-center">
          <ButtonComponent
            type="submit"
            variant="solid"
            formNoValidate={true}
          >
            {validateEmailMutation.isPending ? "Cargando..." : "Ingresar"}
          </ButtonComponent>
        </div>
      </form>

      {showErrorModal && (
        <ErrorModalLogin
          displayCloseButton={true}
          message={"El correo digitado no tiene una cuenta vigente. Para ingresar, debe crear una cuenta."} //{validateEmailMutation.data?.data.message}
          onCloseEvent={() => {
            setshowErrorModal(false);
          }}
        />
      )}
    </>
  );
};
