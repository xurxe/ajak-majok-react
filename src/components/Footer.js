import React from 'react';

const Footer = ({ children }) => {

    const jsx = (

        <footer 
        className='Footer'
        >

            {children}
            
        </footer>
    );

    return jsx;
};

export default Footer;