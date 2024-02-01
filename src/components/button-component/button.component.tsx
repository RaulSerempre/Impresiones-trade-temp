import { cn } from "@/src/lib/utils";
import { Button, ButtonProps } from "@nextui-org/react";
import { cva } from "class-variance-authority";
import Link from "next/link";

interface IButtonProps extends Omit<ButtonProps, "variant"> {
  variant: "solid" | "bordered" | "light" | "link";
  href?: string;
}

const buttonVariants = cva(["h-auto flex justify-center items-center gap-3 py-4 px-6"], {
  variants: {
    shape: {
      solid: cn(
        "border-solid border-3 border-utility-blue",
        "text-white font-bold",
        "bg-utility-blue data-[hover=true]:bg-utility-blue-link"
      ),
      bordered:
        "border-solid border-3 border-utility-blue text-utility-blue font-bold",
      light: "",
      link: "bg-transparent text-utility-blue-link underline underline-offset-4 px-1 py-0",
    },
  },
});
// text-sm py-4 px-8 rounded-none h-full

export const ButtonComponent = ({
  variant,
  className,
  href,
  ...props
}: IButtonProps) => {
  return !href ? (
    <Button
      radius="none"
      variant={"light"}
      {...props}
      className={cn(buttonVariants({ shape: variant }), className)}
    >
      {props.children}
    </Button>
  ) : (
    <Link
      className={cn(buttonVariants({ shape: variant }), className)}
      href={href}
    >
      {props.children}
    </Link>
  );
};
