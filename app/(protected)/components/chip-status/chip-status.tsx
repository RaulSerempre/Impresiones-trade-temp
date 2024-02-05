import { ChipComponent } from "@/src/components/chip-component/chip.component";
import { EOrderStatus } from "@/src/lib/constants";
import {
  PiDotsThreeCircle,
  PiCheckCircleBold,
  PiWarningCircleBold,
} from "react-icons/pi";
import React from "react";
import { EChipVariants } from "@/src/lib/constants/enum/chip-variants";

const iconOrderStatus = {
  [EOrderStatus.aproved]: (
    <PiCheckCircleBold size={18} className="text-[#06C295]" />
  ),
  [EOrderStatus.pending]: (
    <PiDotsThreeCircle size={18} className="text-[#DAA900]" />
  ),
  [EOrderStatus.modified]: (
    <PiDotsThreeCircle size={18} className="text-[#DAA900]" />
  ),
  [EOrderStatus.reject]: (
    <PiWarningCircleBold size={18} className="text-[#C31F39]" />
  ),
};
const variantOrderStatus = {
  [EOrderStatus.aproved]: EChipVariants.success,
  [EOrderStatus.pending]: EChipVariants.warning,
  [EOrderStatus.modified]: EChipVariants.warning,
  [EOrderStatus.reject]: EChipVariants.danger,
};

const textOrderStatus = {
  [EOrderStatus.aproved]: "Aprobado",
  [EOrderStatus.pending]: "Pendiente",
  [EOrderStatus.modified]: "Modificado",
  [EOrderStatus.reject]: "Rechazado",
};

interface IProps {
  status: EOrderStatus;
}

export const ChipStatus = ({ status }: IProps) => {
  return (
    <ChipComponent
      variant={variantOrderStatus[status]}
      startIcon={iconOrderStatus[status]}
    >
      {textOrderStatus[status]}
    </ChipComponent>
  );
};
