import React from 'react';

import './ImageGrid.css'

import Image from './Image'
import PhotographerP from './PhotographerP';

const ImageGrid = ({ photographers, images/* , alts  */, className}) => {

    const jsx = (
        <div 
        className={className}
        >
            <div
            className='ImageGrid'
            >
                {images.map(image => 
                    <Image 
                    key={image.id}
                    alt='' 
                    image={image}
                    color='yellow'
                    ></Image>
                )}
            </div>

            <PhotographerP
            photographer={photographers}
            ></PhotographerP>
        </div>

    );

    return jsx;
};

export default ImageGrid;