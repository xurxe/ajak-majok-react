import React from 'react'
import Img from 'gatsby-image'

const Image = ({entry}) => {
    const {image, alt, photographer/* , shadow */} = entry;
    
    return (
        <div>
            <Img alt={alt} fluid={image.fluid}></Img>

            <p>
                {photographer}
            </p>
        </div>
    );
};

export default Image;