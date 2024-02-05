import { cn } from "@/src/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { RippleComponent } from "../ripple-component/ripple.component";
import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "solid" | "bordered" | "light" | "link";
  children: React.ReactNode;
  href?: string;
}
const buttonVariants = cva(
  [
    "h-auto flex justify-center items-center gap-3 py-4 px-7 relative overflow-hidden",
  ],
  {
    variants: {
      shape: {
        solid: cn(
          "text-white font-bold",
          "bg-utility-blue data-[hover=true]:bg-utility-blue-link"
        ),
        bordered:
          "border-solid border-3 border-utility-blue text-utility-blue font-bold",
        light: "",
        link: "bg-transparent text-utility-blue-link underline underline-offset-4 px-1 py-0",
      },
    },
  }
);

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, href, ...props }, ref) => {
    return href ? (
      <Link
        className={cn(buttonVariants({ shape: variant }), className)}
        href={href}
      >
        {children}
        <RippleComponent />
      </Link>
    ) : (
      <button
        ref={ref}
        {...props}
        className={cn(buttonVariants({ shape: variant }), className)}
      >
        {children}
        <RippleComponent />
      </button>
    );
  }
);

ButtonComponent.displayName = "ButtonComponent";

export { ButtonComponent };
