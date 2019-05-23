import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

const PhotographerP = ({ photographer }) => {
    
    const jsx = (
        <p 
        className='PhotographerP'
        >

            {photographer && Parser(photographer)}

        </p>
    );

    return jsx;
};

export default PhotographerP;