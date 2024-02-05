import { ButtonComponent, TitleComponent } from "@/src/components";
import { ModalComponent } from "@/src/components/modal-component/modal.component";
import React, { useRef, useState } from "react";

interface IProps {
  email: string;
  onCloseEvent: () => void;
}

export const OtpModal = ({ email, onCloseEvent }: IProps) => {
  const [step, setstep] = useState(1);

  const [password, setPassword] = useState<number[]>(Array(4).fill(-1));
  const inpRefs = useRef(null);
  const [activeInput, setActiveInput] = useState(-1);

  const handleKeyDown = (e: any, i: number) => {
    if (e.key == "Backspace") {
      let pass = password;
      pass[i] = -1;
      setPassword(pass);
      setActiveInput(i - 1);
      if (i != 0) {
        let nextInput = inpRefs?.current?.[i - 1];
        //@ts-ignore
        nextInput?.focus();
      } else {
        //@ts-ignore
        inpRefs?.current?.[i].blur();
      }
    }
  };
  const handleChange = (e: any, i: number) => {
    // @ts-ignore
    let v = e.nativeEvent["data"];
    let pass = password;
    let value = parseInt(v);
    if (!isNaN(value)) {
      pass[i] = value;
      setPassword(pass);
      setActiveInput(i + 1);
      // Once the input finishes it focuses button which is the next element in the form
      let nextInput = inpRefs?.current?.[i + 1];
      //@ts-ignore
      nextInput?.focus();
    }
  };

  const handleSumit = () => {
    console.log("Pres button");
  };

  /** STEP 1:  Email verification flow */
  const emailVerification = () => {
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
          <ButtonComponent variant="solid" onClick={sendEmail}>
            {"Aceptar"}
          </ButtonComponent>
        </div>
      </div>
    );
  };

  const sendEmail = () => {
    // Consume api
    //Change to step 2
    setstep(2);
  };

  /** STEP 2: Code validation */
  const codeValidation = () => {
    return (
      <div className="text-center">
        <TitleComponent title="Validación por código" />
        <p className="text-sm font-normal leading-4 mb-10 mt-10">
          Ingresa el código recibido en tu correo{" "}
          <span className="font-bold">{email}</span>
        </p>

        <form onSubmit={handleSumit} ref={inpRefs}>
          <div className="flex gap-6 justify-center">
            {password.map((digit, i) => (
              <div
                key={i}
                className="w-20 h-20 relative rounded-lg overflow-hidden"
              >
                <label
                  htmlFor={`pin_${i}`}
                  className={`absolute flex justify-center items-center text-2xl top-0 left-0 w-full h-full ${
                    activeInput == i ? "bg-gray-300" : "bg-[#C6C6C6]"
                  }`}
                >
                  {digit !== -1 ? digit : ""}
                </label>
                <input
                  onFocus={() => setActiveInput(i)}
                  onBlur={() => setActiveInput(-1)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  onChange={(e) => handleChange(e, i)}
                  className="w-20 h-20 text-center border-none outline-none rounded-lg "
                  id={`pin_${i}`}
                  type="password"
                  value={digit !== -1 ? digit : ""}
                ></input>
              </div>
            ))}
          </div>
        </form>

        <div className="flex justify-center">
          <ButtonComponent variant="link" className="mt-10 py-0">
            {"Reenviar código"}
          </ButtonComponent>
        </div>

        <p className="mt-10 text-utility-black">
          Solicita nuevamente el código en 60 segundos
        </p>
      </div>
    );
  };

  return (
    <ModalComponent
      // size={step == 1 ? "md" : "lg"}
      displayCloseButton={false}
      // bordered={false}
      onCloseEvent={() => onCloseEvent()}
    >
      {step === 1 ? emailVerification() : codeValidation()}
    </ModalComponent>
  );
};
