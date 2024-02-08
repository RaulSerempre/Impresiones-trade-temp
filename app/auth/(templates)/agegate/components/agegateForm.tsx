"use client";

import { ButtonComponent, CheckboxComponent, SpinnerComponent } from "@/src/components";
import { useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useAgegateQuery } from "@/src/hooks/api";

const eventRememberme = (remember: boolean) => {
  remember && setCookie("remember", `${remember}`);
};

export const AgegateForm = () => {
  const { push } = useRouter();
  const [remember, setRemember] = useState(false);
  const [loadRedirect, setloadRedirect] = useState(false);
  const { data, isLoading } = useAgegateQuery();

  const redirectToLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    setloadRedirect(true);
    eventRememberme(remember);
    event.preventDefault();
    push("/auth/login", {});
  };

  return (
    <form>
      <div className="flex gap-x-6 justify-center mt-6">
        <ButtonComponent
          disabled={isLoading}
          variant="solid"
          onClick={redirectToLogin}
        >
          {loadRedirect ? <SpinnerComponent /> : "SÍ"}
        </ButtonComponent>
        <ButtonComponent
          disabled={isLoading}
          variant="solid"
          href={data?.agegate?.urlsToSkip || ''}
          children={"NO"}
        />
      </div>
      <div className="mt-7 flex flex-col">
        <CheckboxComponent
          defaultChecked={remember}
          onChange={() => {
            setRemember(!remember);
          }}
          variant="square"
          label="Recordar mis datos.  No actives esta opción si compartes tu dispositivo."
        />
      </div>
    </form>
  );
};
