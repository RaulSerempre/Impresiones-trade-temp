"use client";
import { ButtonComponent, CheckboxComponent, SelectComponent } from "@/src/components";
import { cn } from "@/src/lib/utils";
import { CheckboxGroup } from "@nextui-org/react";
import React, { useState } from "react";

const temporalData = [
  {
    label: "Dormir",
    value: "1",
  },
  {
    label: "Jugar",
    value: "3",
  },
  {
    label: "Beber",
    value: "4",
  },
];

export const SelectSagForm = () => {
  const [sagSelected, setsagSelected] = useState(false);
  return (
    <div className="mx-auto max-w-96">
      <p className="text-center font-normal leading-4 mb-10 max-w-72 mx-auto">
        <span className="font-bold block">Dirección de entrega: </span>
        Balderas 27, Colonia Centro Cuauhtémoc CDMX Mexico 06040
      </p>

      <div>
        <form action="">
          <div className="mb-6">
            <SelectComponent
              data={temporalData}
              variant="underlined"
              placeholder="Seleccionar"
              label="Selecciona la UEN"
              onChange={() => setsagSelected(true)}
            />
          </div>

          {sagSelected && (
            <div>
              <CheckboxGroup
                label="Selecciona la(s) SAG*"
                className="flex flex-col flex-wrap"
                classNames={{
                  label: "leading-5 text-sm font-bold text-utility-black",
                  wrapper: cn("grid grid-cols-2 gap-4 ")
                }}
                defaultValue={["buenos-aires", "london"]}
              >
                <CheckboxComponent variant="check" label="Agencia 001" value={'1'}/>
                <CheckboxComponent variant="check" label="Agencia 002" value={'2'}/>
                <CheckboxComponent variant="check" label="Agencia 003" value={'3'}/>
                <CheckboxComponent variant="check" label="Agencia 004" value={'4'}/>
                <CheckboxComponent variant="check" label="Agencia 005" value={'5'}/>
                <CheckboxComponent variant="check" label="Agencia 006" value={'6'}/>
              </CheckboxGroup>
            </div>
          )}

          <div className="text-center mt-10">
            <ButtonComponent variant="solid" className="inline-block">{"Continuar"}</ButtonComponent>
          </div>
        </form>
      </div>
    </div>
  );
};
