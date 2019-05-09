import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';


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
                <ul 
                className={`Nav_ul Nav_ul___internalLinks`}>

                    {internalLinks.map(
                        (link) => (
                            <li 
                            key={link.id}
                            className={`Nav_li`}
                            >

                                <Link 
                                to={'/' + link.slug}
                                className={`Nav_a`}
                                >

                                    {link.shortTitle}

                                </Link>

                            </li>
                        )
                    )}

                </ul>

                <ul 
                className={`Nav_ul Nav_ul___externalLinks`}
                >

                    {externalLinks.map(
                        (link) => (
                            <li 
                            key={link.id}
                            className={`Nav_li`}
                            >

                                <a 
                                key={link.id} 
                                href={link.url}
                                className={`Nav_a`}
                                >

                                    {link.name}

                                </a>

                            </li>
                        )
                    )}

                </ul>

            </nav>
        );

        return jsx;
    }}
    />
);

export default Nav;