import React from 'react';
import Img from 'gatsby-image';

import './CoverPhoto.css';

import Badge from './Badge';

const CoverPhoto = ({ alt, coverPhoto, badge }) => {

    let jsx;

    if (badge) {
        jsx = (
            <div
            className='CoverPhoto'
            >
                <Img 
                alt={alt} 
                fluid={coverPhoto.fluid}
                className={`CoverPhoto_img`}
                fadeIn={true}
                ></Img>
    
                <Badge
                badge={badge}
                ></Badge>
            </div>
    
        );
    }

    else {
        jsx = (
            <div>
                <Img 
                alt={alt} 
                fluid={coverPhoto.fluid}
                className={`CoverPhoto`}
                fadeIn={true}
                ></Img>
            </div>
        );
    };
    
    return jsx;
};

export default CoverPhoto;