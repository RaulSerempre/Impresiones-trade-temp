import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalProps,
} from "@nextui-org/react";
import { ButtonComponent } from "..";
import { cn } from "@/src/lib/utils";

interface IModalProps extends Omit<ModalProps, "children"> {
  icon?: React.ReactNode;
  colorIcon?: string;
  title?: string;
  message?: string;
  children?: React.ReactNode;
  displayCloseButton?: boolean;
  textCloseButton?: string;
  bordered?: boolean;
  onCloseEvent: () => void;
}

export const ModalComponent = ({
  onCloseEvent,
  children,
  icon,
  colorIcon,
  size = "md",
  message,
  title,
  displayCloseButton = true,
  bordered = true,
  textCloseButton = "Volver",
  ...props
}: IModalProps) => {
  const { onOpenChange } = useDisclosure();

  return (
    <>
      <Modal
        size={size}
        defaultOpen={true}
        onOpenChange={onOpenChange}
        hideCloseButton={true}
        onClose={onCloseEvent}
        {...props}
      >
        <ModalContent
          className={`p-10 shadow-lg ${
            bordered ? "rounded-2xl" : "rounded-none"
          }`}
        >
          {() => (
            <>
              {icon && (
                <div
                  className={cn(
                    "text-[75px] flex justify-center",
                    colorIcon ? colorIcon : ""
                  )}
                >
                  {icon}
                </div>
              )}

              {(title || message) && (
                <ModalHeader className="justify-center p-0 mt-3">
                  <div className="text-center">
                    {title && (
                      <h4 className="text-[32px] font-black text-primary mb-2 leading-[38px]">
                        {title}
                      </h4>
                    )}
                    {message && (
                      <p className="text-sm font-normal text-utility-black leading-4">
                        {message}
                      </p>
                    )}
                  </div>
                </ModalHeader>
              )}

              {children && (
                <ModalBody className="py-0 px-0">{children}</ModalBody>
              )}

              {displayCloseButton && (
                <ModalFooter className="mt-6 justify-center p-0">
                  <ButtonComponent variant="solid" onPress={onCloseEvent}>
                    {textCloseButton}
                  </ButtonComponent>
                </ModalFooter>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
