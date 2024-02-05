"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { PiCalendarBlank } from "react-icons/pi";
import { TfiLayoutGrid2Alt  } from "react-icons/tfi";
import { MdTableRows  } from "react-icons/md";
import {
  BreadcrumbComponent,
  ButtonToggleComponent,
  InfoChipComponent,
} from "@/src/components";
import { SearchbarComponent } from "@/src/components/searchbar-component/searchbar.component";

export const SectionTopFilters = () => {
  return (
    <>
      <div className="flex justify-around items-center mb-14 pt-5">
        <SearchbarComponent></SearchbarComponent>

        <InfoChipComponent
          color="bg-[#FFF4CE]"
          childrenHeader={
            <>
              POCs
              <span className="text-primary text-sm leading-4 ml-2">405</span>
            </>
          }
        />
      </div>

      <div className="flex justify-between items-center px-3 py-3 border-solid border border-gray-300 rounded-md mb-8 bg-[#F3F3F3]">
        <BreadcrumbComponent
          data={["prueba1", "prueba2", "prueba3"]}
        />

        <div className="flex flex-row gap">
          <div className="flex items-center mr-1">
            <p className="mr-2 leading-4 text-sm font-bold">
              Organizar por fecha{" "}
            </p>
            <Button isIconOnly className="bg-transparent text-xl">
              <PiCalendarBlank />
            </Button>
          </div>
          <div>
            <ButtonToggleComponent
              className="border-solid border border-gray-300 bg-white"
              leftContent={<TfiLayoutGrid2Alt />}
              rightContent={<MdTableRows />}
              isIconOnly={true}
              selectedClassName="bg-gray-200"
              defaultSelected={2}
            />
          </div>
        </div>
      </div>
    </>
  );
};
