import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

// this the photo credit (if any) shown below photos 
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