"use client";
import { cn } from "@/src/lib/utils";
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
  ButtonProps,
} from "@nextui-org/react";
import React, { useState } from "react";

interface IItemButton extends ButtonProps {
  children: string | React.ReactNode;
}

const ItemButonToggle = ({ isIconOnly, ...props }: IItemButton) => {
  return (
    <Button isIconOnly={isIconOnly} {...props}>
      {props.children}
    </Button>
  );
};

interface IBtnToggleProps extends ButtonGroupProps {
  leftContent: string | React.ReactNode;
  rightContent: string | React.ReactNode;
  isIconOnly?: boolean;
  selectedClassName: string;
  defaultSelected: 1 | 2;
  containerClassName?: string;
}

export const ButtonToggleComponent = ({
  leftContent,
  rightContent,
  className,
  isIconOnly,
  selectedClassName,
  defaultSelected,
  containerClassName,
  ...props
}: IBtnToggleProps) => {
  const [selected, setselected] = useState({
    btn1: defaultSelected === 1,
    btn2: defaultSelected === 2,
  });
  return (
    <ButtonGroup className={containerClassName} {...props}>
      <ItemButonToggle
        isIconOnly={isIconOnly}
        className={cn(className, selected.btn1 && selectedClassName)}
        onPress={() => setselected({ btn1: true, btn2: false })}
      >
        {leftContent}
      </ItemButonToggle>
      <ItemButonToggle
        isIconOnly={isIconOnly}
        className={cn(className, selected.btn2 && selectedClassName)}
        onPress={() => setselected({ btn1: false, btn2: true })}
      >
        {rightContent}
      </ItemButonToggle>
    </ButtonGroup>
  );
};
