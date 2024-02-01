import { ModalComponent } from '@/src/components'
import React from 'react'
// import { TbAlertCircleFilled } from 'react-icons/tb';

interface IProps {
  message: string
  onCloseEvent: ()=>void
}

export const ErrorModalLogin = ({message, onCloseEvent}: IProps) => {
  return (
    <ModalComponent
          // icon={<TbAlertCircleFilled />}
          colorIcon="text-icon-danger"
          title={"Algo salió mal."}
          message={message}
          onCloseEvent={onCloseEvent}
        />
  )
}
