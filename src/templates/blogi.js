import React from 'react';
import { graphql } from 'gatsby';
import Parser from 'html-react-parser';

import BodyDiv from '../layout/BodyDiv'
import Nav from '../layout/Nav';
import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';

import Image from '../components/Image';
import PhotographerP from '../components/PhotographerP';

const BlogPage = ({ data }) => {
    const { contentfulBlogPost } = data;
    const { title, date, alsoPostedIn, alsoPostedInUrl, image, alt, photographer } = contentfulBlogPost;

    const formattedDate = new Date(date).toLocaleDateString('fi-FI', {day: '2-digit', month: '2-digit', year: 'numeric'});

    let jsx;

    if (alsoPostedIn) {
        jsx = (
            <BodyDiv
            >
    
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
                    href={alsoPostedInUrl || null}
                    className='Header_a___blogi'
                    >
    
                        {alsoPostedIn || null}
    
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
        )
    }

    else {
        jsx = (
            <BodyDiv
            >
    
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
        )
    };
 
    return jsx;
};

export default BlogPage;

export const query = graphql`
query($slug: String!){ 
	contentfulBlogPost (id: { eq: $slug }){
        id
        title
        slug
        date
        alsoPostedIn
        alsoPostedInUrl
        image {
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