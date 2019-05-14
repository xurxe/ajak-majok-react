import React from 'react';
import { graphql } from 'gatsby';

import BodyDiv from '../components/BodyDiv'
import Nav from '../components/Nav';
import Header from '../components/Header';
import Main from '../components/Main';
import EntryDiv from '../components/EntryDiv';
import Footer from '../components/Footer'


const Page = ({data}) => {
    const {contentfulPage} = data;
    const {longTitle, layout, entries} = contentfulPage;

    const jsx = (

        <BodyDiv>

            <Nav></Nav>

            <Header 
            title={longTitle} 
            modifier='page'
            ></Header>

            <Main 
            layout={layout}>

                {entries && entries.map(entry => 
                    <EntryDiv 
                    entry={entry} 
                    key={entry.id}
                    ></EntryDiv>
                )}

            </Main>

            <Footer></Footer>
            
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
                    fluid {
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
                    fluid {
                        base64
                        tracedSVG
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
                    fluid {
                        base64
                        tracedSVG
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
        }
    }
}
`;