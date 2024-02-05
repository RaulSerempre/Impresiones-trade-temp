import { ButtonComponent, InputComponent } from "@/src/components";
import Image from "next/image";
import React from "react";
import { TbPencil } from "react-icons/tb";

interface IPros {
  isEditable: boolean;
}

export const OrderProductCard = ({ isEditable=false }: IPros) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full mb-4">
      <div className="flex justify-between">
        {/* Informative section */}
        <div className="flex flex-row">
          <Image
            width={100}
            height={100}
            className="object-cover object-center"
            src={"/images/product-image.jpg"}
            alt="product image"
          ></Image>
          <div className="ml-5 mt-1">
            <p className="mb-1 text-lg leading-5 font-bold text-utility-blue">
              Nombre de Ítem
            </p>
            <p className="mb-1 text-xs leading-3 font-bold text-utility-blue-indicator">
              $9.950 C/U
            </p>
            <p className="mb-1 text-sm leading-4 font-bold text-utility-blue">
              $9.950
            </p>
            <p className="mb-1 text-sm leading-4 text-utility-blue">
              Marca asociada
            </p>
          </div>
        </div>
        {/* Actions section */}
        <div className="w-24">
          <InputComponent
            // isDisabled={!isEditable}
            variant="bordered"
            value={'100'}
            // endContent={<TbPencil className="text-2xl text-utility-blue" />}
          ></InputComponent>
          {isEditable && (
            <ButtonComponent
              variant="bordered"
              className="mt-4 py-2 px-14px w-full"
            >
              Eliminar
            </ButtonComponent>
          )}
        </div>
      </div>
    </div>
  );
};
