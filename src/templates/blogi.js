import React from 'react';
import { graphql } from 'gatsby';

import BodyDiv from '../layout/BodyDiv';
import Helmet from '../components/Helmet';
import Header from '../layout/Header';
import Main from '../layout/Main';
import Image from '../components/Image';
import PhotographerP from '../components/PhotographerP';
import SegmentDiv from '../components/SegmentDiv';

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