
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import './styles.css';

import ClickableLogo from '../../segments/ClickableLogo';
import FooterA from '../../common/FooterA';

const Footer = () => {

    // to fetch from Contentful into components, you need to wrap it all in the StaticQuery component
    const staticQuery = (
        <StaticQuery 
        query={
            graphql`
            query {
                contentfulFooter {
                    id
                    logo {
                        id
                        url
                        logo {
                            id
                            fluid (quality: 100) {
                                base64
                                aspectRatio
                                src
                                srcSet
                                srcWebp
                                srcSetWebp
                                sizes
                            }
                        }
                        logoHover {
                            id
                            fluid (quality: 100) {
                                base64
                                aspectRatio
                                src
                                srcSet
                                srcWebp
                                srcSetWebp
                                sizes
                            }
                        }
                        alt
                        url
                    }
                    ajakCredit
                    webCredit
                    photoCredit
                    socialMediaLinks {
                        id
                        name
                        url
                        iconFontAwesome
                    }
                }
            }
            `    
        }
        render={data => {
            const { contentfulFooter } = data;
            const { logo, ajakCredit, webCredit, photoCredit, socialMediaLinks } = contentfulFooter;

            const jsx = (
                <footer 
                className='Footer'
                >
                    <div
                    className='Footer_leftDiv'
                    >
                            
                        <ClickableLogo
                        data={logo}
                        modifier='footer'
                        ></ClickableLogo>

                        <p 
                        className='Footer_ajakCredit'
                        >
                        
                            {ajakCredit}

                        </p>

                    </div>

                    <div
                    className='Footer_centerDiv'
                    >

                        <h1 
                        className='Footer_h1 Footer_h1___webCredit'
                        >

                            Sivusto:

                        </h1>

                        <ul
                        className='Footer_ul Footer_ul___webCredit'
                        >
                            <li
                            className='Footer_li Footer_li___webCredit'
                            >
                                {webCredit}
                            </li>
                        
                        </ul>

                        <div
                        className='Footer_photoCredit'
                        >

                            <h1 
                            className='Footer_h1 Footer_h1___photoCredit'
                            >

                                Valokuvat:

                            </h1>

                            <ul
                            className='Footer_ul Footer_ul___photoCredit'
                            >

                                {photoCredit.map(
                                    (photographer) => (
            
                                        <li 
                                        key={photographer}
                                        className='Footer_li Footer_li___photoCredit'
                                        >
                                        
                                            {photographer}

                                        </li>
            
                                    )
                                )}

                            </ul>
                        </div>
                    </div>

                    <div
                    className='Footer_rightDiv'>
                        <div 
                        className='Footer_socialMediaLinks'
                        >
        
                            {socialMediaLinks.map(
                                (link) => (
        
                                    <FooterA 
                                    key={link.id}
                                    link={link}
                                    ></FooterA>
        
                                )
                            )}
        
                        </div>

                        <a
                        className='Footer_backToTop'
                        href='#top'
                        aria-label='Takaisin ylös'
                        >
                            <i className="fas fa-arrow-up"></i>
                        </a>
                    </div>
    
                </footer>
            );
    
            return jsx;
        }}
        />
    );

    return staticQuery;
};

export default Footer;