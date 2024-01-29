import React from 'react';
import { Header } from '../layout/Header/Header';
import { FormPageController } from './FormPageController';
import { Footer } from '../layout/Footer/Footer';

export default function FormPage() {

  const { buttonInformation } = FormPageController();

  return (
    <>
      <Header data={buttonInformation} />
      <div>Landing</div>
      <Footer data={buttonInformation} />
    </>
  )
}
