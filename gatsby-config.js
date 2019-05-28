// keep API keys and etc private
require('dotenv').config()

module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.spaceId,
                accessToken: process.env.accessToken,
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [require('autoprefixer')],
            },
        },
    ],
}
