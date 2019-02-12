import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header/Header'
import Elsewhere from '../components/elsewhere/Elsewhere'

import favicon from './../assets/images/favicon.png'

const links = [
  ["About", "active"],
  ["Travel", "active"],
  ["Work", "active"]
]

const Layout = ({ children, data }) => (

  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
      { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <div>
      <Header links={ links } />
      <div className="content">
          {children()}
        {/* <Elsewhere/> */}
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
