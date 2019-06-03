import React from 'react';
import Img from "gatsby-image/withIEPolyfill";

import './styles.css';

import Badge from '../Badge';

// this is the photo shown at the top of the index page
const CoverPhoto = ({ alt, coverPhoto, badge }) => {

    const jsx = (
        <div
        className='CoverPhoto'
        >
            <Img 
            alt={alt} 
            fluid={coverPhoto.fluid}
            className='CoverPhoto_img'
            fadeIn={true}
            objectFit="cover"
            objectPosition="50% 40%"
            ></Img>

            {badge && 
                <Badge
                badge={badge}
                ></Badge>
            }
        </div>

    );
    
    return jsx;
};

export default CoverPhoto;