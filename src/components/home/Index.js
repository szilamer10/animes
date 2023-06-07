import React, { Component } from 'react'
import HookSlider from './banners/HookSlider'
import MovieSuggestions from './moviesuggestions/MovieSuggestions'
import Questions from './questions/Questions'

class Index extends Component {
  render() {
    return (
      <div className = 'index_page'>
        <HookSlider />
        <MovieSuggestions/>
        <Questions />
        </div>
    )
  }
}

export default Index