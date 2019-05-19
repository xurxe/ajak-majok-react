import React from 'react';
import Img from 'gatsby-image';

import './Image.css';

const Image = ({ alt, image, color }) => {
    
    const jsx = (
        <Img 
        alt={alt} 
        fluid={image.fluid}
        className={`Image Image___${color}Shadow`}
        fadeIn={true}
        ></Img>
    );

    return jsx;
};

export default Image;