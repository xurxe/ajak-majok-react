const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;

    const redirects = [
        { 
            f: `/index.html`, 
            t: `/` 
        },
        { 
            f: `/html/ajak.html`, 
            t: `/ajak` 
        },
        { 
            f: `/html/ajakista.html`, 
            t: '/suosittelijat' 
        },
        { 
            f: `/html/blogi.html`, 
            t: `/blogit` 
        },
        { 
            f: `/html/lahjoitus.html`, 
            t: `/lahjoitus` 
        },
        { 
            f: `/html/yhteys.html`, 
            t: `/yhteys` 
        },
        { 
            f: `/html/svenska.html`, 
            t: `/svenska` 
        },
        { 
            f: `/html/english.html`, 
            t: `/english` 
        },
        { 
            f: `/html/tehdaan.html`, 
            t: `/blogit/tehdaan` 
        },
        { 
            f: `/html/pystymme.html`, 
            t: `/blogit/pystymme` 
        },
        { 
            f: `/html/yliarvostettu.html`, 
            t: `/blogit/yliarvostettu` 
        },
        { 
            f: `/html/ilmastopuheet.html`, 
            t: `/blogit/ilmastopuheet` 
        },
        { 
            f: `/html/paatoksenteko.html`, 
            t: `/blogit/paatoksenteko` 
        },
        { 
            f: `/html/pulla.html`, 
            t: `/blogit/pulla` 
        },
        { 
            f: `/html/maahanmuuttokeskustelu.html`, 
            t: `/blogit/maahanmuuttokeskustelu` 
        },
        { 
            f: `/html/syrjayttamiselle.html`, 
            t: `/blogit/syrjayttamiselle` 
        },
        { 
            f: `/html/seksuaalirikoksia.html`, 
            t: `/blogit/seksuaalirikoksia` 
        },
        { 
            f: `/html/nallekarkit.html`, 
            t: `/blogit/nallekarkit` 
        },
        { 
            f: `/html/makefuturegreatagain.html`, 
            t: `/blogit/makefuturegreatagain` 
        },
    ];

    for (var { f: f, t: t } of redirects) {

        createRedirect({
            fromPath: f,
            isPermanent: true,
            redirectInBrowser: true,
            toPath: t,
        })

    };

    return graphql(`
        {
            allContentfulPage {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
            allContentfulBlogPost {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `).then(result => {
        result.data.allContentfulPage.edges.forEach(({ node }) => {
            createPage({
                path: `/${node.slug}`,
                component: path.resolve(`./src/templates/page.js`),
                context: {
                    slug: node.id,
                },
            });
        });
        result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
            createPage({
                path: `/blogit/${node.slug}`,
                component: path.resolve(`./src/templates/blogi.js`),
                context: {
                    slug: node.id,
                },
            });
        });
    });
};

/*   
{
    pages: allContentfulPage {
        edges {
            node {
                id
                slug
            }
        }
    }
    blogs: allContentfulPage(filter: {slug: {eq: "blogit"}}) {
        edges {
            node {
                id
                segments {
                    __typename
                    ... on ContentfulBlogPost {
                        id
                        slug
                    }
                }
            }
        }
    }
}
*/