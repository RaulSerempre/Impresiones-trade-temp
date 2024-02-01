import { ButtonComponent, InputComponent } from "..";
import { cn } from "@/src/lib/utils";

const baseClass = cn("border-utility-blue  border-2 ");

export const SearchbarComponent = () => {
  return (
    <div className="flex h-10">
      <InputComponent
        variant="bordered"
        placeholder="Buscar ítems"
        className={cn(baseClass, " py-2rounded-r-none rounded-l-md hover:!border-utility-blue-link focus-within:!border-utility-blue-link w-full max-w-96 h-10 block")}
      ></InputComponent>
      <ButtonComponent
        variant="solid"
        className={cn(baseClass, " py-2.5rounded-l-none rounded-r-md hover:!opacity-100 hover:bg-utility-blue-link data-[pressed=true]:scale-100 h-auto")}
      >
        {"Buscar"}
      </ButtonComponent>
    </div>
  );
};
