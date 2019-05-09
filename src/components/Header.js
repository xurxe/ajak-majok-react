import React from 'react';

const Header = ({title, modifier, children}) => {
    
    const jsx = (
        <header 
        className={`Header Header___${modifier}`}
        >

            <h1 
            className={`Header_h1___${modifier}`}
            >

                {title}

            </h1>

            {children || null}

        </header>
    );

    return jsx;
};

export default Header;