import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from "../components/layout"


const Page = ({data}) => {
    const {contentfulPage} = data;
    const {longTitle, layout, entries} = contentfulPage;  

    console.log(longTitle, layout, entries[0].__typename);

    entries.map(
        (entry) => {
            if (entry.__typename === 'ContentfulBlogPost') {
                console.log('hello')
                return
            }
        }
    )

/*     let entriesRendered;

    if (entries.__typeName === "ContentfulBlogPost") {
        entriesRendered = entries.map(
            (entry) => <div key={entry.id}><Link to={"/blogit/"+ entry.slug}>{entry.title}</Link> <br /></div>
        )
    } */

    return (
        <Layout>
            <h1>
                {contentfulPage.longTitle}
            </h1>

{/*             {console.log(entriesRendered)} */}

        </Layout>
    );
};

export default Page;

export const query = graphql`
query($slug: String!){ 
	contentfulPage (id: { eq: $slug }){
        id
        longTitle
        layout
        entries {
            __typename
            ... on ContentfulText {
                id
                text {
                    id
                    childMarkdownRemark {
                        html
                    }
                }
            }
          
            ... on ContentfulImage {
                id
                image {
                    id
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
                shadow
            }
            
            ... on ContentfulTestimonial {
                id
                name
                occupation
                image {
                    id
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
                quote {
                    id
                    childMarkdownRemark {
                        html
                    }
                }
                photographer
            }
          
            ... on ContentfulBlogPost {
                id
                title
                slug
            }
        }
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


/* {
  contentfulPage {
    id
    longTitle
    layout
    entries {
      __typename
      ... on ContentfulText {
        id
        text {
          id
          childMarkdownRemark {
            html
          }
        }
        
      }
      
      ... on ContentfulImage {
        id
        image {
          id
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
        shadow
      }
    
    }
  }
} */