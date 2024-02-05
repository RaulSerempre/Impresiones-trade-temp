import React from "react";
import { DataContainer } from "./data-container/data-container";

interface IProps {
  customer: {
    UEN?: string; // Trade | Admin
    name: string;
    email: string;
    address: string;
  };
  payment: {
    subtotal: string;
    total: string;
  };
  showActions?: boolean; // Admin | Vendor
  commentary?: boolean; // Admin
}

export const OrderCustomerInfo = ({ customer, payment }: IProps) => {
  return (
    <div className="bg-utility-purple p-4 w-[348px]">
      <DataContainer>
        <>
          <p className="text-lg leading-5 pt-14px pb-3 text-utility-blue font-bold">
            Detalles del pedido
          </p>
          <div className="flex flex-wrap text-base text-primary leading-19px">
            <p className="flex justify-between w-full mb-6">
              <span>UEN</span> <span className="font-bold">{customer.UEN}</span>
            </p>
            <p className="flex justify-between w-full mb-6">
              <span>Nombre de Usuario</span>{" "}
              <span className="font-bold">{customer.name}</span>
            </p>
            <p className="flex justify-between w-full mb-6 items-baseline">
              <span>Correo Electrónico</span>{" "}
              <span className="font-bold text-xs">{customer.email}</span>
            </p>
            <p className="mb-4">Dirección de entrega:</p>{" "}
            <p className="font-bold mb-4">{customer.address}</p>
          </div>
        </>
      </DataContainer>
      <DataContainer>
        <>
          <p className="text-lg leading-5 pt-14px pb-3 text-utility-blue-underline font-bold">
            Resumen
          </p>
          <div className="text-gray-600 leading-19px">
            <p className="flex justify-between w-full mb-6">
              <span>Subtotal</span>
              <span className="font-bold">{payment.subtotal}</span>
            </p>
            <p className="flex justify-between w-full font-bold">
              <span>TOTAL</span>
              <span>{payment.total}</span>
            </p>
          </div>
        </>
      </DataContainer>
    </div>
  );
};
