import React from 'react'
import { graphql } from 'gatsby'

import Nav from '../components/Nav'
import Header from '../components/Header'
import BlogLink from '../components/BlogLink'
import Testimonial from '../components/Testimonial'

const Page = ({data}) => {
    const {contentfulPage} = data;
    const {shortTitle, longTitle, /* layout, */ entries} = contentfulPage;

    if (shortTitle === 'blogit') {
        return (
            <div>
                <Nav></Nav>

                <Header title={longTitle}></Header>

                {entries.map(entry => 
                    <BlogLink entry={entry} key={entry.id}></BlogLink>
                )}
            </div>
        )
    }

    else if (shortTitle === 'Ajakista') {
        return (
            <div>
                <Nav></Nav>

                <Header title={longTitle}></Header>

                {entries.map(entry => 
                    <Testimonial entry={entry} key={entry.id}></Testimonial>
                )}
            </div>
        )
    }

    else {
        return (
            <div>
                <Nav></Nav>

                <Header title={longTitle}></Header>

            </div>
        )
    }
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
            }
        }
    }
}
`