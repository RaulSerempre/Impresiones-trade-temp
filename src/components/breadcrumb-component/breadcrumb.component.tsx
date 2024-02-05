import { cn } from "@/src/lib/utils";
import { MdOutlineFolder } from "react-icons/md";

interface IProps {
  data: Array<string>;
  className?: string;
}

export const BreadcrumbComponent = ({ data, className }: IProps) => {
  return (
    <div className={cn("flex flex-row cursor-default gap-3 text-primary leading-4", className)}>
      {data &&
        data.map((item, index) => (
            <BreadcrumbItemComponent key={item.replaceAll(" ", "")}>
              {<MdOutlineFolder className="mr-1 text-utility-blue" size={18}/>} {<span>{item}</span>} {data.length-1 > index && (<span className="text-utility-blue text-base">&gt;</span>)}
            </BreadcrumbItemComponent> 
        ))}
    </div>
  );
};

const BreadcrumbItemComponent = (props: { children: React.ReactNode }) => {
  return <div className={cn("flex items-center gap-2")}>{props.children}</div>;
};
