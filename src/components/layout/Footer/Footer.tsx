import React from 'react';
import { BelowDisclaimerSection } from './Below-disclaimer-section';
import { LinksSection } from './Links-section';
import { PqrsSection } from './Pqrs-section';

export const Footer = (data: any) => {

  const styles = data?.data?.footer?.footerSections


  return (
    <>
        {
            styles && (
                <>
                    {
                        styles.map((section, index) => (
                            section?.__component === "paco-folds.footer-below-disclaimer-section" ? 
                                <BelowDisclaimerSection key={index} styles={section} />
                            : section?.__component === "paco-folds.footer-links-section" ?
                                <LinksSection key={index} styles={section} />
                            : section?.__component === "paco-folds.footer-pqr-section" ?
                                <PqrsSection key={index} styles={section} />
                            : <> </>
                        ))
                    }
                </>
            )
        }
    </>
    
  )
}

/* <div>
        <StyledAlert
            className='footer__alert'
            color= {styles?.textColor2 ? styles?.textColor2 : '#FFFFFF'} 
            backgroundColor={styles?.backgroundColor2 ? styles?.backgroundColor2 : '#555555'} 
        >
            NO COMPARTAS ESTE CONTENIDO CON MENORES DE EDAD
        </StyledAlert>  
    </div> */