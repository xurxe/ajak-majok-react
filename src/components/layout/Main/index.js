import React from 'react';

import './styles.css';

const Main = ({ layout, children }) => {
    
    const jsx = (
        <main 
        className={`Main Main___${(layout.toLowerCase())}`}
        >

            {children && children}
            
        </main>
    );

    return jsx;
};

export default Main;