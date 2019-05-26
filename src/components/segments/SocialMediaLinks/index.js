import React from 'react';

import './styles.css';

import SocialMediaLink from '../../common/SocialMediaLink';

const SocialMediaLinks = (props) => {

    const { data } = props;
    const { links } = data;

    const jsx = (
        <div 
        className='SocialMediaLinks'
        >

            {links.map(
                (link) => (

                    <SocialMediaLink 
                    key={link.id}
                    link={link}
                    ></SocialMediaLink>

                )
            )}

        </div>

    );

    return jsx;
};

export default SocialMediaLinks;