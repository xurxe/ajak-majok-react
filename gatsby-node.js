const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
        {
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
    `).then(result => {
        result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
            createPage({
                path: `/blogit/${node.slug}`,
                component: path.resolve(`./src/templates/blogi.js`),
                context: {
                    slug: node.id,
                },
            })
        })
    })
}