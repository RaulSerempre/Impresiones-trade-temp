'use client'
import { ButtonComponent } from "@/src/components";

import { useRouter } from 'next/navigation';

export const RedirectToTutorial = () => {
  const { push } = useRouter();
  return (
    <div className="p-10 inline-block bg-yellow-400 rounded-2xl shadow-lg text-center mx-auto">
      <p className="text-utility-blue-underline font-black text-[32px] leading-[38px]">
        ¿Quieres saber como crear tus impresiones?
      </p>
      <div className="mt-4 flex justify-center">
        <ButtonComponent variant="solid" onPress={()=>{push("/trade/tutorial")}}>
          Conoce más
        </ButtonComponent>
      </div>
    </div>
  );
};
