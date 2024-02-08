"use client";
import { ButtonComponent, InputComponent } from "@/src/components";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  IValidatePasswordRequest,
  passwordFormValidation,
} from "@/src/lib/validations/password-form.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { ErrorModalAuth, OtpModal } from "@/app/auth/components";
import { useSignInMutation } from "@/src/hooks/api/auth/useSignIn";

const defaultValue: IValidatePasswordRequest = {
  identifier: "",
  password: "",
};

export const PasswordFormComponent = () => {
  const searchParams = useSearchParams();

  const [otpModal, setotpModal] = useState(false);

  const [errorMessage, seterrorMessage] = useState<string>();

  const { mutation } = useSignInMutation(seterrorMessage);

  const email = searchParams.get("email") || "";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<IValidatePasswordRequest>({
    mode: "onChange",
    defaultValues: { ...defaultValue, identifier: email },
    resolver: zodResolver(passwordFormValidation),
  });

  const onSubmit: SubmitHandler<IValidatePasswordRequest> = (
    data: IValidatePasswordRequest
  ) => {
    const payload = { ...data, identifier: email };
    mutation.mutate(payload);
  };

  return (
    <>
      {/*onSubmit={handleSubmit(onSubmit)}  */}
      <form className="text-left" onSubmit={handleSubmit(onSubmit)}>
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
            {mutation.isPending ? "Cargando..." : "Iniciar sesión"}
          </ButtonComponent>
        </div>
        <div className="w-full flex justify-center">
          <ButtonComponent
            variant="link"
            disabled={mutation.isPending}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setotpModal(true);
            }}
            className="mt-6"
          >
            {"Olvidé mi contraseña"}
          </ButtonComponent>
        </div>
      </form>

      {errorMessage && (
        <ErrorModalAuth
          displayCloseButton={true}
          message={errorMessage}
          onCloseEvent={() => {
            seterrorMessage(undefined);
          }}
        />
      )}
      {otpModal && (
        <OtpModal
          email={email}
          onCloseEvent={() => setotpModal(false)}
          openErrorModal={() => {
            seterrorMessage("El código no coincide");
          }}
        />
      )}
    </>
  );
};
