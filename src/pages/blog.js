import React from 'react';
import Layout from '../components/Layout';
import { Link, graphql, useStaticQuery } from 'gatsby'


const Blog = () => {
  const postsQuery = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
          edges{
            node {
              frontmatter {
                title
                date
                sinopsis
              }
              fields {
                  slug
              }
            }
          }
        }
      }
    `)

  const posts = postsQuery.allMarkdownRemark.edges.map((posts) => {
    return (<ul className="blogPageContent" key={posts.node.frontmatter.date}>
      <Link className='nodecor' to={`/blog/${posts.node.fields.slug}`}  >
        <div className="eachBlogTitle">{posts.node.frontmatter.title}</div>
        <p>{posts.node.frontmatter.date}</p>
      </Link>
      <p>{posts.node.frontmatter.sinopsis}</p>
    </ul>
    )
  })

  return (
    <Layout>
      <h1 className="opener">Blog</h1>
      {posts}
    </Layout>
  )
};

export default Blog;
