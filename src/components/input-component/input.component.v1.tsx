import { cn } from "@/src/lib/utils";
import { Input, InputProps } from "@nextui-org/react";
import { cva } from "class-variance-authority";

interface IInputProps extends Omit<InputProps, "classNames" | "className"> {
  variant: "bordered" | "underlined";
  className?: string;
}

const inputVariants = cva("", {
  variants: {
    inputWrapper: {
      underlined:
        "h-auto !px-0 py-0 border-b border-solid border-utility-blue-underline hover:border-utility-blue-underline/80 after:bg-utility-blue-underline",
      bordered: cn("rounded h-auto"),
    },
    label: {
      underlined: "!transform-none relative text-sm font-bold !text-primary",
      bordered: "",
    },
    innerWrapper: {
      underlined: "h-auto pb-0",
      bordered: "",
    },
    input: {
      underlined: "p-4 text-sm font-normal !text-inherit",
      bordered: "",
    },
    disabled: {
      underlined: "",
      bordered: "bg-[#E3E3E3] border-[#AAAAAA] text-[#AAAAAA]"
    }
  },
});

export const InputComponent = ({ variant, className, isDisabled, endContent, ...props }: IInputProps) => {  
  return (
    <Input
      variant={variant}
      isDisabled={isDisabled}
      endContent={!isDisabled ? endContent : null}
      classNames={{
        inputWrapper: cn( inputVariants({ inputWrapper: variant }), className , isDisabled && inputVariants({disabled: variant})),
        label: inputVariants({ label: variant }),
        innerWrapper: inputVariants({ innerWrapper: variant }),
        input: inputVariants({ input: variant }),
      }}
      {...props}
    />
  );
};
