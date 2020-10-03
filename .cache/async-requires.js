// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-blog-template-js": () => import("./../../../src/blogTemplate.js" /* webpackChunkName: "component---src-blog-template-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-blog-js": () => import("./../../../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-dashboard-js": () => import("./../../../src/pages/dashboard.js" /* webpackChunkName: "component---src-pages-dashboard-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

