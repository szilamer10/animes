import React, { Component } from 'react'

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
      <div>
        <input type = 'text' ref = {this.inputRef}/>
      </div>
    )
  }
}

export default SearchInput