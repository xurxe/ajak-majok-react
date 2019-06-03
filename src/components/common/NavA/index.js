import React from 'react';
import { Link } from 'gatsby';
import Parser from 'html-react-parser';

import './styles.css';

// this is a component that decides how to render each type of link in the navigation bad
const NavA = ({ link }) => {

    const { __typename } = link;
    let jsx;

    if (__typename === 'ContentfulIndex'){

        jsx = (
            <Link 
            to={'/'}
            className='NavA NavA___index hvr-grow'
            >

                {Parser(link.iconFontAwesome)}

            </Link>
        );
    }

    else if (__typename === 'ContentfulPage' 
    // pages with slugs 'column' and 'grid' are examples for the client, so they should not be rendered
    && link.slug !== 'column' 
    && link.slug !== 'grid'){

        jsx = (
            <Link 
            to={`/${link.slug}`}
            className='NavA NavA___page hvr-underline-from-center'
            partiallyActive={true}
            activeClassName='NavA___page___active'
            >

                {link.shortTitle}

            </Link>
        );
    }

    else if (__typename === 'ContentfulElectionLink'){

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
    }

    else if (__typename === 'ContentfulSocialMediaLink'){

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