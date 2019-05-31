import React from "react";
import { graphql } from 'gatsby';

import Helmet from '../components/common/Helmet';

import App from '../components/layout/App';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';

const NotFoundPage = ({ data }) => {

    const { contentfulSeo } = data;

    const jsx = (
        <App
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
    
        </App>
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