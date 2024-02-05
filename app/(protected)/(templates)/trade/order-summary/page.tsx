import {
  OrderContainerItem,
  OrderCustomerInfo,
} from "@/app/(protected)/components";
import { TitleComponent } from "@/src/components";
import React from "react";
import { OrderSummaryActions } from "./components/order-summary-actions/order-sumary-actions";

const tempCustomer = {
  UEN: "Zona Metropolitana",
  name: "Juan Perez",
  email: "juan.perez@gmail.com",
  address: "Balderas 27, Colonia Centro Cuauhtémoc CDMX Mexico 06040",
};

const tempPayment = {
  subtotal: "$9.959",
  total: "$9.959",
};

const OrderSummaryPage = () => {
  return (
    <div>
      <TitleComponent
        className="text-left"
        title="Resumen del Pedido #3569542"
      />
      <p className="mt-2 mb-10">
        Felicidades estás a un click de poder generar tu pedido. Si necesitas
        modificar algo, aún estás a tiempo.
      </p>

      <div className="flex gap-10 md:gap-20 lg:gap-40">
        <OrderContainerItem isEditable={true}/>
        <OrderCustomerInfo customer={tempCustomer} payment={tempPayment} />
      </div>

      <OrderSummaryActions></OrderSummaryActions>
    </div>
  );
};

export default OrderSummaryPage;
