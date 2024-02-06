import { cn } from "@/src/lib/utils"
import { CgSpinner } from "react-icons/cg"

interface ISpinnerProps {
  className?: string,
  size?: number
}

export const SpinnerComponent = ( {className, size=24} : ISpinnerProps) => {
  return (
    <CgSpinner className={cn("animate-spin text-white", className)} size={size}/>
  )
}
