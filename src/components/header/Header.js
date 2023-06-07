import React, { Component } from 'react'
import { LogoImage, SearchImage } from './Image'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'
import { isMobile } from "react-device-detect";
class Header extends Component {
  constructor(props) {
    super(props)

    this.componentRef = React.createRef()
  }
  clickHandler = () => {
    { this.componentRef.current.focusInput() } //button clickre megkapja a focust,child-parent componensel megoldva
  }
  render() {
    return (
      <div className="header">
        <div className='header_container'>
          <div className='logo'>
          <Link to="/">
            <LogoImage />
            </Link>
            <Link to="/movies">
            <div className='header_links'>Movies</div>
            </Link>
          </div>
          <div className='search' onClick={this.clickHandler}>
            <div><SearchInput ref={this.componentRef} /></div>
          </div>
          <div className='header_registration'>Sign In / Login</div>
        </div>
      </div>
    )
  }
}

export default Header