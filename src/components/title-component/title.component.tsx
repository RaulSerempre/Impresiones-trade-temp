import { cn } from "@/src/lib/utils";
import { ClassValue } from "class-variance-authority/dist/types";

interface IProps {
  title: string;
  className?: string | ClassValue
}

export const TitleComponent = ({ title, className }: IProps) => {
  return (
    <h2
      className={cn(
        "text-utility-blue font-black text-center text-[32px]",
        className
      )}
    >
      {title}
    </h2>
  );
};
