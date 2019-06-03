import React from 'react';
import { graphql } from 'gatsby';

import Helmet from '../components/common/Helmet';

import App from '../components/layout/App';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';

import SegmentDiv from '../components/common/SegmentDiv';

const Page = ({ data }) => {

    const { contentfulSeo, contentfulIndex, contentfulPage } = data;
    const { slug, longTitle, layout, segments } = contentfulPage;

    const jsx = (

        <App
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

                {segments.map((segment) => 
                    <SegmentDiv 
                    segment={segment} 
                    key={segment.id}
                    modifier='page'
                    ></SegmentDiv>
                )}
            
            </Main>
            
        </App>
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
                    fluid (maxWidth: 800, quality: 90) {
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
                    fluid (maxWidth: 1200, quality: 90) {
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
            ... on ContentfulImageGrid {
                id
                photographers
                image1 {
                    id
                    fluid (maxWidth: 800, quality: 90) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                    }
                }
                image2 {
                    id
                    fluid (maxWidth: 800, quality: 90) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                    }
                }
                image3 {
                    id
                    fluid (maxWidth: 800, quality: 90) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                    }
                }
                image4 {
                    id
                    fluid (maxWidth: 800, quality: 90) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                    }
                }
                image5 {
                    id
                    fluid (maxWidth: 800, quality: 90) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                    }
                }
                image6 {
                    id
                    fluid (maxWidth: 800, quality: 90) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                    }
                }
                alt1
                alt2
                alt3
                alt4
                alt5
                alt6
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
                    fluid (maxWidth: 800, quality: 90) {
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
            ... on ContentfulYoutubeVideo {
                id
                url
                alt
            }
        }
    }
}
`;