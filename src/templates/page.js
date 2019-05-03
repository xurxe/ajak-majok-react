import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"


const Page = ({data}) => {
    const {contentfulPage} = data;
    return (
        <Layout>
            <h1>
                {contentfulPage.longTitle}
            </h1>
        </Layout>
    );
};

export default Page;

export const query = graphql`
query($slug: String!){ 
	contentfulPage (id: { eq: $slug }){
        id
        longTitle
    }
}
`

/* import Layout from "../components/layout"
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

    console.log(blogs[1]);

    return (
        <Layout>
            <SEO title="Blogit" keywords={[`gatsby`, `application`, `react`]} />
            {blogs.map(
                (blog) => <div key={blog.id}><Link to={"/blogit/"+ blog.slug}>{blog.title}</Link> <br /></div>
            )}
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    )
}

export default BlogitPage

// got this code using http://localhost:8000/___graphql 
export const query = graphql`
query {
    allContentfulBlogPost (sort: {fields: [date], order: DESC}) {
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
*/
