import React from 'react';

import './styles.css';

import Image from '../../common/Image';
import PhotographerP from '../../common/PhotographerP';

const ImageGrid = (props) => {

    const { data } = props;
    const { photographers, image1, image2, image3, image4, image5, image6, alt1, alt2, alt3, alt4, alt5, alt6 } = data;
    const images = [image1, image2, image3, image4, image5, image6];
    const alts = [alt1, alt2, alt3, alt4, alt5, alt6];

    const jsx = (
        <div 
        className='ImageGrid'
        >
            <div
            className='ImageGrid_div'
            >
                {images.map((image, i) => 
                    <Image 
                    key={image.id}
                    alt={alts[i]} 
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