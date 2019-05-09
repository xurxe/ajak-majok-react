import React from 'react';
import { graphql } from 'gatsby';
import Parser from 'html-react-parser';
import Moment from 'react-moment';

import Nav from '../components/Nav';
import Header from '../components/Header';
import Main from '../components/Main';
import Image from '../components/Image';
import PhotographerP from '../components/PhotographerP';

const BlogPage = ({data})=> {
    const {contentfulBlogPost} = data;
    const {title, date, alsoPostedIn, alsoPostedInUrl, image, alt, photographer} = contentfulBlogPost;
    const text = contentfulBlogPost.content.childMarkdownRemark.html;
 
    return (
        <div className='BodyDiv'>

            <Nav></Nav>

            <Header 
            title={title} 
            modifier='blogi'>

                <Moment 
                format="DD.MM.YYYY" 
                className='Header_time___blogi'>

                    {date}

                </Moment>

                <br />

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

                <div>
                    {Parser(text)}
                </div>

            </Main>     

        </div>
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