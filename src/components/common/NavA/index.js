import React from 'react';
import { Link } from 'gatsby';
import Parser from 'html-react-parser';

import './styles.css';

// this is a component that decides how to render each type of link in the navigation bad
const NavA = ({ link }) => {

    const { __typename } = link;
    let jsx;

    const renderIndexLink = () => {
        jsx = (
            <Link 
            to={'/'}
            className='NavA NavA___index hvr-grow'
            >

                {Parser(link.iconFontAwesome)}

            </Link>
        );
    };

    const renderPageLink = () => {
        jsx = (
            <Link 
            to={`/${link.slug}`}
            className='NavA NavA___page hvr-grow'
            partiallyActive={true}
            activeClassName='NavA NavA___page NavA___page___active hvr-grow'
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
            className='NavA NavA___election hvr-grow'
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
            className='NavA NavA___socialMedia hvr-grow'
            >

                {Parser(link.iconFontAwesome)}

            </a>
        );
    };

    if (__typename === 'ContentfulIndex'){

        renderIndexLink();
    }

    else if (__typename === 'ContentfulPage' 
    // pages with slugs 'column' and 'grid' are examples for the client, so they should not be rendered
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