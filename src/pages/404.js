import React from "react";
import { graphql } from 'gatsby';

import BodyDiv from '../components/layout/BodyDiv';
import Helmet from '../components/Helmet';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';

const NotFoundPage = ({ data }) => {

    const { contentfulSeo } = data;

    const jsx = (
        <BodyDiv
        pageType='404'
        >
    
            <Helmet
            title={contentfulSeo.title}
            description={contentfulSeo.description}
            keywords={contentfulSeo.keywords}
            url={contentfulSeo.baseUrl}
            slug=''
            ></Helmet>

            <Header 
            title='Oho!'
            subtitle='404: Sivua ei löytynyt.'
            modifier='404'
            ></Header>
    
            <Main 
            layout='404'>
    
            </Main>
    
        </BodyDiv>
    );

    return jsx;
};

export default NotFoundPage;

export const query = graphql`
query {
    contentfulSeo {
        id
        title
        description
        keywords
        baseUrl
    }
}
`;