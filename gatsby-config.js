// keep API keys and etc private
require('dotenv').config()
require(
    'gatsby-plugin-react-helmet', 
    'gatsby-transformer-remark', 
    'gatsby-source-contentful', 
    'html-react-parser',
    
)

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
        'html-react-parser',
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
