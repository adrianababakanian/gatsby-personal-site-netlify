import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazy-load'

import City from './../components/city/City'

class TravelIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <div className='container'>
          <Helmet title={`Travel | ${siteTitle}`} />
          {/* Europe Winter 2018. */}
          <City city='Milan' country='Italy' date='January 2019' />
          <City city='Bergamo' country='Italy' date='January 2019' />
          <City city='Rotterdam' country='The Netherlands' date='January 2019' />
          <City city='Utrecht' country='The Netherlands' date='December 2018 - January 2019' />
          <City city='Amsterdam' country='The Netherlands' date='December 2018 - January 2019' />
          <City city='Paris' country='France' date='December 2018' />
          <City city='Barcelona' country='Spain' date='December 2018' />
          <City city='London' country='United Kingdom' date='December 2018' />

          {/* Tahoe Winter 2018. */}
          <City city='Tahoe' country='California' date='December 2018' />

          {/* Croatia Summer 2018. */}
          <City city='Venice' country='Italy' date='August 2018' />
          <City city='Dubrovnik' country='Croatia' date='August 2018' />
          <City city='Pučišća' country='Croatia' date='August 2018' />
          <City city='Split' country='Croatia' date='August 2018' />


          {/* Pre-International. */}
          <City city='New York' country='New York' date='July 2018' />
          {/* <City city='Big Sur' country='California' date='May 2018' />
          <City city='Gualala' country='California' date='April 2018' />
          <City city='Los Angeles' country='California' date='January 2018' /> */}
      </div>
    )
  }
}

export default TravelIndex
