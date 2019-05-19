import React from 'react';
import { Link } from 'gatsby';
import Parser from 'html-react-parser';

import './NavA.css';

const NavA = ({ link }) => {

    const {__typename} = link;

    const sliceIndex = ('Contentful').length;

    const linkType = (
        (__typename)
        .slice(sliceIndex, sliceIndex + 1)
        .toLowerCase()
        .concat((__typename).slice(sliceIndex + 1))
    );

    let jsx;

    const renderIndexLink = () => {

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

        jsx = (
            <Link 
            to={'/' + link.slug}
            className={`NavA NavA___${linkType}`}
            partiallyActive={true}
            activeClassName={`NavA NavA___${linkType} NavA_page___active`}
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
            className={`NavA NavA___${linkType}`}
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
            className={`NavA NavA___${linkType}`}
            >

                {Parser(link.iconFontAwesome)}

            </a>
        );
    };

    if (linkType === 'index'){
        renderIndexLink();
    }

    else if (linkType === 'page'){
        renderPageLink();
    }

    else if (linkType === 'electionLink'){
        renderElectionLink();
    }

    else if (linkType === 'socialMediaLink'){
        renderSocialMediaLink();
    }

    else {

        jsx = (
            <p
            className={`NavA`}
            >
                ??
            </p>
        );
    };

    return jsx;
};

export default NavA;