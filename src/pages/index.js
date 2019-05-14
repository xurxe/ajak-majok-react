import React from "react";
import { graphql } from 'gatsby';

import BodyDiv from '../components/BodyDiv'
import Nav from '../components/Nav';
import Header from '../components/Header';
import Main from '../components/Main';
import CoverPhoto from '../components/CoverPhoto';
import EntryDiv from '../components/EntryDiv';
import Footer from '../components/Footer';

const IndexPage = ({ data }) => {
    const { contentfulIndex } = data;
    const { longTitle, coverPhoto, layout, entries } = contentfulIndex;

    const jsx = (
        <BodyDiv>

            <Nav></Nav>

            <CoverPhoto
                alt='Ajak Majok seisoo graffittiseinän edessä ja hymyilee'
                // fix
                coverPhoto={coverPhoto}
            ></CoverPhoto>

            <Header 
            title={longTitle}
            modifier='index'
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

export default IndexPage;

export const query = graphql`
query {
    contentfulIndex {
        id
        layout
        longTitle
        coverPhoto {
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
        entries {
            __typename
            ... on ContentfulClickableLogo {
            id
            url
            logo {
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
            ... on ContentfulText {
            id
            text {
                id
                childMarkdownRemark {
                    html
                }
            }
            }
            ... on ContentfulImageGrid {
            id
            image1 {
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
            image2 {
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
            image3 {
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
            image4 {
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
            image5 {
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
            image6 {
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