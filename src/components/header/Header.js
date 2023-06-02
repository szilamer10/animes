import React, { Component } from 'react'
import { LogoImage, SearchImage } from './Image'
import SearchInput from './SearchInput'
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
            <LogoImage />
            <div className='header_links'>Movies</div>
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