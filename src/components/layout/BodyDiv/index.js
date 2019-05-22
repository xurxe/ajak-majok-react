import React from 'react';

import './styles.css';

import Nav from '../Nav';
import Footer from '../Footer';

const BodyDiv = ({ pageType, children }) => {

    const jsx = (
        <div 
        className={`BodyDiv BodyDiv___${pageType}`}
        >

            <Nav></Nav>

            <span id='top'></span>

            {children}

            <Footer
            className='Footer'
            ></Footer>

        </div>
    );

    return jsx;
};

export default BodyDiv;