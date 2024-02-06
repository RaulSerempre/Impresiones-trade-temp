"use client";
import { ButtonComponent, InputComponent } from "@/src/components";
import { ModalComponent } from "@/src/components/modal-component/modal.component";
import { useCreateNewPassword } from "@/src/hooks/api";
import {
  INewPasswordRequest,
  newPasswordFormSchema,
} from "@/src/lib/validations/new-password-form.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
// import { TbCircleCheckFilled } from "react-icons/tb";

const defaultValue: INewPasswordRequest = {
  password: "",
  confirmPassword: "",
};

export const NewPasswordForm = () => {
  const [showModal, setshowModal] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<INewPasswordRequest>({
    defaultValues: defaultValue,
    resolver: zodResolver(newPasswordFormSchema),
    mode: 'onChange'
  });

  // console.log("ERRORS: ", errors)

  const createNewPasswordMutation = useCreateNewPassword(() => {
    setshowModal(true);
  });

  const onSubmit: SubmitHandler<INewPasswordRequest> = (
    data: INewPasswordRequest
  ) => {};
  return (
    <>
      <form className="text-left" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6 mb-6">
          <div className="">
            <InputComponent
              {...register("password")}
              variant="underlined"
              type="text"
              label="Nueva contraseña"
              placeholder="Escribe tu contraseña"
              messageError={errors.password?.message}
            />
          </div>
          <div>
            <InputComponent
              {...register("confirmPassword")}
              variant="underlined"
              type="text"
              label="Confirma tu contraseña"
              placeholder="Escribe tu contraseña"
              messageError={errors.confirmPassword?.message}
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <ButtonComponent
            type="submit"
            variant="solid"
            disabled={createNewPasswordMutation.isPending}
          >
            {createNewPasswordMutation.isPending ? "Cargando..." : "Guardar"}
          </ButtonComponent>
        </div>
      </form>
      {/* {
        console.log("WATCH FORM : ", watch())
        
      } */}

      {showModal ? (
        <ModalComponent
          // icon={<TbCircleCheckFilled />}
          displayCloseButton={false}
          colorIcon="text-icon-success"
          onCloseEvent={() => {
            setshowModal(false);
          }}
        >
          <div className="text-center mt-2">
            <h4 className="mb-6 text-[#232E33] font-black text-[32px] leading-[38px]">
              ¡Tu nueva contraseña ha sido creada con éxito!
            </h4>

            <ButtonComponent
              variant="solid"
              href="login"
              className="inline-block"
            >
              {"Iniciar sesión"}
            </ButtonComponent>
          </div>
        </ModalComponent>
      ) : null}
    </>
  );
};
