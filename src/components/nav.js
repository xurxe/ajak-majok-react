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
        return (
            <div>
                <ul>
                    {internalLinks.map(
                        (link) => 
                        <li key={link.id}>
                            <Link to={'/' + link.slug}>
                                {link.shortTitle}
                            </Link>
                        </li>
                    )}
                </ul>

                <ul>
                    {externalLinks.map(
                        (link) => 
                        <li key={link.id}>
                            <a key={link.id} href={link.url}>
                                {link.name}
                            </a>
                        </li>
                    )}
                </ul>

            </div>
        )
    }}
    />
)

export default Nav;