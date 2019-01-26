import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazy-load'

class TravelIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <div className='container'>
          <Helmet title={`Travel | ${siteTitle}`} />
      </div>
    )
  }
}

export default TravelIndex
