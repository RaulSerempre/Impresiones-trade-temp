import { TitleComponent } from "@/src/components";
import { TableHistory } from "./components/table-history/table-history";
import { RedirectToTutorial } from "./components/redirect-tutorial/redirect-tutorial";
import { TableFilters } from "./components/table-filters/table-filters";
import { PaginationComponent } from "@/src/components/pagination-component/pagination.component";



const OrdersHistory = () => {
  return (
    <div>
      <TitleComponent className="mt-10" title="Historial de pedidos" />
      <p className="text-center mb-12 mt-6">
        Aquí encontrarás toda la información sobre los pedidos que has
        realizado.
      </p>

      <div className="bg-white p-4 shadow-md">
        <TableFilters/>
        <TableHistory/>
      </div>
      <div className="mt-12">
        <PaginationComponent/>
      </div>

      <div className="text-center mt-12">
        <RedirectToTutorial/>
      </div>
    </div>
  );
};

export default OrdersHistory;
