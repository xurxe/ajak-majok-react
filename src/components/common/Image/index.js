import React from 'react';
import Img from 'gatsby-image';

import './styles.css';

// this is an image with alt text and an optional colored shadow
// it is one of the most commonly-used components in this project. 
const Image = (props) => {

    const { alt, image, color } = props;
    
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