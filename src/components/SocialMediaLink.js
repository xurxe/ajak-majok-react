import React from 'react';
import Parser from 'html-react-parser';

import './SocialMediaLink.css';

const SocialMediaLink = ({ url, iconFontAwesome }) => {

    const jsx = (

        <a 
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className={`SocialMediaLink`}
        >

            {Parser(iconFontAwesome)}

        </a>

    );

    return jsx;
};

export default SocialMediaLink;