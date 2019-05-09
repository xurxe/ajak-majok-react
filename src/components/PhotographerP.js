import React from 'react';

const PhotographerP = ({photographer}) => {
    
    const jsx = (
        <p 
        className='PhotographerP'>

            {photographer}

        </p>
    )

    return jsx;
};

export default PhotographerP;