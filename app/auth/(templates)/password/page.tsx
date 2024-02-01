import { Metadata, NextPage } from "next";
import { PasswordFormComponent } from "./components/passwordForm";
import { TitleComponent } from "@/src/components";

export const metadata: Metadata = {
  title: "Login2",
  description: "Pagina de acceso seguro2",
};

const PasswordPage: NextPage = () => {
  return (
    <div className="mt-6">
      <TitleComponent title="Bienvenid@"/>

      <p className="mb-6 mt-9 font-normal leading-4">
        Bienvenido a CANTO EXECUTION aquí podrás solicitar tus materiales de
        ejecución de una manera más sencilla.{" "}
      </p>

      <PasswordFormComponent></PasswordFormComponent>
    </div>
  );
};

export default PasswordPage;
