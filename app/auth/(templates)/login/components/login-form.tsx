"use client";
import {
  ButtonComponent,
  CheckboxComponent,
  InputComponent,
  SpinnerComponent,
} from "@/src/components";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IValidateEmailRequest,
  emailValidationSchema,
} from "@/src/lib/validations";
import { useValidateEmailMutationv2 } from "@/src/hooks/api";
import { OtpModal } from "@/app/auth/components/otp-modal/otp-modal";
import { useState } from "react";
import { ErrorModalAuth } from "@/app/auth/components";

const defaultValues: IValidateEmailRequest = {
  email: "",
  remember: false,
};

export const LoginFormComponent = () => {
  const [errorMessage, seterrorMessage] = useState<string>();

  const { mutation, openOtpModal, setopenOtpModal } =
    useValidateEmailMutationv2(seterrorMessage);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<IValidateEmailRequest>({
    defaultValues,
    resolver: zodResolver(emailValidationSchema),
  });

  const onSubmit: SubmitHandler<IValidateEmailRequest> = async (
    data: IValidateEmailRequest
  ) => {
    mutation.mutate(data);
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
            name="remember"
            variant="square"
            label="Recordarme"
          />
        </div>
        <div className="w-full flex justify-center">
          <ButtonComponent
            disabled={!isDirty || !isValid}
            type="submit"
            variant="solid"
            formNoValidate={true}
          >
            {mutation.isPending ? <SpinnerComponent /> : "Ingresar"}
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
      {openOtpModal && (
        <OtpModal
          email={getValues("email")}
          onCloseEvent={() => setopenOtpModal(false)}
          openErrorModal={() => {
            seterrorMessage("El código no coincide");
          }}
        />
      )}
    </>
  );
};
