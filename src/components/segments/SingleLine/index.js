import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

const SingleLine = ({ data }) => {
    const { line } = data;

    const jsx = (
        <div 
        className='SingleLine'
        >

            <p
            className='SingleLine_p'
            >
            
                {Parser(line)}
            
            </p>

        </div>
    );

    return jsx;
}

export default SingleLine;