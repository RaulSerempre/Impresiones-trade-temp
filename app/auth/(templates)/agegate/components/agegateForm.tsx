"use client";

import { ButtonComponent, CheckboxComponent } from "@/src/components";
import { useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const eventRememberme = (remember: boolean) => {
  const { replace } = useRouter();
  console.log("Ejecutando boton si : ", remember);
  remember && console.log("Guardar en cockie");
  setCookie("remember", `${remember}`);
  replace("/auth/login");
};

export const AgegateForm = () => {
  const [remember, setRemember] = useState(false);
  return (
    <form>
      <div className="flex gap-x-6 justify-center mt-6">
        <ButtonComponent
          variant="solid"
          onClick={() => {
            eventRememberme(remember);
          }}
        >
          {"SÍ"}
        </ButtonComponent>
        <ButtonComponent variant="solid" href="https://www.google.com">
          {"NO"}
        </ButtonComponent>
      </div>
      <div className="mt-7 flex flex-col">
        <CheckboxComponent
          defaultChecked={remember}
          onChange={() => setRemember(!remember)}
          variant="square"
          label="Recordar mis datos.  No actives esta opción si compartes tu dispositivo."
        />
      </div>
    </form>
  );
};
