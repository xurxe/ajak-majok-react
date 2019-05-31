import React from 'react';

import './styles.css';

const Main = (props) => {
    const { layout, children } = props;
    
    const jsx = (
        <main 
        className={`Main Main___${(layout.toLowerCase())}`}
        >

            {children || null}
            
        </main>
    );

    return jsx;
};

export default Main;