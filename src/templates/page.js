import React from 'react';
import { graphql } from 'gatsby';

import BodyDiv from '../layout/BodyDiv';
import Nav from '../layout/Nav';
import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';

import EntryDiv from '../components/EntryDiv';

const Page = ({ data }) => {
    const { contentfulPage } = data;
    const { slug, longTitle, layout, entries } = contentfulPage;

    const jsx = (

        <BodyDiv
        slug={slug}
        >

            <Nav></Nav>

            <Header 
            title={longTitle} 
            modifier='page'
            ></Header>

            <Main 
            layout={layout}
            >
            
                {entries && entries.map(entry => 
                    <EntryDiv 
                    entry={entry} 
                    key={entry.id}
                    ></EntryDiv>
                )}
            
            </Main>

            <Footer
            className='Footer'
            ></Footer>
            
        </BodyDiv>
    );

    return jsx;
};

export default Page;

export const query = graphql`
query($slug: String!){ 
	contentfulPage (id: { eq: $slug }){
        id
        shortTitle
        slug
        longTitle
        layout
        entries {
            __typename
            ... on ContentfulText {
                id
                text {
                    id
                    childMarkdownRemark {
                        html
                    }
                }
            }
          
            ... on ContentfulImage {
                id
                image {
                    id
                    fluid (quality: 100) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                    }
                }
                alt
                photographer
                shadow
            }
            
            ... on ContentfulTestimonial {
                id
                name
                occupation
                image {
                    id
                    fluid (quality: 100) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                    }
                }
                alt
                quote {
                    id
                    childMarkdownRemark {
                        html
                    }
                }
                photographer
            }
          
            ... on ContentfulBlogPost {
                id
                title
                slug
                image {
                    id
                    fluid (quality: 100) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                    }
                }
                alt
            }

            ... on ContentfulEmail {
                id
                email
            }

            ... on ContentfulSocialMediaLinks {
                id
                links {
                    id
                    name
                    url
                    iconFontAwesome
                }
            }
            ... on ContentfulClickableLogo {
                id
                url
                logo {
                    id
                    fluid (quality: 100) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                    }
                }
                logoHover {
                    id
                    fluid (quality: 100) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                    }
                }
                alt
            }
            ... on ContentfulSingleLine {
                id
                line
            }
        }
    }
}
`;