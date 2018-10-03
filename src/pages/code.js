import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazy-load'

import dinestination from './code/dinestination/assets/dinestination.png'
import map from './code/stubhub-city-pages/assets/map.png'
import ch_site from './code/cal-hacks-permanent-site/assets/ch-site.png'
import stubhub from './code/stubhub-community/assets/stubhub.png'
import pinterest from './code/pinterest-ring-theory/assets/pinterest.png'
import landing from './code/cal-hacks-5-portal/assets/landing.png'

import Preview from './../components/preview/Preview'

class CodeIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    const mapper = {
      "/code/dinestination/": dinestination,
      "/code/stubhub-city-pages/": map,
      "/code/cal-hacks-permanent-site/": ch_site,
      "/code/stubhub-community/": stubhub,
      "/code/pinterest-ring-theory/": pinterest,
      "/code/cal-hacks-5-portal/": landing
    }

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
              <LazyLoad offset={300}>
                <Preview key={node.id} project={node} color="matcha">
                  <img src={mapper[node.fields.slug]}/>
                </Preview>
              </LazyLoad>
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
