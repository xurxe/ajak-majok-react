import React from 'react';
import { graphql } from 'gatsby';

import Helmet from '../components/Helmet';

import BodyDiv from '../components/layout/BodyDiv';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';

import Image from '../components/general/Image';
import PhotographerP from '../components/general/PhotographerP';
import SegmentDiv from '../components/general/SegmentDiv';

const BlogPage = ({ data }) => {

    const { contentfulSeo, contentfulBlogPost } = data;

    const { title, slug, date, alsoPostedIn, alsoPostedInUrl, image, alt, photographer, segments } = contentfulBlogPost;

    const formattedDate = new Date(date).toLocaleDateString('fi-FI', {day: '2-digit', month: '2-digit', year: 'numeric'});
    
    const jsx = (
        <BodyDiv
        pageType='blogi'
        >
            <Helmet
            title={contentfulSeo.title}
            description={title}
            keywords={contentfulSeo.keywords}
            image={image.fixed.src}
            url={contentfulSeo.baseUrl + 'blogit/' + slug}
            slug={slug}
            ></Helmet>

            <Header 
            title={title} 
            modifier='blogi'
            >

                <time
                className='Header_time___blogi'
                >
                    {formattedDate}
                </time>

                { alsoPostedIn &&             
                <a 
                href={alsoPostedInUrl}
                className='Header_a___blogi'
                >

                    {alsoPostedIn}

                </a>}

            </Header>

            <Main 
            layout='column'
            >

                <Image 
                alt={alt} 
                image={image}
                color='yellow'
                ></Image>

                <PhotographerP
                data={photographer}
                ></PhotographerP>
                
                {segments.map(segment => 
                    <SegmentDiv 
                    segment={segment} 
                    key={segment.id}
                    ></SegmentDiv>
                )}

            </Main>    

        </BodyDiv>
    );

    return jsx;
};

export default BlogPage;

export const query = graphql`
query($slug: String!){ 
    contentfulSeo {
        id
        title
        keywords
        baseUrl
    }
    
	contentfulBlogPost (id: { eq: $slug }){
        id
        title
        slug
        date
        alsoPostedIn
        alsoPostedInUrl
        image {
            id
            fixed (width: 1200, height: 630, quality: 100) {
                src
            }
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
        segments {
            __typename
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
                url
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
            ... on ContentfulImageGrid {
                id
                photographers
                image1 {
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
                image2 {
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
                image3 {
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
                image4 {
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
                image5 {
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
                image6 {
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
                alt1
                alt2
                alt3
                alt4
                alt5
                alt6
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