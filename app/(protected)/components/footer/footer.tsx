import React from 'react'

export const FooterComponent = () => {
  return (
    <div className='w-full bg-utility-purple'>
      <div className='mx-auto container max-w-7xl px-2 sm:px-6 lg:px-8'>
        <p className='text-center text-sm font-bold text-black px-6 py-3'>CANALES DE ATENCIÓN Y RESPUESTA A PETICIONES, CONSULTAS, QUEJAS Y RECLAMOS DE TITULARES DE DATOS PERSONALES AQUÍ</p>
      </div>
      <div className='bg-white'>
        <div className='mx-auto container max-w-7xl px-2 sm:px-6 lg:px-8'>
          <ul className='uppercase flex justify-center gap-x-6 font-Roboto text-[10px] leading-[11px] font-bold underline py-4 px-6'>
            <li>TÉRMINOS Y CONDICIONES de uso</li>
            <li>AVISO DE PRIVACIDAD</li>
            <li>HABLEMOS DE ALCOHOL</li>
            <li>CONTáCTENOS</li>
            <li>Anheuser-Busch InBev © 2022</li>
          </ul>
        </div>
      </div>
      <div className='mx-auto container max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='py-4'>
          continuando con el footer
        </div>
      </div>
    </div>
  )
}
