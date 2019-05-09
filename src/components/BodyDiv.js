import React from 'react';

const BodyDiv = ({children}) => {

    const jsx = (
        <div 
        className='BodyDiv'
        >

            {children}
            
        </div>
    );

    return jsx;
};

export default BodyDiv;