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

const defaultValue: IValidateEmailRequest = {
  email: "",
  remember: false,
};

export const LoginFormComponent = () => {
  const [showErrorModal, setshowErrorModal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<IValidateEmailRequest>({
    mode: "onChange",
    defaultValues: defaultValue,
    resolver: zodResolver(emailValidationSchema),
  });

  const validateEmailMutation = useValidateEmailMutation();

  const onSubmit: SubmitHandler<IValidateEmailRequest> = (
    data: IValidateEmailRequest
  ) => {
    validateEmailMutation.mutate(data);
  };

  return (
    <>
      <form className="text-left" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-8">
          <InputComponent
            messageError={errors.email?.message}
            variant="underlined"
            {...register("email")}
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
            variant="square"
            label="Recordarme"
          />
        </div>
        <div className="w-full flex justify-center">
          <ButtonComponent
            isDisabled={!isDirty || !isValid}
            type="submit"
            variant="solid"
            formNoValidate={true}
          >
            {validateEmailMutation.isPending ? "Cargando..." : "Ingresar"}
          </ButtonComponent>
        </div>
      </form>

      {/* {console.log("DATA TEMP : ", watch())} */}
      {/* {showErrorModal && (
        <ErrorModalLogin
          message={validateEmailMutation.data?.data.message}
          onCloseEvent={() => {
            setshowErrorModal(false);
          }}
        />
      )} */}
    </>
  );
};
