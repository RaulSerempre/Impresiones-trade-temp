import { Metadata, NextPage } from "next";
import { LoginFormComponent } from "./components/login-form";
import { TitleComponent } from "@/src/components";

export const metadata: Metadata = {
  title: "Login2",
  description: "Pagina de acceso seguro2",
};

const LoginPage: NextPage = () => {
  return (
    <div className="mt-6">
      <TitleComponent title="Iniciar sesión" className="mb-6" />
      <LoginFormComponent></LoginFormComponent>
    </div>
  );
};

export default LoginPage;
