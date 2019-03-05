import React from 'react'
import { Link } from 'gatsby'

import { CSSTransitionGroup } from 'react-transition-group' // ES6

import './Header.scss'
import logo from './../../assets/images/logo.svg';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleNavLogo = this.toggleNavLogo.bind(this);
    this.state = {
      showMobileNav: false
    }
  }

	toggleNavLogo() {
    if (this.state.showMobileNav) {
      this.setState({
  			showMobileNav: !this.state.showMobileNav,
  		})
    }
	}

  toggleNav() {
    this.setState({
			showMobileNav: !this.state.showMobileNav,
		})
	}

  render() {
    let style = this.props.style,
      links = this.props.links,
      reveresed = links.slice().reverse(),
      header_links = links && links.map(link => (
        <Link exact
              to={ `/${link[0].toLowerCase()}` }
              key={ link[0] }
              className="header-item"
              activeClassName={ `${link[1]}` }>
          <div className={ `header-item-content ${link[1]}` }>
            { link[0] }
          </div>
        </Link>
      )),
      mobile_header_links = (<div/>),
      mobile_header = (<div/>);

    mobile_header_links = links && reveresed.map(link => (
      <Link exact
            to={ `/${link[0].toLowerCase()}` }
            key={ link[0] }
            className="mobile-header-item"
            activeClassName={ `${link[1]}` }
            onClick={ this.toggleNav }>
        <div className={`mobile-header-item-content ${ link[1]}` }>
          { link[0] }
        </div>
      </Link>
    ));
    mobile_header = this.state.showMobileNav ? <div className="mobile_header"> { mobile_header_links } </div> : null;


    return (
      <div>
        { mobile_header }
        {/* <CSSTransitionGroup
          transitionName="header"
          transitionEnter={false}
          transitionLeave={false}
          transitionAppear={true}
          transitionAppearTimeout={400}> */}
          <div className="header" style={ style }>
            <div className='header-center'>
              <Link exact to="/" className="logo"
                onClick={ this.toggleNavLogo }>
                <img classNamee='logo' src={logo}/>
              </Link>
              { header_links }
              <div className='hamburger'
                onClick={ this.toggleNav }>
                { this.state.showMobileNav ? <span>&times;</span> : <div>&#9776;</div> }
              </div>
            </div>
          </div>
      {/* </CSSTransitionGroup> */}
      </div>
    )
  }
}


export default Header
