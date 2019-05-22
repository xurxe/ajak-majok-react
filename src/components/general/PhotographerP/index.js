import React from 'react';

import './styles.css';

const PhotographerP = ({ photographer }) => {
    
    const jsx = (
        <p 
        className='PhotographerP'>

            {photographer}

        </p>
    );

    return jsx;
};

export default PhotographerP;