import React, { Component } from 'react'
import HookSlider from './banners/HookSlider'
import MovieSuggestions from './moviesuggestions/MovieSuggestions'

class Index extends Component {
  render() {
    return (
      <div className = 'index_page'>
        <HookSlider />
        <MovieSuggestions/>
        </div>
    )
  }
}

export default Index