import React from 'react'
import MovieCategory from './MovieCategory'
import CommingSoonMovies from './CommingSoonMovies'
import MovieSuggestions from '../home/moviesuggestions/MovieSuggestions'

function Category() {
    return (
        <div>
            <MovieCategory />
            <CommingSoonMovies />
            <MovieSuggestions />
        </div>
    )
}

export default Category