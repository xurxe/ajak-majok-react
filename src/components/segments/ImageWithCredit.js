import React from 'react';

import './ImageWithCredit.css';

import Image from '../Image';
import PhotographerP from '../PhotographerP';

const ImageWithCredit = ({ data }) => {

    const { image, alt, photographer, shadow } = data;
    
    const color = (shadow.toLowerCase());

    const jsx = (
        <div 
        className='ImageWithCredit'
        >

            <Image 
            alt={alt} 
            image={image}
            color={color}
            ></Image>

            {photographer &&              
                <PhotographerP
                photographer={photographer}
                ></PhotographerP>
            }

        </div>

    );

    return jsx;
};

export default ImageWithCredit;