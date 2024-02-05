import { NextPage } from "next"
import {TitleComponent } from "@/src/components";
import { SelectSagForm } from "./components/select-sag-form";

const SelectSagPage: NextPage = () => {
  return (
    <main className="container mx-auto px-4 py-unit-15 max-w-7xl ">
        <div className="mb-unit-15">
          <TitleComponent title="Selecciona tu SAG"/>
        </div>

        <div className="max-w-[856px] bg-white shadow-tutorial p-10 mx-auto">
          <SelectSagForm/>
        </div>
    </main>
  )
}

export default SelectSagPage;