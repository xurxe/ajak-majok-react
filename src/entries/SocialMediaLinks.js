import React from 'react';

import './SocialMediaLinks.css';

import SocialMediaLink from '../components/SocialMediaLink';

const SocialMediaLinks = ({ data }) => {

    const { links } = data;

    const jsx = (
        <div 
        className={`SocialMediaLinks`}
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