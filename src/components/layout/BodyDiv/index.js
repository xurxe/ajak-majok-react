import React from 'react';

import './styles.css';

import Nav from '../Nav';
import Footer from '../Footer';

const BodyDiv = (props) => { 
    
    const { pageType, children } = props;

    const jsx = (
        <div 
        className={`BodyDiv BodyDiv___${pageType}`}
        >

            <Nav></Nav>

            <span id='top'></span>

            {children}

            <Footer></Footer>

        </div>
    );

    return jsx;
};

export default BodyDiv;