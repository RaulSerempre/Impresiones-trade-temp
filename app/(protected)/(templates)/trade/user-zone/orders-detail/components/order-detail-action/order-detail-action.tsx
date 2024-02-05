"use client";
import { ButtonComponent } from "@/src/components";
import React from "react";
import { ImArrowLeft2 } from "react-icons/im";

import { useRouter } from "next/navigation";

export const OrderDetailAction = () => {
  const { back } = useRouter();
  return (
    <ButtonComponent
      className="w-96"
      variant="bordered"
      onPress={back}
      startContent={
        <ImArrowLeft2 size={20} className="text-utility-blue absolute left-7" />
      }
    >
      {"Volver"}
    </ButtonComponent>
  );
};
