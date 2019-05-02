import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogitPage = ({data}) => { 
    // get blogs from data
    const {allContentfulBlogPost} = data;

    // turn into array
    const blogs = allContentfulBlogPost.edges.map(({node}) => ({
        id: node.id,
        title: node.title,
        slug: node.slug,
    }))

    return (
        <Layout>
            <SEO title="Blogit" keywords={[`gatsby`, `application`, `react`]} />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
                {blogs.map(
                    (blog) => <div key={blog.id}><Link to={"/blogit/"+ blog.slug}>{blog.title}</Link> <br /></div>
                )}
            </div>
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    )
}

export default BlogitPage

// got this code using http://localhost:8000/___graphql 
export const query = graphql`
query {
    allContentfulBlogPost {
        edges {
            node {
                id
                title
                slug
            }
        }
    }
}
`
