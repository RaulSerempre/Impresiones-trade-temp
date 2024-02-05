import { NextPage } from "next";
import { ItemProductComponent } from "./components/item-product/item-product";
import { PaginationComponent } from "@/src/components/pagination-component/pagination.component";
import { SectionTopFilters } from "./components/section-top-filters/section-top-filters";
import { ButtonToggleComponent, InfoChipComponent } from "@/src/components";
import { FileTreeComponent } from "@/src/components/file-tree-components/file-tree.component";
import { FaRegFolder } from "react-icons/fa";
import { TbChevronDown } from "react-icons/tb";
import { ShoppingCartModal } from "./components/shopping-cart-modal/shoping-card-modal";


const tempData: Array<IData> = [
  {
    id: 1,
    title: "Líbrerias1",
    childs: [
      {
        id: 11,
        title: "Pendons1",
        childs: [
          { id: 111, title: "2022" },
          { id: 112, title: "2023" },
        ],
      },
      {
        id: 12,
        title: "Pancartas2",
        childs: [
          { id: 121, title: "2028" },
          { id: 122, title: "2029" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Líbrerias",
    childs: [
      {
        id: 21,
        title: "Pendons",
        childs: [
          { id: 211, title: "2022" },
          { id: 212, title: "2023" },
        ],
      },
      {
        id: 22,
        title: "Pancartas",
        childs: [
          { id: 221, title: "2022" },
          { id: 222, title: "2023" },
        ],
      },
    ],
  },
];

interface IData {
  id: number;
  title: string;
  childs?: Array<IData>;
}


const SelectProductPage: NextPage = () => {
  return (
    <div className="">
      <div className="flex flex-row gap-x-11">
        {/* Aside section */}
        <aside className="w-64">
          <InfoChipComponent
            color="bg-utility-purple"
            childrenHeader="Listado SAGs"
            childrenBody={
              <ul className="grid grid-cols-2 gap-x-2 text-primary">
                <li>Agencia 001</li>
                <li>Agencia 002</li>
                <li>Agencia 003</li>
                <li>Agencia 004</li>
              </ul>
            }
          />

          <div className="my-10">
            <ButtonToggleComponent
              className="!rounded-full border-solid border-2 border-utility-blue bg-white text-gray-900 font-bold text-lg py-2.5 px-6"
              leftContent={"A a la Z"}
              rightContent={"Z a la A"}
              selectedClassName="bg-utility-blue text-white"
              containerClassName="gap-2"
              defaultSelected={1}
            />
          </div>

          <div>
            <FileTreeComponent data={tempData} iconArrow={<TbChevronDown/>} iconDirectory={<FaRegFolder className="text-utility-blue" />}/>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <SectionTopFilters />

          {/* List Products view */}
          <div className="grid grid-cols-3 gap-5">
            <ItemProductComponent />
            <ItemProductComponent />
            <ItemProductComponent />
            <ItemProductComponent />
            <ItemProductComponent />
          </div>

          <div className="mt-12">
            <PaginationComponent />
          </div>
        </main>
      </div>

      <ShoppingCartModal/>
    </div>
  );
};

export default SelectProductPage;
