import React from 'react';
import Img from 'gatsby-image';

import './ClickableLogo.css'

const ClickableLogo = ({ url, logo, /* logoHover,*/ modifier, alt }) => {

    const jsx = (
        <a 
        href={url}

        >
            <Img 
            alt={alt} 
            fluid={logo.fluid}
            fadeIn={false}
            className={`ClickableLogo ClickableLogo___${modifier}`}
            ></Img>
        </a>
    );

    return jsx;
};

export default ClickableLogo;