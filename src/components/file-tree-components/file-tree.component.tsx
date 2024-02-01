"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ItemFileTree } from "./item-file-tree-component/item-file-tree.component";
import { cn } from "@/src/lib/utils";

export interface IFileTreeComponent {
  data: Array<IData>;
  iconDirectory: React.ReactNode;
  iconArrow: React.ReactNode;
}

export interface IData {
  id: number;
  title: string;
  childs?: Array<IData>;
}



export const FileTreeComponent = ({
  data,
  iconDirectory,
  iconArrow
}: IFileTreeComponent) => {
  return (
    <div className="bg-utility-gray-components pt-5 pb-3">
      {data &&
        data.map((item) => (
          <Accordion
            key={item.id}
            variant="light"
            showDivider={true}
            selectionMode={"single"}
          >
            <AccordionItem 
              indicator={iconArrow}
              title={item.title}
              className="jjj"
              classNames={{
                trigger: cn("py-2.5 pr-2 border-solid border-b border-utility-gray-separator"),
                title: cn("text-xl leading-6 font-bold text-utility-blue"),
                content: cn("py-0"),
                indicator: cn(
                  "text-utility-blue data-[open=true]:-rotate-180 text-xl"
                ),
              }}
            >
              { item.childs && <ItemFileTree data={item.childs} iconArrow={iconArrow} iconDirectory={iconDirectory} />}
            </AccordionItem>
          </Accordion>
        ))}
      
    </div>
  );
};
