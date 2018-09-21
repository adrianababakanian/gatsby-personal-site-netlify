import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
//import Img from 'gatsby-image'

import mo from './prototyping/mo/assets/mo.png'
import full from './prototyping/pond-in-geared-motion/assets/full.png'
import show from './prototyping/breathing-kirigami/assets/show.png'
import final from './prototyping/drawing-machine/assets/final.png'

import Preview from './../components/preview/Preview'

class PrototypingIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    const mapper = {
      "/prototyping/mo/": mo,
      "/prototyping/pond-in-geared-motion/": full,
      "/prototyping/breathing-kirigami/": show,
      "/prototyping/drawing-machine/": final
    }

    return (
      <div>
        <Helmet title={`Prototyping | ${siteTitle}`} />
        <h1>Prototyping</h1>
        <p>
          When engineering and art collide.
        </p>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <Preview key={node.id} project={node} color="atomic">
                <img src={mapper[node.fields.slug]} className="proto"/>
                {/* <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} /> */}
              </Preview>
            </div>
          )
        })}
      </div>
    )
  }
}

export default PrototypingIndex

export const pageQuery = graphql`
  query PrototypingQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: ["prototyping"] } } }
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
