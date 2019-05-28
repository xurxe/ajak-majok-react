import React from 'react';
import { Link } from 'gatsby';
import Parser from 'html-react-parser';

import './styles.css';

const NavA = ({ link }) => {

    const { __typename } = link;

    let jsx;

    const renderIndexLink = () => {

        jsx = (
            <Link 
            to={'/'}
            className='NavA NavA___index'
            >

                {Parser(link.iconFontAwesome)}

            </Link>
        );
    };

    const renderPageLink = () => {

        jsx = (
            <Link 
            to={`/${link.slug}`}
            className='NavA NavA___page'
            partiallyActive={true}
            activeClassName='NavA NavA___page NavA___page___active'
            >

                {link.shortTitle}

            </Link>
        );
    };

    const renderElectionLink = () => {

        jsx = (
            <a 
            href={link.url}
            target='_blank'
            rel="noopener noreferrer"
            className='NavA NavA___election'
            >

                {link.name}

            </a>
        );
    };

    const renderSocialMediaLink = () => {

        jsx = (
            <a 
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className='NavA NavA___socialMedia'
            >

                {Parser(link.iconFontAwesome)}

            </a>
        );
    };

    if (__typename === 'ContentfulIndex'){

        renderIndexLink();
    }

    else if (__typename === 'ContentfulPage' 
    /* pages with slugs 'column' and 'grid' are examples for the client, so they should not be rendered */
    && link.slug !== 'column' 
    && link.slug !== 'grid'){

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
                ?
            </p>
        );
    };

    return jsx;
};

export default NavA;