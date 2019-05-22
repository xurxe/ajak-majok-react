import React from 'react';

import './BodyDiv.css';

import Nav from './Nav';
import Footer from './Footer';

const BodyDiv = ({ pageType, children }) => {

    const jsx = (
        <div 
        className={`BodyDiv BodyDiv___${pageType}`}
        >

            <span id='top'></span>

            <Nav></Nav>

            {children}

            <Footer
            className='Footer'
            ></Footer>

        </div>
    );

    return jsx;
};

export default BodyDiv;