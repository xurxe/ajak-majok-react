import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

const FooterA = (props) => {

    const { link } = props;
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