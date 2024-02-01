import { cn } from '@/src/lib/utils'
import { Pagination } from '@nextui-org/react'
import React from 'react'

export const PaginationComponent = () => {
  return (
    <>
      <p className='text-center leading-5 mb-4 text-[#455A64]'>Mostrando 1 a 20 de 100</p>
      <div className='flex justify-center'>
        <Pagination showControls className='rounded text-utility-blue gap-2' 
        classNames={{
          wrapper: cn("gap-2"),
          item: cn("bg-utility-blue-sky text-utility-blue rounded"),
          cursor: cn("bg-utility-blue text-white rounded"),
          prev: cn("bg-utility-blue rounded text-white text-lg data-[disabled=true]:opacity-20 [&[data-hover=true]:not([data-active=true])]:bg-bg-utility-blue [&[data-hover=true]:not([data-active=true])]:opacity-90"),
          next: cn("bg-utility-blue rounded text-white text-lg data-[disabled=true]:opacity-20 [&[data-hover=true]:not([data-active=true])]:bg-bg-utility-blue [&[data-hover=true]:not([data-active=true])]:opacity-90")
        }}  color="warning" initialPage={3} total={100} />
      </div>
    </>
  )
}
