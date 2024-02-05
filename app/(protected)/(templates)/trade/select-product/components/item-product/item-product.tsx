import { ButtonComponent, InputComponent, SelectComponent } from "@/src/components";
import { Button } from "@nextui-org/react";
import { TbPencil } from "react-icons/tb";

export const ItemProductComponent = () => {
  return (
    <div className="border-solid border border-gray-300 rounded-lg">
      {/** CARD Product */}
      <div className="px-8 pt-4 pb-2 border-b-1 border-gray-200 ">

        <p className="text-xl leading-6 font-bold text-center text-utility-blue mt-2">Nompre del ítem</p>
      </div>

      <div className="px-4 pt-2 pb-7">
        <p className="text-lg leading-5 font-normal text-center text-utility-blue mb-2">
          $99.50
        </p>
        <SelectComponent
          data={[]}
          variant="bordered"
          label="Seleccionar impresor"
        />

        <div className="flex items-center mt-3">
          <InputComponent
            variant="bordered"
            placeholder="Cantidad"
          />
          <ButtonComponent className="ml-10" variant="solid">{"Agregar"}</ButtonComponent>
        </div>
      </div>
    </div>
  );
};
