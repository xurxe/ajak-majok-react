import React from 'react';

import './styles.css';

import Nav from '../Nav';
import Footer from '../Footer';

// this component contains everything else 
const App = ({ pageType, children }) => { 

    const jsx = (
        <div 
        className={`App App___${pageType}`}
        >

            <Nav></Nav>

            <span id='top'></span>

            {children}

            <Footer></Footer>

        </div>
    );

    return jsx;
};

export default App;