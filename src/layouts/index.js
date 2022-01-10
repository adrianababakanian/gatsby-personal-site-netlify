import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header/Header'
import Elsewhere from '../components/elsewhere/Elsewhere'

import favicon from './../assets/images/favicon.png'

const links = [
  ["About", "active"],
  // ["Travel", "active"],
  ["Work", "active"]
]

const Layout = props => {
console.log('Layout props', props)
return (
  <div>
    <Helmet
      title={props.data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Adriana\'s personal site and portfolio' },
        { name: 'keywords', content: 'adriana, babakanian, software engineer, designer' },
      ]}
      link={[
      { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <div>
      <Header links={ links } />
      <div className="content">
          {props.children}
        {/* <Elsewhere/> */}
      </div>
    </div>
  </div>
)
}

Layout.propTypes = {
  children: PropTypes.func,
}

const LayoutQuery = ({children}) => {
  return (
    <StaticQuery
      query={
        graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      }
      render={props => {
        console.log("LayoutQuery props", props)
        return <Layout data={props} children={children}/>
      }}
    />
  )
}

export default LayoutQuery
