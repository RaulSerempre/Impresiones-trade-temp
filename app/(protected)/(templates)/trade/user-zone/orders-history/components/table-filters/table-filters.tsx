'use client'
import React from 'react'
import { FilterIcon } from './filter-icon'
import { SelectComponent } from '@/src/components'

export const TableFilters = () => {
  return (
    <div className="h-20 bg-[#F3F3F3] mb-2 p-4 flex justify-center">
      <div className='flex items-center gap-4'>
        <FilterIcon/> <span className='font-bold leading-4'>Filtrar por</span>

        <SelectComponent data={[]} variant='bordered' placeholder='Fecha' aria-label='date select'/>
        <SelectComponent data={[]} variant='bordered' placeholder='Status' aria-label='satus select'/>
        <SelectComponent data={[]} variant='bordered' placeholder='Estado de pedido' aria-label='order status select'/>
        <SelectComponent data={[]} variant='bordered' placeholder='Impresor' aria-label='trade select'/>
      </div>
    </div>
  )
}
