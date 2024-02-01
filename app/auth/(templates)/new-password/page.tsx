import { NextPage } from "next";
import { NewPasswordForm } from "./components/newPasswordForm";
import { TitleComponent } from "@/src/components";

const NewPassword: NextPage = () => {
  return (
    <div className="mt-6">
      <TitleComponent title="Nueva contraseña"/>

      <div className="mb-6">
        <p>
          Ingresa y confirma tu nueva contraseña cumpliendo los siguientes
          requerimientos:
        </p>
        <ul className="list-disc list-inside px-2 pt-4">
          <li>Mínimo 8 caracteres.</li>
          <li>Al menos una mayúscula.</li>
          <li>Al menos un número.</li>
          <li>Al menos un símbolo.</li>
        </ul>
      </div>

      <NewPasswordForm></NewPasswordForm>
    </div>
  );
};

export default NewPassword;
