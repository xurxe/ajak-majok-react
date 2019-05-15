import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import './Footer.css';

import FooterA from '../components/FooterA';
import ClickableLogo from '../components/ClickableLogo';

class Footer extends React.Component {

    render() {
        return (
            <StaticQuery 
            query={
                graphql`
                query {
                    contentfulFooter {
                        id
                        logo {
                            id
                            file {
                                url
                                fileName
                                contentType
                            }
                            fluid {
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
                            file {
                                url
                                fileName
                                contentType
                            }
                            fluid {
                                base64
                                aspectRatio
                                src
                                srcSet
                                srcWebp
                                srcSetWebp
                                sizes
                            }
                        }
                        logoAlt
                        logoLink
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
                const { logo, logoHover, logoAlt, logoLink, ajakCredit, webCredit, photoCredit, socialMediaLinks } = contentfulFooter;

                const jsx = (
                    
                    <footer 
                    className={this.props.className}
                    >
                        <div
                        className='Footer_leftDiv'
                        >
                               
                            <ClickableLogo
                            url={logoLink}
                            logo={logo}
                            logoHover={logoHover}
                            alt={logoAlt}
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
    };
};

export default Footer;