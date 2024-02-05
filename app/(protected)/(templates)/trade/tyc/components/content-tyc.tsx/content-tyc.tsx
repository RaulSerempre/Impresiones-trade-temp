"use client";
import { useGetTycQuery } from "@/src/hooks/api";
import { Spinner } from "@nextui-org/react";
import React from "react";

export const ContentTyc = () => {
  const { data, isFetching } = useGetTycQuery();

  if (isFetching) return <Spinner size={'sm'} className="italic flex flex-row justify-start items-center text-gray-400" label="cargando ..." color="default" labelColor="foreground"/>;

  return data ? (
    <div dangerouslySetInnerHTML={{ __html: data.data }}></div>
  ) : (
    <p className="italic">No hay contenido</p>
  );
};
