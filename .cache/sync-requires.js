const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-blog-template-js": hot(preferDefault(require("/Users/home/gatsby-starter-dev-portfolio/src/blogTemplate.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/home/gatsby-starter-dev-portfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/home/gatsby-starter-dev-portfolio/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/home/gatsby-starter-dev-portfolio/src/pages/blog.js"))),
  "component---src-pages-dashboard-js": hot(preferDefault(require("/Users/home/gatsby-starter-dev-portfolio/src/pages/dashboard.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/home/gatsby-starter-dev-portfolio/src/pages/index.js")))
}

