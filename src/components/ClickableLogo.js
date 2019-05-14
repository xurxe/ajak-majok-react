import React from 'react';
import Img from 'gatsby-image';

import './ClickableLogo.css'

const ClickableLogo = ({ url, logo, alt }) => {
    
    const jsx = (
        <a href={url}>
            <Img 
            alt={alt} 
            fluid={logo.fluid}
            className={`ClickableLogo`}
            fadeIn={false}
            ></Img>
        </a>
    );

    return jsx;
};

export default ClickableLogo;