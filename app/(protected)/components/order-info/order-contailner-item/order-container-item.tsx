import React from "react";
import { OrderProductCard } from "..";

interface IProps {
  isEditable: boolean
}

export const OrderContainerItem = ({isEditable = false} : IProps) => {
  return (
    <div className="bg-utility-purple rounded-2xl p-4 w-full flex-1">
      <p className="text-lg leading-5 pt-14px pb-3 text-utility-blue font-bold min-w-80 w-80 border-solid border-b-1 border-gray-300">
        Pedido #3569542-1
      </p>
      <div className="text-primary leading-4 mb-4  mt-2">
        <p className="flex mb-2">
          <span className="w-36">Impresor:</span>
          <span className="font-bold">Nombre de Impresor</span>
        </p>
        <p className="flex mb-2">
          <span className="w-36"># de Proveedor:</span>
          <span className="font-bold">00005787</span>
        </p>
        <p className="flex mb-2">
          <span className="w-36">SAG:</span>
          <span className="font-bold">Agencia 001</span>
        </p>
      </div>
      <div>
        <OrderProductCard isEditable={isEditable}/>
        <OrderProductCard isEditable={isEditable}/>
        <OrderProductCard isEditable={isEditable}/>
      </div>
    </div>
  );
};
