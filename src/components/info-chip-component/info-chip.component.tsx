import { cn } from "@/src/lib/utils";

interface IChipProps {
  color: string;
  childrenHeader: string | React.ReactNode;
  childrenBody?: string | React.ReactNode;
}

export const InfoChipComponent = (props: IChipProps) => {
  return (
    <div className={cn("rounded-2xl min-w-48 px-4 py-4", props.color)}>
      <span className="text-[#12284B] text-lg leading-[18px] font-bold flex justify-center items-center">
        {props.childrenHeader}
      </span>
      {props.childrenBody && <div className="mt-2">{props.childrenBody}</div>}
    </div>
  );
};
