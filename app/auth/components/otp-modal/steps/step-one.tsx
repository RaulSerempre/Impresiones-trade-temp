import { ButtonComponent, TitleComponent } from '@/src/components';
import { useSendOtp } from '@/src/hooks/api/auth/useSendOtp';
import React from 'react'

interface IProps {
  email: string
  changeStep: ()=>void
}

export const StepOneOtp = ({email, changeStep}: IProps) => {
  const { data, isLoading, isFetching } = useSendOtp(email);

  return (
    <div className="max-w-[328px] mx-auto">
      <TitleComponent title="Verificación de correo" className="mt-0 mb-2" />
      <div className="text-sm leading-4 font-normal">
        <p className="mb-6">
          Hemos enviado un código de verificación al correo
          <span className="font-bold"> {email}</span>
        </p>
        <p>
          Si no solicitaste generar una nueva contraseña, ignora este mensaje.
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <ButtonComponent disabled={isLoading || isFetching} variant="solid" onClick={changeStep}>
          {"Aceptar"}
        </ButtonComponent>
      </div>
    </div>
  );
}
