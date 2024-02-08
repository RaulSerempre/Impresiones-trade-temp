import {
  ButtonComponent,
  SpinnerComponent,
  TitleComponent,
} from "@/src/components";
import { useValidateOtp } from "@/src/hooks/api/auth/useValidateOtp";
import React, { useRef, useEffect, useState } from "react";
import { TbAlertCircleFilled } from "react-icons/tb";

interface IProps {
  digits: number;
  email: string;
  closeModal: () => void;
  changeStep: () => void;
  openErrorModal: () => void;
}

const hidePartialEmail = (email: string) => {
  return `${email.charAt(0)}****@${email.split("@")[1]}`;
};

export const StepTwoOtp = ({
  digits,
  email,
  changeStep,
  openErrorModal,
  closeModal,
}: IProps) => {
  const { mutation, errorOtp } = useValidateOtp();
  const [otp, setOtp] = useState(new Array(digits).fill(""));
  const otpBoxReference = useRef<Array<HTMLInputElement>>([]);

  const hideEmail = hidePartialEmail(email);

  function handleChange(value: string, index: number) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < digits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  function handleBackspaceAndEnter(e: any, index: number) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < digits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  const apiValidateOtp = (email: string, otp: number) => {
    mutation.mutate({ email, otp });
  };

  useEffect(() => {
    if (otp.join("") !== "" && otp.join("").length >= digits) {
      // Consumir servicio de validacion
      const otpResult = otp.join("");
      apiValidateOtp(email, parseInt(otpResult));
    }
  }, [otp]);

  useEffect(() => {
    if (errorOtp === true) {
      openErrorModal();
      closeModal();
    }
  }, [errorOtp]);

  return (
    <div className="text-center">
      <TitleComponent title="Validación por código" />
      <p className="text-sm font-normal leading-4 mb-10 mt-10">
        Ingresa el código recibido en tu correo{" "}
        <span className="font-bold">{hideEmail}</span>
      </p>

      <div className="flex items-center gap-6 mx-auto">
        {otp.map((digit, index) => (
          <input
            key={index}
            value={digit}
            maxLength={1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e.target.value, index)
            }
            onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
            ref={(reference: HTMLInputElement) =>
              (otpBoxReference.current[index] = reference)
            }
            className={`border text-4xl  w-20 h-20  text-center font-bold rounded-lg block bg-[#C6C6C6] focus:border-2 focus:outline-none appearance-none`}
          />
        ))}
      </div>

      {mutation.isPending && (
        <div className="flex items-center justify-center text-utility-blue-link mt-2 gap-2 select-none">
          <SpinnerComponent className="text-utility-blue-link"></SpinnerComponent>
          Validando...
        </div>
      )}
      {mutation.error && (
        <div className="flex items-center justify-center text-form-error mt-2 gap-2 select-none">
          <TbAlertCircleFilled size={20} /> <span>Código incorrecto</span>
        </div>
      )}

      <div className="flex justify-center">
        <ButtonComponent
          variant="link"
          className="mt-10 py-0"
          onClick={changeStep}
        >
          {"Reenviar código"}
        </ButtonComponent>
      </div>

      <p className="mt-10 text-utility-black">
        Solicita nuevamente el código en 60 segundos
      </p>
    </div>
  );
};
