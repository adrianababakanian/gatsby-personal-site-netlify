import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../layouts'

//import './../common.scss'
import './../style.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout>
        <div>
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <div className="container">
            <h1 className='blog-title'>{post.frontmatter.title}</h1>

            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>

        </div>
      </Layout>

    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
