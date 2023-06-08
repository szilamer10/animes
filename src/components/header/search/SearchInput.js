import React, { Component } from 'react'
import { SearchImage } from '../Image'
import { MoviesData } from '../../home/moviesuggestions/MoviesData'
import SearchContainer from './SearchContainer'

class SearchInput extends Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
    this.state = {
      searchedWord: '',
      searchResults: [],
      closeSearchBlock: false
    }
  }
  focusInput() {
    this.inputRef.current.focus() //refs with child component
  }
  searchMovies = (event) => {
    const searchedWord = event.target.value;
    // console.log(event); 
    const searchResults = MoviesData.filter((movie) =>
      searchedWord.toLowerCase() !== '' && (movie.title.toLowerCase().includes(searchedWord.toLowerCase()) || movie.actors.toLowerCase().includes(searchedWord.toLowerCase()))
    );
    this.setState({ searchedWord, searchResults });
  }

  render() {
    const { searchResults } = this.state;
    // console.log(searchResults);
    return (
      <div className='search_container' onBlur={this.handleBlur}>
        <div>
          <input type='text' ref={this.inputRef} onChange={this.searchMovies} placeholder='Search' name='search' />
          <SearchImage />
        </div>
        {searchResults.length !== 0 ? <SearchContainer movies={searchResults} /> : null}
      </div>
    )
  }
}

export default SearchInput