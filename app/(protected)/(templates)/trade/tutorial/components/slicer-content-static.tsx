import { cn } from '@/src/lib/utils'
import Image from 'next/image'
import React from 'react'

interface IProps {
  icon: string,
  title: string,
  description: string,
  selected: boolean
}

export const SliderContent = (props: IProps) => {
  return (
    <div className={cn('text-center transition-opacity' , props.selected ? 'opacity-100' : 'opacity-0')}>
      <div className='mb-4 inline-block'>
        <Image alt='' src={'/images/slider-image-temp.png'} width={100} height={100}/>
      </div>
      <h5 className='text-utility-blue text-2xl font-black mb-2'>{props.title}</h5>
      <p className='text-primary font-normal text-sm leading-4'>{props.description}</p>
    </div>
  )
}
