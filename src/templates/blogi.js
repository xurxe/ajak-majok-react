import React from 'react';
import { graphql } from 'gatsby';
import Parser from 'html-react-parser';

import BodyDiv from '../layout/BodyDiv';
import Nav from '../layout/Nav';
import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';
import Helmet from '../components/Helmet';
import Image from '../components/Image';
import PhotographerP from '../components/PhotographerP';

const BlogPage = ({ data }) => {

    const { contentfulSeo, contentfulBlogPost } = data;

    const { title, slug, date, alsoPostedIn, alsoPostedInUrl, image, alt, photographer } = contentfulBlogPost;

    const formattedDate = new Date(date).toLocaleDateString('fi-FI', {day: '2-digit', month: '2-digit', year: 'numeric'});
    
    let jsx;

    if (alsoPostedIn) {
        jsx = (
            <BodyDiv
            pageType='blogi'
            >

            <Helmet
            title={contentfulSeo.title}
            description={title}
            keywords={contentfulSeo.keywords}
            image={image.fixed.src}
            url={contentfulSeo.baseUrl + '/blogit/' + slug}
            slug={slug}
            ></Helmet>
    
                <Nav></Nav>
    
                <Header 
                title={title} 
                modifier='blogi'
                >

                    <time
                    className='Header_time___blogi'
                    >

                        {formattedDate}

                    </time>
    
                    <a 
                    href={alsoPostedInUrl}
                    className='Header_a___blogi'
                    >
    
                        {alsoPostedIn}
    
                    </a>
    
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
                    photographer={photographer}
                    ></PhotographerP>
    
                    <div
                    className='Main_blogDiv'
                    >

                        {Parser(contentfulBlogPost.content.childMarkdownRemark.html)}  

                    </div>
    
                </Main>     
    
                <Footer
                className='Footer'
                ></Footer>
    
            </BodyDiv>
        );
    }

    else {
        jsx = (
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
    
                <Nav></Nav>
    
                <Header 
                title={title} 
                modifier='blogi'
                >
    
                    <time
                    className='Header_time___blogi'
                    >
                        {formattedDate}
                    </time>
    
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
    
                    <div
                    className='Main_blogDiv'
                    >
                        {Parser(contentfulBlogPost.content.childMarkdownRemark.html)}  
                    </div>
    
                </Main>     
    
                <Footer
                className='Footer'
                ></Footer>
    
            </BodyDiv>
        );
    };
 
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
        content {
            id
            childMarkdownRemark {
                html
            }
        }
    }
}
`;