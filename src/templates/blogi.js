import React from 'react'
import { graphql } from 'gatsby'
import Parser from 'html-react-parser'


import Moment from 'react-moment'

const BlogPage = ({data})=> {
    const {contentfulBlogPost} = data

    const {title, date, alsoPostedIn, alsoPostedInUrl, photographer} = contentfulBlogPost

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
            file {
                url
                fileName
                contentType
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