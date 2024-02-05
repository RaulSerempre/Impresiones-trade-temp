import { ButtonComponent, TitleComponent } from "@/src/components";
import { ContentTyc } from "./components/content-tyc.tsx/content-tyc";

const TyCPage = () => {
  return (
    <div className="mt-10">
      <TitleComponent title="Términos y condiciones"/>

      <div className="text-sm font-normal leading-4 mt-6 mb-12">
        <ContentTyc/>
      </div>

      <div className="text-center mb-16">
        <ButtonComponent variant="solid">Aceptar y continuar</ButtonComponent>
      </div>
    </div>
  )
}

export default TyCPage;
