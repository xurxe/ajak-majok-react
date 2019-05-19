import React from "react";
import { graphql } from 'gatsby';

import BodyDiv from '../layout/BodyDiv'
import Nav from '../layout/Nav';
import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';
import Helmet from '../components/Helmet';
import CoverPhoto from '../components/CoverPhoto';
import EntryDiv from '../entries/EntryDiv';

const IndexPage = ({ data }) => {

    const { contentfulSeo, contentfulIndex } = data;
    
    const { longTitle, subtitle, coverPhoto, badge, layout, entries } = contentfulIndex;

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

            <Nav></Nav>

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
        entries {
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
        }
    }
}
`;