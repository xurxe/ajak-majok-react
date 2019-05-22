import React from 'react';

import './Header.css';

const Header = ({ title, subtitle, modifier, children }) => {
    
    const jsx = (
        <header 
        className={`Header Header___${modifier}`}
        >

            <h1 
            className={`Header_h1 Header_h1___${modifier}`}
            >

                {title}

            </h1>

            {subtitle && 
                <h2
                className={`Header_h2 Header_h2___${modifier}`}
                >
                    {subtitle}
                </h2>
            }

            {children || null}

        </header>
    );

    return jsx;
};

export default Header;