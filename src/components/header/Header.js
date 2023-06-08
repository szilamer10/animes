import React, { Component } from 'react'
import { LogoImage, SearchImage } from './Image'
import SearchInput from './search/SearchInput'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)

    this.componentRef = React.createRef()
    this.state = {
      scrollPositionY: 0,
      headerName: 'header'
    }
  }
  clickHandler = () => {
    { this.componentRef.current.focusInput() } //button clickre megkapja a focust,child-parent componensel megoldva
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    const position = window.pageYOffset;
    position > 100 ? this.setState({ headerName: 'header sticky-header' }) : this.setState({ headerName: 'header' });
    this.setState({ scrollPositionY: position });
  };
  render() {
    const { headerName } = this.state;

    return (
      <div className={headerName}>
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