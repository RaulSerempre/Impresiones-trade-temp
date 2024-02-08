import { ModalComponent } from "@/src/components/modal-component/modal.component";
import React, {  useState } from "react";
import { StepOneOtp } from "./steps/step-one";
import { StepTwoOtp } from "./steps/step-two";

interface IProps {
  email: string;
  onCloseEvent: () => void;
  openErrorModal: () => void;
}

export const OtpModal = ({ email, onCloseEvent, openErrorModal }: IProps) => {
  const [step, setstep] = useState<number>(1);

  const changeStep = (step: number) => {
    setstep(step);
  };

  return (
    <ModalComponent onCloseEvent={() => onCloseEvent()} size={step===2 ? 488 : undefined}>
      {step === 1 ? (
        <StepOneOtp email={email} changeStep={()=>{changeStep(2)}} />
      ) : (
        <StepTwoOtp email={email} digits={4} openErrorModal={openErrorModal} changeStep={()=>{changeStep(1)}} closeModal={onCloseEvent}/>
      )}
    </ModalComponent>
  );
};
