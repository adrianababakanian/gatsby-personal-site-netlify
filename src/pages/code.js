import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

//import Img from 'gatsby-image'

import Preview from './../components/preview/Preview'

class CodeIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={`Code | ${siteTitle}`} />
        <h1>Code</h1>
        <p>
          The full stack.
        </p>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <Preview key={node.id} project={node} color="matcha">
                {/* <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} /> */}
              </Preview>
            </div>
          )
        })}
      </div>
    )
  }
}

export default CodeIndex

export const pageQuery = graphql`
  query CodeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: ["code"] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            featuredImage {
                childImageSharp{
                    sizes(maxWidth: 630) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
          }
        }
      }
    }
  }
`
