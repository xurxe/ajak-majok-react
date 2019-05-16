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
                // refer to .env file
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
        
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
