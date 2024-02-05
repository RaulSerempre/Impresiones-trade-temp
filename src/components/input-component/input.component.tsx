import { cn } from "@/src/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: "bordered" | "underlined";
  label?: string;
  messageError?: string;
}

const InputVariants = cva([], {
  variants: {
    shape: {
      underlined: cn(
        "p-4 outline-none",
        "text-sm leading-4 text-primary placeholder:text-[#AAAAAA]",
        "border-b border-solid border-utility-blue-underline peer"
      ),
      bordered: cn("p-2.5 outline-none"),
    },
  },
});

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, label, messageError, ...props }, ref) => {
    return (
      <>
        <label className="flex flex-col">
          {label && (
            <span className="text-sm font-bold text-utility-blue-underline mb-1">
              {label}
            </span>
          )}
          <input
            autoComplete={"true"}
            className={cn(
              InputVariants({ shape: variant }),
              className,
              messageError && "border-form-error"
            )}
            ref={ref}
            {...props}
          />
          {/* Animate underline */}
          <span
            className={cn(
              "block h-[2px] w-full -mt-px scale-x-0 peer-focus:scale-x-100",
              "transition-all ease-linear  bg-utility-blue-underline ",
              messageError && "bg-form-error "
            )}
          ></span>
        </label>

        {/* Error messsage */}
        {messageError && (
          <span
            className={cn(
              "block font-bold leading-3 text-xs text-form-error pt-1 px-4"
            )}
          >
            {messageError}
          </span>
        )}
      </>
    );
  }
);

InputComponent.displayName = "InputComponent";

export { InputComponent };
