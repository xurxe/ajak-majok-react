import React from 'react'

const PhotographerP = ({photographer}) => {
    
    const jsx = (
        <p 
        className='p-photographer'>

            {photographer}

        </p>
    )

    return jsx;
};

export default PhotographerP;