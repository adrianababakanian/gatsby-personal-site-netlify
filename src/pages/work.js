import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazy-load'

import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Layout from '../layouts'

import Preview from './../components/preview/Preview'
import FilterBar from './../components/filter-bar/FilterBar'

import ch from './design/cal-hacks-branding/assets/hackanile.png'
import dinestination from './design/dinestination/assets/dinestination.png'
import cal_hacks_4 from './design/cal-hacks-4/assets/cal_hacks_4.png'
import doodles from './design/doodles/assets/doodles.png'
import feaster from './design/feaster/assets/feaster.png'
import innod from './design/innovative-design/assets/innod.png'

const mapper = {
  "/design/cal-hacks-branding/": ch,
  "/design/dinestination/": dinestination,
  "/design/cal-hacks-4/": cal_hacks_4,
  "/design/doodles/": doodles,
  "/design/feaster/": feaster,
  "/design/innovative-design/": innod
}

const tags = ["Visual", "UI", "Branding", "UX", "Web", "Mobile", "Prototyping"];

class WorkIndex extends React.Component {
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
    const tableOfContents = get(this, 'props.data.allMarkdownRemark.node.tableOfContents');
    console.log(tableOfContents);

    var filteredPosts = [], filtered;

    {posts.map(({ node }) => {
      filtered = this.filterPosts(node, this.state.filters);
      filteredPosts.push(filtered);
    })}

    return (
      <Layout>
        <div>
          <div className='container filter'>
            <Helmet title={`Work | ${siteTitle}`} />
            <div className="top">
              <h1 style={{"display": "inline"}}> Work </h1>
              {/* <FilterBar filters={ this.state.filters }
                         tags={ tags }
                         handleFilterAdd={ this.handleFilterAdd }
                         handleFilterRemove={ this.handleFilterRemove }
                         light={ true } /> */}
            </div>
            <div className="divider" />
            <CSSTransitionGroup
              transitionName="tile"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeave={false}>
              { filteredPosts }
            </CSSTransitionGroup>
          </div>
        </div>
      </Layout>
    )
  }
}

export default WorkIndex

export const pageQuery = graphql`
  query WorkQuery {
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
          tableOfContents
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
