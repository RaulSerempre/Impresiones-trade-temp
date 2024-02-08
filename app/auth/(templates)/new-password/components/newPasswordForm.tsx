"use client";
import { ButtonComponent, InputComponent } from "@/src/components";
import { ModalComponent } from "@/src/components/modal-component/modal.component";
import { useCreatePassword } from "@/src/hooks/api/auth/useCreatePassword";
import { ICreatePasswordResponse } from "@/src/interfaces/auth/create-password.interface";
import {
  ICreatePasswordForm,
  newPasswordFormSchema,
} from "@/src/lib/validations/new-password-form.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { TbCircleCheckFilled } from "react-icons/tb";

const defaultValue: ICreatePasswordForm = {
  password: "",
  passwordConfirmation: "",
};

export const NewPasswordForm = () => {
  
  const searchParams = useSearchParams();
  const {replace} = useRouter()
  const {mutation , successModal, setsuccessModal} = useCreatePassword()
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<ICreatePasswordForm>({
    defaultValues: defaultValue,
    resolver: zodResolver(newPasswordFormSchema),
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<ICreatePasswordForm> = (
    data: ICreatePasswordForm
  ) => {
    const email = searchParams.get('email') || '';
    const otp = searchParams.get('otp') || '';
    const payload: ICreatePasswordResponse = {...data, email: email, otp}
    mutation.mutate(payload)
  };

  const redirectToLogin = () => {
    setsuccessModal(false);
    replace('/auth/login');
  }


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
              {...register("passwordConfirmation")}
              variant="underlined"
              type="text"
              label="Confirma tu contraseña"
              placeholder="Escribe tu contraseña"
              messageError={errors.passwordConfirmation?.message}
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <ButtonComponent
            type="submit"
            variant="solid"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Cargando..." : "Guardar"}
          </ButtonComponent>
        </div>
      </form>
      
      {successModal ? (
        <ModalComponent
          icon={<TbCircleCheckFilled size={75} className="mx-auto" />}
          displayCloseButton={false}
          colorIcon="text-icon-success"
          onCloseEvent={redirectToLogin}
        >
          <div className="text-center mt-2">
            <h4 className="mb-6 text-[#232E33] font-black text-[32px] leading-[38px]">
              ¡Tu nueva contraseña ha sido creada con éxito!
            </h4>

            <ButtonComponent
              variant="solid"
              className="inline-block"
              onClick={redirectToLogin}
            >
              {"Iniciar sesión"}
            </ButtonComponent>
          </div>
        </ModalComponent>
      ) : null}
    </>
  );
};
