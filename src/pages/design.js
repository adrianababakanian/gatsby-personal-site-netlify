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

const mapper = {
  "/design/cal-hacks-branding/": ch,
  "/design/dinestination/": dinestination,
  "/design/cal-hacks-4/": cal_hacks_4,
  "/design/doodles/": doodles,
  "/design/feaster/": feaster,
  "/design/innovative-design/": innod
}

const tags = ["Visual", "UI", "Branding", "UX", "Web", "Mobile", "Prototyping"];

class DesignIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: []
    }

    this.handleFilterAdd = this.handleFilterAdd.bind(this);
    this.handleFilterRemove = this.handleFilterRemove.bind(this);
    this.filterPosts = this.filterPosts.bind(this);
  }

  handleFilterAdd(filter) {
    this.setState({
      filters: this.state.filters.concat(filter)
    })
  }

  handleFilterRemove(filter) {
    const filtered = this.state.filters.filter(function(value, index, arr){
        return value != filter;
    });
    this.setState({
      filters: filtered
    })
  }

  filterPosts(node, filters) {
    const title = get(node, 'frontmatter.title') || node.fields.slug;
    var preview = (
      <div key={ node.fields.slug }>
        <LazyLoad offset={300}>
          <Preview key={ node.id } project={ node }>
            <img src={ mapper[node.fields.slug] }/>
          </Preview>
        </LazyLoad>
      </div>
    );

    var result = filters.length == 0 ? preview : null;

    for (var i = 0; i < filters.length; i++) {
      if (node.frontmatter.tags.includes(filters[i])) {
        result = preview;
      }
    }

    return result;
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    var filteredPosts = [], filtered;

    {posts.map(({ node }) => {
      filtered = this.filterPosts(node, this.state.filters);
      filteredPosts.push(filtered);
    })}

    return (
      <div>
        <Helmet title={`Design | ${siteTitle}`} />

        <FilterBar filters={ this.state.filters }
                   tags={ tags }
                   handleFilterAdd={ this.handleFilterAdd }
                   handleFilterRemove={ this.handleFilterRemove } />
        <div className="divider" />

        { filteredPosts }
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
