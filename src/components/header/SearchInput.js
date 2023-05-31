import React, { Component } from 'react'
import { LogoImage, SearchImage } from './Image'

class SearchInput extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    focusInput(){
        this.inputRef.current.focus() //refs with child component
    }
  render() {
    return (
      <div className = 'search_container'>
        <input type = 'text' ref = {this.inputRef} placeholder ='Search' name = 'search'/>
        <SearchImage />
      </div>
    )
  }
}

export default SearchInput