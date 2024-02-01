import { Select, SelectItem, SelectProps } from "@nextui-org/react";
import { cva } from "class-variance-authority";

interface ISelectProps extends Omit<SelectProps, "children" | "classNames"> {
  variant: "underlined" | "bordered";
  data: Array<{
    value: string | number;
    label: string;
  }>;
}

const selectVariants = cva(["h-auto"], {
  variants: {
    trigger: {
      underlined: "h-auto",
      bordered: "rounded p-3 min-w-48 bg-white border border-solid border-utility-gray-form min-h-10",
    },
    label: {
      underlined: "!transform-none relative text-sm font-bold !text-primary",
      bordered: "",
    },
    innerWrapper: {
      underlined: "py-6 pl-4 h-auto",
      bordered: "",
    },
  },
});

export const SelectComponent = ({ variant, data, ...props }: ISelectProps) => {
  return (
    <div key={variant}>
      <Select
        variant={variant}
        classNames={{
          trigger: selectVariants({ trigger: variant }),
          label: selectVariants({ label: variant }),
          innerWrapper: selectVariants({ innerWrapper: variant }),
        }}
        {...props}
      >
        {data.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
