import React from 'react';
import {
    StyledLegalAlert,
    StyledBelowDisclaimer,
    StyledCopyright
} from './Footer.styles';

export const BelowDisclaimerSection = ({styles}) => {
    
    console.log("log2", styles);

  return (
    <>
        {
            styles?.topLegalText && <StyledLegalAlert
                className='footer__legalAlert'
                color= {styles?.topLegalFontColor ? styles?.topLegalFontColor : '#000000'} 
                backgroundColor={styles?.topLegalBackgroundColor ? styles?.topLegalBackgroundColor : '#C6C6C6'} 
            >
                {styles?.topLegalText}
            </StyledLegalAlert>
        }
        <StyledBelowDisclaimer 
            className='footer__legal'
            color= {styles?.copyrightFontColor ? styles?.copyrightFontColor : '#000000'} 
            backgroundColor={styles?.mainBackgroundColor ? styles?.mainBackgroundColor : '#C6C6C6'} 
        >
            {
                styles?.brandLogoImage ?
                <img
                    className="footer__legal__brandLogo"
                    alt={styles?.brandLogoImage?.alternativeText}
                    title={styles?.brandLogoImage?.caption}
                    src={`${process.env.NEXT_PUBLIC_API_SCRAPI}${styles?.brandLogoImage?.url}`}
                />
                : <></>
            }
            <div>
                <div 
                    className='footer__legal__label' 
                    dangerouslySetInnerHTML={{__html: styles?.mainLegalText[0]?.children[0]?.text}}>
                </div>
                <div className='footer__legal__logoContainer'>
                    {
                        styles?.firstLegalImage?.url ?
                        <img
                            className="footer__legal__logo"
                            alt={styles?.firstLegalImage?.alternativeText}
                            title={styles?.firstLegalImage?.caption}
                            src={`${process.env.NEXT_PUBLIC_API_SCRAPI}${styles?.firstLegalImage?.url}`}
                        />
                        : <></>
                    }
                    {
                        styles?.secondLegalImage?.url ?
                        <img
                            className="footer__legal__logoExtra"
                            alt={styles?.secondLegalImage?.alternativeText}
                            title={styles?.secondLegalImage?.caption}
                            src={`${process.env.NEXT_PUBLIC_API_SCRAPI}${styles?.secondLegalImage?.url}`}
                        />
                        : <></>
                    }
                </div>
                <StyledCopyright 
                    className='footer__legal__copyRight'
                    href={`${styles?.copyrightLink}`} 
                    target="_blank"
                    color={styles?.copyrightFontColor ? styles?.copyrightFontColor : '#000000'}
                >
                    {styles?.copyrightText}
                </StyledCopyright>
            </div>
        </StyledBelowDisclaimer>
    </>
  )
}
