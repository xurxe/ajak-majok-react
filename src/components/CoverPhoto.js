import React from 'react';
import Img from 'gatsby-image';

import './CoverPhoto.css'

const CoverPhoto = ({ alt, coverPhoto }) => {
    
    const jsx = (
        <Img 
        alt={alt} 
        fluid={coverPhoto.fluid}
        className={`CoverPhoto`}
        fadeIn={true}
        ></Img>
    );

    return jsx;
};

export default CoverPhoto;