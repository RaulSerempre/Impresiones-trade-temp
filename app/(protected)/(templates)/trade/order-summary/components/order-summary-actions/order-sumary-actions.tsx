"use client";
import { ButtonComponent, ModalComponent } from "@/src/components";
import React, { useState } from "react";
import { ImArrowLeft2 } from "react-icons/im";
import { TbAlertCircleFilled, TbCircleCheckFilled } from "react-icons/tb";

const BackModal = (onCloseEvent: () => void) => {
  return (
    <ModalComponent
      onCloseEvent={onCloseEvent}
      icon={<TbAlertCircleFilled />}
      colorIcon="text-icon-danger"
      message="¿Estás seguro que deseas abandonar tu pedido?"
      displayCloseButton={false}
    >
      <div className="flex gap-2 justify-center items-center mt-6">
        <ButtonComponent variant="bordered" href="/trade/select-product">
          Abandonar
        </ButtonComponent>
        <ButtonComponent onPress={onCloseEvent} variant="solid">
          Continuar
        </ButtonComponent>
      </div>
    </ModalComponent>
  );
};

const SuccessModal = (onCloseEvent: () => void) => {
  return (
    <ModalComponent
      isDismissable={false}
      onCloseEvent={onCloseEvent}
      title="Pedido realizado con Éxito"
      icon={<TbCircleCheckFilled/>}
      displayCloseButton={false}
      colorIcon="text-icon-success"
      size="sm"
    >
      <div className="flex gap-2 justify-center items-center mt-6">
        <ButtonComponent variant="solid" href="/trade/select-sag">
          Ir al inicio
        </ButtonComponent>
      </div>
    </ModalComponent>
  );
};

export const OrderSummaryActions = () => {
  const [showBackModal, setshowBackModal] = useState(false);
  const [showSuccesModal, setshowSuccesModal] = useState(false);

  return (
    <>
      <div className="flex justify-center gap-4 items-center mt-10">
        <ButtonComponent
          variant="bordered"
          onPress={() => setshowBackModal(true)}
        >
          {<ImArrowLeft2 size={20} className="text-utility-blue" />} {"Volver"}
        </ButtonComponent>

        <ButtonComponent
          variant="solid"
          onPress={() => setshowSuccesModal(true)}
        >
          Generar Pedido
        </ButtonComponent>
      </div>

      {showBackModal && BackModal(() => setshowBackModal(false))}
      {/* Display if send data to back successfull */}
      {showSuccesModal && SuccessModal(() => setshowSuccesModal(false))} 
    </>
  );
};
