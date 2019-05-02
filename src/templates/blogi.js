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

            <img src={image.file.url} alt={alt} />

            <p>
                {Parser("Kuva: &copy; " + photographer)}
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
            fixed {
                src
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