const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;

    // this array contains all the redirect paths (from the old site structure to the new one)
    const redirects = [
        { 
            from: `/index.html`, 
            to: `/` 
        },
        { 
            from: `/html/ajak.html`, 
            to: `/ajak` 
        },
        { 
            from: `/html/ajakista.html`, 
            to: '/suosittelijat' 
        },
        { 
            from: `/html/blogi.html`, 
            to: `/blogit` 
        },
        { 
            from: `/html/lahjoitus.html`, 
            to: `/lahjoitus` 
        },
        { 
            from: `/html/yhteys.html`, 
            to: `/yhteys` 
        },
        { 
            from: `/html/svenska.html`, 
            to: `/svenska` 
        },
        { 
            from: `/html/english.html`, 
            to: `/english` 
        },
        { 
            from: `/html/tehdaan.html`, 
            to: `/blogit/tehdaan` 
        },
        { 
            from: `/html/pystymme.html`, 
            to: `/blogit/pystymme` 
        },
        { 
            from: `/html/yliarvostettu.html`, 
            to: `/blogit/yliarvostettu` 
        },
        { 
            from: `/html/ilmastopuheet.html`, 
            to: `/blogit/ilmastopuheet` 
        },
        { 
            from: `/html/paatoksenteko.html`, 
            to: `/blogit/paatoksenteko` 
        },
        { 
            from: `/html/pulla.html`, 
            to: `/blogit/pulla` 
        },
        { 
            from: `/html/maahanmuuttokeskustelu.html`, 
            to: `/blogit/maahanmuuttokeskustelu` 
        },
        { 
            from: `/html/syrjayttamiselle.html`, 
            to: `/blogit/syrjayttamiselle` 
        },
        { 
            from: `/html/seksuaalirikoksia.html`, 
            to: `/blogit/seksuaalirikoksia` 
        },
        { 
            from: `/html/nallekarkit.html`, 
            to: `/blogit/nallekarkit` 
        },
        { 
            from: `/html/makefuturegreatagain.html`, 
            to: `/blogit/makefuturegreatagain` 
        },
    ];

    // map through redirects array and create them
    redirects.map(({ from: f, to: t }) => {
        createRedirect({
            fromPath: f,
            isPermanento: true,
            redirectInBrowser: true,
            toPath: t,
        })
    });

    // fetch pages and blog posts (blogit) from Contentul
    const response = graphql(`
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
        // generate pages from the page.js template
        result.data.allContentfulPage.edges.forEach(({ node }) => {
            createPage({
                path: `/${node.slug}`,
                component: path.resolve(`./src/templates/page.js`),
                context: {
                    slug: node.id,
                },
            });
        });
        // generate blog posts (blogit) from the blogi.js template
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

    return response;
};
