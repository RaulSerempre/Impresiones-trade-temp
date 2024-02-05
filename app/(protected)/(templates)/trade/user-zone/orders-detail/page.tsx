import { TitleComponent } from '@/src/components';
import React from 'react'
import { OrderDetailAction } from './components/order-detail-action/order-detail-action';
import { OrderContainerItem, OrderCustomerInfo } from '@/app/(protected)/components';
import { ChipStatus } from '@/app/(protected)/components/chip-status/chip-status';
import { EOrderStatus } from '@/src/lib/constants';

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

const OrdersDetail = () => {
  return (
    <div>
      <TitleComponent
        className="text-left"
        title="Resumen del Pedido #3569542"
      />
      <p className="mt-2 leading-4">
        Gracias por tu compra.
      </p>
      <p className="mb-2 leading-4">
        Tu pedido se encuentra:
      </p>

      <ChipStatus status={EOrderStatus.aproved}/>
      

      <div className="mt-14 flex gap-10 md:gap-20 lg:gap-40">
        <OrderContainerItem isEditable={false}/>
        <OrderCustomerInfo customer={tempCustomer} payment={tempPayment} />
      </div>
      <div className='flex justify-center mt-10 mb-10'>

        <OrderDetailAction/>
      </div>
    </div>
  );
}

export default OrdersDetail;