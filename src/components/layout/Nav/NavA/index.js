import React from 'react';
import { Link } from 'gatsby';
import Parser from 'html-react-parser';

import './styles.css';

const NavA = ({ link }) => {

    const { __typename } = link;

    let jsx;

    const renderIndexLink = () => {

        const linkType = 'index'

        jsx = (
            <Link 
            to={'/'}
            className={`NavA NavA___${linkType}`}
            >

                {Parser(link.iconFontAwesome)}

            </Link>
        );
    };

    const renderPageLink = () => {

        const linkType = 'page'

        jsx = (
            <Link 
            to={`/${link.slug}`}
            className={`NavA NavA___${linkType}`}
            partiallyActive={true}
            activeClassName={`NavA NavA___${linkType} NavA___${linkType}___active`}
            >

                {link.shortTitle}

            </Link>
        );
    };

    const renderElectionLink = () => {

        const linkType = 'election'

        jsx = (
            <a 
            href={link.url}
            target='_blank'
            rel="noopener noreferrer"
            className={`NavA NavA___${linkType}`}
            >

                {link.name}

            </a>
        );
    };

    const renderSocialMediaLink = () => {

        const linkType = 'socialMedia'

        jsx = (
            <a 
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className={`NavA NavA___${linkType}`}
            >

                {Parser(link.iconFontAwesome)}

            </a>
        );
    };

    if (__typename === 'ContentfulIndex'){
        renderIndexLink();
    }

    else if (__typename === 'ContentfulPage'){
        renderPageLink();
    }

    else if (__typename === 'ContentfulElectionLink'){
        renderElectionLink();
    }

    else if (__typename === 'ContentfulSocialMediaLink'){
        renderSocialMediaLink();
    }

    else {

        jsx = (
            <p
            className='NavA'
            >
                ??
            </p>
        );
    };

    return jsx;
};

export default NavA;