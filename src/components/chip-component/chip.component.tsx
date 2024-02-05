import { EChipVariants } from "@/src/lib/constants/enum/chip-variants";
import { cn } from "@/src/lib/utils";
import { cva } from "class-variance-authority";
import { ClassValue } from "class-variance-authority/dist/types";
import React from "react";

interface IProps {
  children: string | React.ReactNode;
  variant: EChipVariants,
  startIcon?: React.ReactNode;
  className?: string | ClassValue;
}

const variantsChip = cva(["rounded-2xl text-sm font-bold leading-4 px-5 py-2 flex items-center justify-center w-fit gap-2"], {
  variants: {
    type: {
      [EChipVariants.warning]: "bg-[#FFE99E]",
      [EChipVariants.danger]: "bg-[#EF9DAA]",
      [EChipVariants.success]: "bg-[#87FBDF]"
    }
  }
})

export const ChipComponent = ({ children, startIcon, className, variant }: IProps) => {
  return (
    <div
      className={cn( variantsChip({type: variant}) , className)}
    >
      {startIcon && startIcon}
      {children}
    </div>
  );
};
