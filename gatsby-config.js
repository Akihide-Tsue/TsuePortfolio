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
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `static/gatsby-icon.png`, //TODOアイコン消す
    //   },
    // },
  ]
}
