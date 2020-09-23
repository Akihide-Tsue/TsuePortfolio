const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Tsue.com portfolio',
    author: 'Akihide Tsue',
    siteUrl: `https://tsue-gatsby.web.app/`
  },

  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
  ]
}
