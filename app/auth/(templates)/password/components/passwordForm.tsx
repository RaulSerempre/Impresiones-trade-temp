"use client";
import { ButtonComponent, InputComponent } from "@/src/components";
import React, { useState } from "react";
import { ModalComponent } from "@/src/components/modal-component/modal.component";
// import { TbAlertCircleFilled } from "react-icons/tb";
import { SubmitHandler, useForm } from "react-hook-form";
import { OtpModal } from "./otpModal";
import { useValidatePasswordMutation } from "@/src/hooks/api";
import {
  IValidatePasswordRequest,
  passwordFormValidation,
} from "@/src/lib/validations/password-form.validation";
import { zodResolver } from "@hookform/resolvers/zod";

const defaultValue: IValidatePasswordRequest = {
  password: "",
};

export const PasswordFormComponent = () => {
  const [showModal, setshowModal] = useState(false);
  const [otpModal, setotpModal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<IValidatePasswordRequest>({
    mode: "onChange",
    defaultValues: defaultValue,
    resolver: zodResolver(passwordFormValidation),
  });

  const validatePasswordMutation = useValidatePasswordMutation(() => {
    setshowModal(true);
  });

  const onSubmit: SubmitHandler<IValidatePasswordRequest> = (
    data: IValidatePasswordRequest
  ) => {
    validatePasswordMutation.mutate(data);
  };

  return (
    <>
      <form className="text-left" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <InputComponent
            {...register("password")}
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
            disabled={validatePasswordMutation.isPending}
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
            onClick={() => setotpModal(true)}
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
