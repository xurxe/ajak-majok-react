import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Parser from 'html-react-parser'


import Moment from 'react-moment'

const BlogPage = ({data})=> {
    const {contentfulBlogPost} = data

    const {title, date, alsoPostedIn, alsoPostedInUrl, image, alt, photographer} = contentfulBlogPost

    console.log(image.file.url);

    const content = contentfulBlogPost.content.childMarkdownRemark.html
 
    return (
        <>
            <h2>
                {title}
            </h2>

            <Moment format="DD.MM.YYYY">
                {date}
            </Moment>

            <br />

            <a href={alsoPostedInUrl}>
                {alsoPostedIn}
            </a>

            <Img alt={alt} fluid={image.fluid}></Img>

            <p>
                {photographer}
            </p>

            <div>
                {Parser(content)}
            </div>
        </>
    )
}

export default BlogPage

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
`