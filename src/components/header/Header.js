import React from 'react'
import Link from 'gatsby-link'

import './Header.css'
import logo from './../../assets/images/logo.svg';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleNavLogo = this.toggleNavLogo.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      showMobileNav: false,
			width: window.innerWidth,
			height: window.innerHeight,
    }
  }

  updateDimensions() {
    this.setState({
    	width: window.innerWidth,
    	height: window.innerHeight,
    });
  }

  componentWillMount() { this.updateDimensions(); }

  componentDidMount() { window.addEventListener("resize", this.updateDimensions); }

  componentWillUnmount() { window.removeEventListener("resize", this.updateDimensions); }

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
        <Link to={`/${link[0].toLowerCase()}`}
              key={link[0]}
              className="header-item"
              activeClassName={`${link[1]}`}>
          <div className={`header-item-content ${link[1]}`}>
            {link[0]}
          </div>
        </Link>
      )),
      mobile_header = (<div/>);

    if (this.state.width < 700) {
      header_links = links && reveresed.map(link => (
        <Link to={`/${link[0].toLowerCase()}`}
              key={link[0]}
              className="mobile-header-item"
              activeClassName={`${link[1]}`}
              onClick={this.toggleNav}>
          <div className={`mobile-header-item-content ${link[1]}`}>
            {link[0]}
          </div>
        </Link>
      ));
      mobile_header = this.state.showMobileNav ? <div className="mobile_header"> {header_links} </div> : null;
    }
    return (
      <div>
        {mobile_header}
        <div className="header" style={ style }>
          <Link to="/" className="logo"
            onClick={this.toggleNavLogo}>
            <img src={logo}/>
          </Link>
          {this.state.width > 700 ? header_links : null}
          <div className='hamburger'
            onClick={this.toggleNav}>
            {this.state.showMobileNav ? <div>&times;</div> : <div>&#9776;</div>}
          </div>
        </div>
      </div>
    )
  }
}


export default Header
