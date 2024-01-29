import React from 'react';
import { FooterController } from './FooterController';
import {
    StyledPqrSection,
    StyledPqrContent
} from './Footer.styles';

export const PqrsSection = ({styles}) => {

    const { 
        accordionClass,
        onClick
    } = FooterController();

  return (
    <>
        <StyledPqrSection 
            className='footer__pqrs__title'
            color= {styles?.fontColor ? styles?.fontColor : '#000000'} 
            backgroundColor={styles?.backgroundColor ? styles?.backgroundColor : '#C6C6C6'} 
            dangerouslySetInnerHTML={{__html: styles?.title}}
            onClick={()=>{onClick()}}
        >
        </StyledPqrSection>
        <StyledPqrContent 
            className={`footer__pqrs__content ${accordionClass}`}
            color= {styles?.fontColor ? styles?.fontColor : '#000000'} 
            backgroundColor={styles?.backgrountColor ? styles?.backgrountColor : '#C6C6C6'} 
        >
            {styles?.content}
        </StyledPqrContent>
    </>
  )
}
