import React from 'react';
import Parser from 'html-react-parser';

import './SocialMediaLink.css';

const SocialMediaLink = ({ link }) => {

    const { url, iconFontAwesome } = link;

    const jsx = (
        <a 
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='SocialMediaLink'
        >

            {Parser(iconFontAwesome)}

        </a>
    );

    return jsx;
};

export default SocialMediaLink;