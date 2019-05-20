// keep API keys and etc private
require("dotenv").config()

module.exports = {
    siteMetadata: {
        title: `Ajak Majok`,
        description: ``,
        author: `Xurxe Toivo García`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
        resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.spaceId,
                accessToken: process.env.accessToken,
            },
        },
        `html-react-parser`,
        {
            resolve: `gatsby-plugin-remote-images`,
            options: {
                nodeType: 'myNodes',
                imagePath: 'imageUrl',
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [require(`autoprefixer`)],
            },
          },
    ],
}
