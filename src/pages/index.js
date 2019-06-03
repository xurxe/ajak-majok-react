import React from "react";
import { graphql } from 'gatsby';
import Parser from 'html-react-parser';

import Helmet from '../components/common/Helmet';

import App from '../components/layout/App';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';

import CoverPhoto from '../components/common/CoverPhoto';
import SegmentDiv from '../components/common/SegmentDiv';

const IndexPage = ({ data }) => {

    const { contentfulSeo, contentfulIndex } = data;
    const { longTitle, subtitle, coverPhoto, badge, layout, segments } = contentfulIndex;

    const jsx = (
        <App
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
            title={Parser(longTitle)}
            subtitle={Parser(subtitle)}
            modifier='index'
            ></Header>

            <Main 
            layout={layout}
            >

                {segments.map(segment => 
                    <SegmentDiv 
                    segment={segment} 
                    key={segment.id}
                    ></SegmentDiv>
                )}

            </Main>

        </App>
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
            fluid (maxWidth: 3200, quality: 100) {
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