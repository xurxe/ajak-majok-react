import React from 'react';

import './SingleLine.css'

const singleLine = ({ data }) => {

    const { line } = data;

    const jsx = (
        <div 
        className={`SingleLine`}
        >

        <p
        className={`SingleLine_p`}
        >
        
            {line}
        
        </p>

        </div>
    );

    return jsx;
}

export default singleLine;