import React from "react"
import { graphql } from 'gatsby'

import Nav from '../components/Nav'
import Header from '../components/Header'
import Main from '../components/Main'
import EntryDiv from '../components/EntryDiv'

const IndexPage = ({data}) => {

    const {contentfulIndex} = data;
    const {longTitle, layout, entries} = contentfulIndex;

    const jsx = (
        <div>
            <Nav></Nav>

            <Header title={longTitle}></Header>

            <Main layout={layout}>
                {entries && entries.map(entry => 
                    <EntryDiv entry={entry} key={entry.id}></EntryDiv>
                )}
            </Main>
        </div>
    );

    return jsx;
};

export default IndexPage

export const query = graphql`
query {
    contentfulIndex {
        id
        longTitle    
    }
}
`