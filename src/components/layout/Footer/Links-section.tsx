import React from 'react';
import { 
    StyledNetworkTitle,
    StyledLinkSection,
    StyledLinkTitle,
    StyledLink,
    StyledTermsSection
} from './Footer.styles';
import { 
    StyledIcon 
} from '../Layout.styles';

export const LinksSection = ({styles}) => {

    return (
        <>
            <StyledLinkSection 
                className='footer__linkSection'
                backgroundColor={styles?.backgroundColor ? styles?.backgroundColor : '#F3F3F3'} 
            >
                <div className='footer__linkSection__links'>
                    <div className='footer__linkSection__brand'>
                        {
                            styles?.logo[0]?.url ?
                            <img
                                className="footer__linkSection__logo"
                                alt={styles?.logo[0]?.alternativeText}
                                title={styles?.logo[0]?.caption}
                                src={`${process.env.NEXT_PUBLIC_API_SCRAPI}${styles?.logo[0]?.url}`}
                            />
                            : <></>
                        }
                        {
                            styles?.socialNetworks && styles?.socialNetworks?.length > 0 ?
                            <div className='footer__linkSection__socialNetworks'>
                                <StyledNetworkTitle 
                                    className='footer__linkSection__socialNetworksTitle'
                                    color={styles?.secondFontColor ? styles?.secondFontColor : '#717171'}
                                >
                                    SÍGUENOS EN
                                </StyledNetworkTitle>
                                <div className='footer__linkSection__socialNetworksContainer'>
                                    {
                                        styles?.socialNetworks?.map((network, index) => (
                                        <a 
                                            key={index}
                                            className='footer__linkSection__socialNetworksCta' 
                                            href={`${network?.url}`} 
                                            target={`${network?.target}`}
                                        >
                                            <StyledIcon  
                                                className={`icon-${network?.logoFont} footer__linkSection__socialNetworksIcon`} 
                                                color={styles?.firstFontColor ? styles?.firstFontColor : '#000000'}
                                                iconSize={'30px'}
                                            >
                                            </StyledIcon >
                                        </a>
                                        ))
                                    }
                                </div>
                            </div>
                            : <></>
                        }
                        {
                            
                        }
                    </div>
                    <div className='footer__linkSection__container'>
                        {
                            styles?.links && styles?.links?.map((link, index) => (
                                <div className='footer__linkSection__column' key={index}>
                                    <StyledLinkTitle
                                        className='footer__linkSection__ctaTitle'
                                        href={link?.urlRedirectTo}
                                        target={link?.target}
                                        color= {styles?.firstFontColor ? styles?.firstFontColor : '#000000'} 
                                    >
                                        {link?.displayName}
                                    </StyledLinkTitle>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <StyledTermsSection 
                    className='footer__linkSection__terms'
                    borderColor={styles?.secondFontColor ? styles?.secondFontColor : '#717171'}
                >
                    {
                        styles?.legals && styles?.legals?.map((term, index) => (
                            <div className='footer__linkSection__column' key={index}>
                                <StyledLinkTitle
                                    className='footer__linkSection__ctaTerms'
                                    href={term?.urlRedirectTo}
                                    target={term?.target}
                                    color= {styles?.secondFontColor ? styles?.secondFontColor : '#717171'} 
                                >
                                    {term?.displayName}
                                </StyledLinkTitle>
                            </div>
                        ))
                    }
                </StyledTermsSection>
            </StyledLinkSection>
        </>
    )
}
