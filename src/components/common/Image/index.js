import React from 'react';
import Img from 'gatsby-image';

import './styles.css';

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