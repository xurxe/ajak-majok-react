import React from 'react';
import { graphql } from 'gatsby';
import Parser, { domToReact } from 'html-react-parser';
import Moment from 'react-moment';

import BodyDiv from '../components/BodyDiv'
import Nav from '../components/Nav';
import Header from '../components/Header';
import Main from '../components/Main';
import Image from '../components/Image';
import PhotographerP from '../components/PhotographerP';
import Footer from '../components/Footer';

const BlogPage = ({ data })=> {
    const { contentfulBlogPost } = data;
    const { title, date, alsoPostedIn, alsoPostedInUrl, image, alt, photographer } = contentfulBlogPost;
 
    return (
        <BodyDiv>

            <Nav></Nav>

            <Header 
            title={title} 
            modifier='blogi'>

                <Moment 
                format="DD.MM.YYYY" 
                className='Header_time___blogi'>

                    {date}

                </Moment>

                <a 
                href={alsoPostedInUrl}
                className='Header_a___blogi'
                >

                    {alsoPostedIn}

                </a>

            </Header>

            <Main 
            layout='column'>

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
                    {Parser(
                        contentfulBlogPost.content.childMarkdownRemark.html, { 
                            replace: (domNode) => {
                                if (domNode.name === 'p') {

                                    const jsx = (
                                        <p 
                                        className='Main_blogP'
                                        >

                                            {domToReact(domNode.children)}

                                        </p>
                                    );

                                    return jsx;
                                }
                            }
                        }
                    )}  
                </div>

            </Main>     

            <Footer></Footer>

        </BodyDiv>
    )
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
          	file {
                url
                fileName
          	}
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