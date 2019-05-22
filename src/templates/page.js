import React from 'react';
import { graphql } from 'gatsby';

import BodyDiv from '../components/layout/BodyDiv';
import Helmet from '../components/Helmet';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import SegmentDiv from '../components/general/SegmentDiv';

const Page = ({ data }) => {

    const { contentfulSeo, contentfulIndex, contentfulPage } = data;

    const { slug, longTitle, layout, segments } = contentfulPage;

    const jsx = (

        <BodyDiv
        pageType='page'
        >

            <Helmet
            title={contentfulSeo.title}
            description={longTitle}
            keywords={contentfulSeo.keywords}
            image={contentfulIndex.coverPhoto.fixed.src}
            url={contentfulSeo.baseUrl + slug}
            slug={slug}
            ></Helmet>

            <Header 
            title={longTitle} 
            modifier='page'
            ></Header>

            <Main 
            layout={layout}
            >
            
                {segments.length > 1 
                    ? 
                    segments.map(segment => 
                        <SegmentDiv 
                        segment={segment} 
                        key={segment.id}
                        ></SegmentDiv>
                    )
                    :
                    <SegmentDiv 
                    segment={segments} 
                    key={segments.id}
                    ></SegmentDiv>
                }
            
            </Main>
            
        </BodyDiv>
    );

    return jsx;
};

export default Page;

export const query = graphql`
query($slug: String!){ 
    contentfulSeo {
        id
        title
        description
        keywords
        baseUrl
    }

    contentfulIndex {
        coverPhoto {
            fixed (width: 1200, height: 630, quality: 100) {
                src
            }
        }
    }
    
	contentfulPage (id: { eq: $slug }){
        id
        shortTitle
        slug
        longTitle
        layout
        segments {
            __typename
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
            ... on ContentfulEmail {
                id
                email
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
            ... on ContentfulSingleLine {
                id
                line
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
            ... on ContentfulText {
                id
                text {
                    id
                    childMarkdownRemark {
                        html
                    }
                }
            }
        }
    }
}
`;