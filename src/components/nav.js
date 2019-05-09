import React from 'react';
import ReactDOM from 'react-dom';
import { StaticQuery, graphql } from 'gatsby';

import './Nav.css';

import NavA from './NavA';

const handleClick = (e) => {
    const node = ReactDOM.findDOMNode(e.target);
    console.log(node)
}


const Nav = () => (
    <StaticQuery 
    query={
        graphql`
        query {
            contentfulNavigationBar{
                id
                internalLinks {
                    ... on ContentfulIndex {
                        id
                        longTitle
                        iconFontAwesome
                    }
                    ... on ContentfulPage {
                        id
                        shortTitle
                        slug
                    }
                }
                externalLinks {
                    ... on ContentfulElectionLink {
                        id
                        name
                        url
                    }
                    ... on ContentfulSocialMediaLink {
                        id
                        name
                        url
                        iconFontAwesome
                    }
                }
            }
        }    
    `}
    render={data => {
        const {contentfulNavigationBar} = data;
        const {internalLinks, externalLinks} = contentfulNavigationBar;
        const jsx = (
            <nav className='Nav'>

                <p className='Nav_p'>
                    Ajak Majok
                </p>

                <button 
                className='Nav_button'
                onClick={handleClick}
                >
                    <i className="fas fa-bars"></i>

                </button>

                <div 
                className={`Nav_div Nav_div___internalLinks`}>

                    {internalLinks.map(
                        (link) => (

                            <NavA 
                            key={link.id}
                            link={link}
                            ></NavA>

                        )
                    )}

                </div>

                <div 
                className={`Nav_div Nav_div___externalLinks`}
                >

                    {externalLinks.map(
                        (link) => (

                            <NavA 
                            key={link.id}
                            link={link}
                            ></NavA>

                        )
                    )}

                </div>

            </nav>
        );

        return jsx;
    }}
    />
);

export default Nav;