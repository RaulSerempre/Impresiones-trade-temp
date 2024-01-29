import React from 'react';
import { StyledHeader } from './Header.styles';

export const Header = (data: any) => {

  const styles = data?.data?.header

  return (
    <StyledHeader 
      className ='header'
      backgroundColor = {styles?.backgroundColor ? styles?.backgroundColor : '#FFFFFF'} 
    >
      {
        styles?.logo?.url ?
          <img
            className="header__logo"
            alt={styles?.logo?.alternativeText}
            title={styles?.logo?.caption}
            src={`${process.env.NEXT_PUBLIC_API_SCRAPI}${styles?.logo?.url}`}
          />
          : <></>
      }
    </StyledHeader>
  )
}
