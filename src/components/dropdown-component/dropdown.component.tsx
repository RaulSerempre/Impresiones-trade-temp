import { IItemDropdownMenu } from "@/src/components/dropdown-component/DropdownMenu.interface";
import { cn } from "@/src/lib/utils";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { ClassValue } from "class-variance-authority/dist/types";

interface IProps {
  title: string | React.ReactNode;
  listMenu: Array<IItemDropdownMenu>;
  className?: string | ClassValue
}

export const DropdownComponent = ({ listMenu, title, className }: IProps) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          isIconOnly={typeof title === "string" ? false : true}
          className={cn("text-sm font-bold text-primary", className)}
          variant="light"
        >
          {title}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        items={listMenu}
        // className="overflow-hidden right-8 z-10 mt-3 w-max min-w-32 origin-top-right rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        {(item) => (
          <DropdownItem 
            href={item.link}
            className="block text-sm font-bold text-primary pl-4 pr-4 pt-4 pb-4 hover:bg-primary hover:text-white"
            key={item.id}
          >
            {item.name}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};
