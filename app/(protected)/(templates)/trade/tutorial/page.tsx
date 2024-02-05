import { NextPage } from "next";
import { SlidersComponent } from "./components/sliders";
import { ButtonComponent, TitleComponent } from "@/src/components";

const Tutorial: NextPage = () => {
  return (
    <main className="container mx-auto px-4 pt-10 pb-16 max-w-7xl ">
      <div className="py-10">
        <TitleComponent
          title="¿Cómo funciona Canto Execution?"
        />
      </div>

      <SlidersComponent></SlidersComponent>

      <div className="text-center mt-6 ">
        <ButtonComponent variant="solid" className="inline-block" href="select-sag">
          {"Omitir"}
        </ButtonComponent>
      </div>
    </main>
  );
};

export default Tutorial;
