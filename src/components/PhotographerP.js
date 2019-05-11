import React from 'react';
import './PhotographerP.css'

const PhotographerP = ({ photographer }) => {
    
    const jsx = (
        <p 
        className='PhotographerP'>

            {photographer}

        </p>
    )

    return jsx;
};

export default PhotographerP;