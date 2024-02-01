import { Checkbox, CheckboxIconProps, CheckboxProps } from "@nextui-org/react";
import { cva } from "class-variance-authority";
import { cn } from "@/src/lib/utils";
import { CustomIcon } from "./icons/icons-checkbox";

interface ICheckProps extends Omit<CheckboxProps, "children"> {
  label: string;
  variant: "check" | "square";
  isSelected?: boolean
}

const checkVariants = cva([], {
  variants: {
    wrapper: {
      check:
        "border-3 !rounded-4px after:bg-utility-blue after:rounded-none overflow-visible border-utility-blue mr-4",
        square:
        "border !rounded-4px  after:bg-transparent  border-utility-gray-check mr-5",
    },
    icon: {
      check: "h-5 text-white",
      square: "h-4 text-utility-black",
    },
  },
});

export const CheckboxComponent = (props: ICheckProps) => {
  return (
    <Checkbox
      classNames={{
        wrapper: cn(
          "w-6 h-6 border-solid bg-white before:border-none",
          checkVariants({
            wrapper: props.variant,
          })
        ),
        icon: checkVariants({
          icon: props.variant,
        }),
        label: "text-sm leading-4 font-normal text-primary",
      }}
      {...props}
      icon={ (mprops: CheckboxIconProps) => <CustomIcon variant={props.variant}  {...mprops} />}
    >
      {props.label}
    </Checkbox>
  );
};
