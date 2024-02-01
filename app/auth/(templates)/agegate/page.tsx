import { NextPage } from "next";
import { AgegateForm } from "./components/agegateForm";

// Get Agegate data

const AgegatePage: NextPage = () => {
  return (
    <div className="mt-6">
      <h2 className="text-utility-blue text-[32px] font-black mt-5 mb-6 text-center">
        ¿Eres mayor de edad?
      </h2>
      <p className="text-utility-black text-sm font-normal leading-4">
        Para acceder a nuestros beneficios debes ser mayor de edad.
      </p>
      <AgegateForm></AgegateForm>
    </div>
  );
};

export default AgegatePage;
