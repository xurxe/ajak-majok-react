import React from "react";
import { graphql } from 'gatsby';

import BodyDiv from '../components/BodyDiv'
import Nav from '../components/Nav';
import Header from '../components/Header';
import Main from '../components/Main';
import EntryDiv from '../components/EntryDiv';
import Footer from '../components/Footer';

const IndexPage = ({data}) => {
    const {contentfulIndex} = data;
    const {longTitle, layout, entries} = contentfulIndex;

    const jsx = (
        <BodyDiv>

            <Nav></Nav>

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
    }
}
`;