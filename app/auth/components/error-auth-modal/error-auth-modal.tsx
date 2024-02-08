'use client'

import { IModalProps, ModalComponent } from '@/src/components'
import React from 'react'
import { TbAlertCircleFilled } from 'react-icons/tb';


export const ErrorModalAuth = (props : IModalProps) => {
  return (
    <ModalComponent
          colorIcon="text-icon-danger"
          title={"Algo salió mal."}
          textCloseButton='Volver'
          icon={<TbAlertCircleFilled size={75} className='mx-auto'/>}
          rounded
          {...props}
        />
  )
}
