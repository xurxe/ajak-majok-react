import React from 'react';

import './ImageWithCredit.css';

import Image from './Image';
import PhotographerP from './PhotographerP';

const ImageWithCredit = ({ data }) => {
    const { image, alt, photographer, shadow } = data;
    const color = (shadow.toLowerCase());

    let jsx;

    if (photographer) {
        jsx = (
            <div 
            className='ImageWithCredit'
            >

                <Image 
                alt={alt} 
                image={image}
                color={color}
                ></Image>

                <PhotographerP
                photographer={photographer}
                ></PhotographerP>

            </div>

        );
    }

    else {
        jsx = (
            <div 
            className='ImageWithCredit'
            >

                <Image 
                alt={alt} 
                image={image}
                color={color}
                ></Image>

                <PhotographerP
                photographer={photographer}
                ></PhotographerP>

            </div>

        );
    }

    return jsx;
};

export default ImageWithCredit;