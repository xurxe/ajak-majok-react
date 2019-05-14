import React from 'react';
import { Link } from 'gatsby';
import Parser from 'html-react-parser';

import './NavA.css';

const NavA = ({ link }) => {

    const sliceIndex = ('Contentful').length;
    const linkType = (
        (link.__typename)
        .slice(sliceIndex, sliceIndex + 1)
        .toLowerCase()
        .concat((link.__typename).slice(sliceIndex + 1))
    );

    let jsx;

    if (link.__typename === 'ContentfulIndex'){

        jsx = (

            <Link 
            to={'/'}
            className={`NavA NavA___${linkType}`}
            >

                {Parser(link.iconFontAwesome)}

            </Link>

        );
    }

    else if (link.__typename === 'ContentfulPage'){

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
    }

    else if (link.__typename === 'ContentfulElectionLink'){

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
    }

    else if (link.__typename === 'ContentfulSocialMediaLink'){

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
    }

    return jsx;
};

export default NavA;