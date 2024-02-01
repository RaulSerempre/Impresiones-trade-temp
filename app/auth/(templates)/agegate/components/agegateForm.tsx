import { ButtonComponent } from "@/src/components";

const checkboxLabel =
  "Recordar mis datos.  No actives esta opción si compartes tu dispositivo.";

export const AgegateForm = () => {
  return (
    <form action="">
      <div className="flex gap-x-6 justify-center mt-6">
        <ButtonComponent variant="solid" href="select-sag">
          {"SÍ"}
        </ButtonComponent>
        <ButtonComponent variant="solid" href="https://www.google.com">
          {"NO"}
        </ButtonComponent>
      </div>
      <div className="mt-7 flex flex-col">
        <input
          className="w-6"
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
        />
        <label
          className="text-utility-black text-sm font-normal ml-4 leading-4"
          htmlFor="rememberMe"
        >
          Recordar mis datos. No actives esta opción si compartes tu
          dispositivo.
        </label>
      </div>
    </form>
  );
};
