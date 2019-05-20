import React from 'react';

import './BodyDiv.css';

const BodyDiv = ({ pageType, children }) => {

    const jsx = (
        <div 
        className={`BodyDiv BodyDiv___${pageType}`}
        >

            {children}

        </div>
    );

    return jsx;
};

export default BodyDiv;