import React from "react";
import { graphql } from 'gatsby';

import Helmet from '../components/Helmet';

import BodyDiv from '../components/layout/BodyDiv';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';

import CoverPhoto from '../components/general/CoverPhoto';
import SegmentDiv from '../components/general/SegmentDiv';

const IndexPage = ({ data }) => {

    const { contentfulSeo, contentfulIndex } = data;
    
    const { longTitle, subtitle, coverPhoto, badge, layout, segments } = contentfulIndex;

    const jsx = (
        <BodyDiv
        pageType='index'
        >

            <Helmet
            title={contentfulSeo.title}
            description={contentfulSeo.description}
            keywords={contentfulSeo.keywords}
            image={coverPhoto.fixed.src}
            url={contentfulSeo.baseUrl}
            slug=''
            ></Helmet>

            <CoverPhoto
                alt='Ajak Majok seisoo graffittiseinän edessä ja hymyilee'
                coverPhoto={coverPhoto}
                badge={badge}
            ></CoverPhoto>

            <Header 
            title={longTitle}
            subtitle={subtitle}
            modifier='index'
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

export default IndexPage;

export const query = graphql`
query {
    contentfulSeo {
        id
        title
        description
        keywords
        baseUrl
    }
    
    contentfulIndex {
        id
        layout
        longTitle
        subtitle
        coverPhoto {
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
        badge
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