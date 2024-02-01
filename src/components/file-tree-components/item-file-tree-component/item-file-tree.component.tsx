import React from "react";
import { IFileTreeComponent } from "../file-tree.component";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { cn } from "@/src/lib/utils";

export const ItemFileTree = ({
  data,
  iconDirectory,
  iconArrow,
}: IFileTreeComponent) => {
  return (
    <>
      {data &&
        data.map((item, index) =>
          item.childs ? (
            <Accordion
              key={item.id}
              variant="light"
              showDivider={false}
              selectionMode={"single"}
            >
              <AccordionItem
                indicator={iconArrow}
                classNames={{
                  trigger: cn("py-2.5"),
                  title: cn("text-sm font-normal leading-4"),
                  content: cn("py-0"),
                  indicator: cn(
                    "text-utility-blue-indicator data-[open=true]:-rotate-180 text-lg"
                  ),
                }}
                key={item.title}
                aria-label={`Accordion ${index}`}
                startContent={iconDirectory}
                title={item.title}
              >
                <ItemFileTree
                  data={item.childs}
                  iconDirectory={iconDirectory}
                  iconArrow={iconArrow}
                />
              </AccordionItem>
            </Accordion>
          ) : (
            <p
              className="text-sm font-normal leading-4 py-2.5 px-3 flex items-center"
              key={item.id}
            >
              {iconDirectory} {<span className="ml-3">{item.title}</span>}
            </p>
          )
        )}
    </>
  );
};
