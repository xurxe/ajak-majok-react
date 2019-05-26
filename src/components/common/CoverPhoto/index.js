import React from 'react';
import Img from 'gatsby-image';

import './styles.css';

import Badge from '../Badge';

const CoverPhoto = (props) => {

    const { alt, coverPhoto, badge } = props;

    const jsx = (
        <div
        className='CoverPhoto'
        >
            <Img 
            alt={alt} 
            fluid={coverPhoto.fluid}
            className='CoverPhoto_img'
            fadeIn={true}
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