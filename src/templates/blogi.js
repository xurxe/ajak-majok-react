import React from 'react'
import { graphql } from 'gatsby'


const BlogPage = ({data})=> {
    const {contentfulBlogPost} = data

    const {title} = contentfulBlogPost

    const content = contentfulBlogPost.content.childMarkdownRemark.html
 
    return (
        <>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{
                __html:content
            }} />
        </>
    )
  }

export default BlogPage

export const query = graphql`
query { 
    contentfulBlogPost {
        id
        title
        slug
        date
        image {
            id
        }
        alt
        content {
            id
            childMarkdownRemark {
            html
            }
        }
    }
}
`