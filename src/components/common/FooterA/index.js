import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

// these are the social media links shown in the footer
const FooterA = ({ link }) => {
    const { url, iconFontAwesome } = link;

    const jsx = (

        <a 
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='FooterA'
        >

            {Parser(iconFontAwesome)}

        </a>

    );

    return jsx;
};

export default FooterA;