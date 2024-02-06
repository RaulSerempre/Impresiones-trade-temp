import { cn } from "@/src/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { CustomIcon } from "./icons/icons-checkbox";

export interface ICheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: "check" | "square";
  label?: string | React.ReactNode;
  isSelected?: boolean;
}

const CheckVariants = cva(["text-transparent"], {
  variants: {
    type: {
      check: "",
      square: cn(
        "transition-all ease-linear pointer-events-none",
        "border rounded-4px border-utility-gray-check",
        "mr-4 w-6 h-6",
        "flex items-center justify-center",
        "peer-checked:text-utility-black"
      ),
    },
    icon: {
      check: "",
      square: "",
    },
  },
});

const CheckboxComponent = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ className, variant, label, ...props }, ref) => {
    return (
      <div className="w-full flex gap-2">
        <label className="flex items-center flex-row">
          <input className="peer hidden" type="checkbox" ref={ref} {...props} />
          <span className={CheckVariants({ type: variant })}>
            <CustomIcon variant={variant} className="h-3 stroke-transparent" />
          </span>

          <p className="select-none text-primary leading-4 flex-1">{label}</p>
        </label>
      </div>
    );
  }
);

CheckboxComponent.displayName = "CheckboxComponent";

export { CheckboxComponent };
