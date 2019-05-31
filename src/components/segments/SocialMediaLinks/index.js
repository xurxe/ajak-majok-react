import React from 'react';
import Parser from 'html-react-parser';

import './styles.css';

const SocialMediaLinks = (props) => {

    const { data } = props;
    const { links } = data;

    const jsx = (
        <div 
        className='SocialMediaLinks'
        >

            {links.map(
                (link) => (

                    <a 
                    key={link.id}
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='SocialMediaLink'
                    >
            
                        {Parser(link.iconFontAwesome)}
            
                    </a>

                )
            )}

        </div>

    );

    return jsx;
};

export default SocialMediaLinks;