import React from 'react';

import './Header.css'

const Header = ({ title, subtitle, modifier, children }) => {
    
    let jsx;

    if (subtitle) {
        jsx = (
            <header 
            className={`Header Header___${modifier}`}
            >
    
                <h1 
                className={`Header_h1 Header_h1___${modifier}`}
                >
    
                    {title}
    
                </h1>
    
                <h2
                className={`Header_h2 Header_h2___${modifier}`}
                >
                    {subtitle}
                </h2>
    
                {children || null}
    
            </header>
        );
    }

    else {
        jsx = (
            <header 
            className={`Header Header___${modifier}`}
            >
    
                <h1 
                className={`Header_h1 Header_h1___${modifier}`}
                >
    
                    {title}
    
                </h1>
    
                {children || null}
    
            </header>
        );
    };

    return jsx;
};

export default Header;