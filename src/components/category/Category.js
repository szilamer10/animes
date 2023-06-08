import React from 'react'
import MovieCategory from './MovieCategory'
import CommingSoonMovies from './CommingSoonMovies'
import MovieSuggestions from '../home/moviesuggestions/MovieSuggestions'
import FilterCategory from './filter/FilterCategory'

function Category() {
    return (
        <div>
            <FilterCategory />
            <MovieCategory />
            <CommingSoonMovies />
            <MovieSuggestions />
        </div>
    )
}

export default Category