import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazy-load'

import Preview from './../components/preview/Preview'
import FilterBar from './../components/filter-bar/FilterBar'

import ch from './design/cal-hacks-branding/assets/scaled.png'
import dinestination from './design/dinestination/assets/dinestination.png'
import cal_hacks_4 from './design/cal-hacks-4/assets/cal_hacks_4.png'
import doodles from './design/doodles/assets/doodles.png'
import feaster from './design/feaster/assets/feaster.png'
import innod from './design/innovative-design/assets/innod.png'

import './../common.css'

class DesignIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    const mapper = {
      "/design/cal-hacks-branding/": ch,
      "/design/dinestination/": dinestination,
      "/design/cal-hacks-4/": cal_hacks_4,
      "/design/doodles/": doodles,
      "/design/feaster/": feaster,
      "/design/innovative-design/": innod
    }

    return (
      <div>
        <Helmet title={`Design | ${siteTitle}`} />
        <FilterBar />
        <div className="divider" />
        {/* <p>
          Product, user interface, visual, branding, & beyond.
        </p> */}
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <LazyLoad offset={300}>
                <Preview key={node.id} project={node} /*color="cycle"*/ >
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

export default DesignIndex

export const pageQuery = graphql`
  query DesignQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: ["design"] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            tags
            blurb
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
