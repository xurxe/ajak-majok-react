import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'


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
            <nav>
                <ul 
                className={`NavDiv NavDiv___internalLinks`}>

                    {internalLinks.map(
                        (link) => (
                            <li 
                            key={link.id}
                            className={`NavDiv-li`}
                            >

                                <Link 
                                to={'/' + link.slug}
                                className={`NavDiv-a`}
                                >

                                    {link.shortTitle}

                                </Link>

                            </li>
                        )
                    )}

                </ul>

                <ul 
                className={`NavDiv NavDiv___externalLinks`}
                >

                    {externalLinks.map(
                        (link) => (
                            <li 
                            key={link.id}
                            className={`NavDiv-li`}
                            >

                                <a 
                                key={link.id} 
                                href={link.url}
                                className={`NavDiv-a`}
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
)

export default Nav;