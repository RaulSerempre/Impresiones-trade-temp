import { cn } from "@/src/lib/utils";
import React from "react";
import { ButtonComponent } from "../button-component";
import { createPortal } from "react-dom";

export interface IModalProps {
  icon?: React.ReactNode;
  colorIcon?: string;
  title?: string;
  message?: string;
  children?: React.ReactNode;
  displayCloseButton?: boolean;
  textCloseButton?: string;
  rounded?: boolean;
  onCloseEvent: () => void;
}

export const ModalComponent = ({ onCloseEvent, ...props }: IModalProps) => {
  return createPortal(
    <section className="modal">
      <article
        className={cn(
          "w-[408px] bg-white p-10 shadow-lg",
          props.rounded ? "rounded-2xl" : "rounded-none"
        )}
      >
        {/* Icon */}
        {props.icon && (
          <div className={cn("mb-2.5", props.colorIcon && props.colorIcon)}>
            {props.icon}
          </div>
        )}
        {/* Header */}
        {(props.title || props.message) && (
          <div className="text-center">
            {props.title && (
              <h4 className="text-[32px] font-black text-utility-blue-underline mb-2 leading-[38px]">
                {props.title}
              </h4>
            )}
            {props.message && (
              <p className="text-sm font-normal text-utility-black leading-4">
                {props.message}
              </p>
            )}
          </div>
        )}
        {/* Content  */}
        {props.children && <div>{props.children}</div>}
        {/* Footer */}
        {props.displayCloseButton && (
          <div className="mt-6 flex justify-center">
            <ButtonComponent variant="solid" onClick={onCloseEvent}>
              {props.textCloseButton}
            </ButtonComponent>
          </div>
        )}
      </article>
    </section>,
    document.body
  );
};
