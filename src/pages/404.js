import React from "react";
import { graphql } from 'gatsby';

import BodyDiv from '../layout/BodyDiv'
import Nav from '../layout/Nav';
import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer'

import Helmet from '../components/Helmet';

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
    
            <Nav></Nav>
    
            <Header 
            title='Oho!'
            subtitle='404: Sivua ei löytynyt.'
            modifier='404'
            ></Header>
    
            <Main 
            layout='404'>
    
            </Main>
    
            <Footer
            className='Footer Footer___404'
            ></Footer>
    
        </BodyDiv>

    )

    return jsx;

}

export default NotFoundPage

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