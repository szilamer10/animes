import React, { Component } from 'react'
import { MoviesData } from './MoviesData'
class MovieSuggestions extends Component {
    render() {
        return (
            <div className='suggestionsContainer'>
                <h3>Movies</h3>
                <div className='movieSuggestionsContainer'>
                <> 
                {MoviesData.map((movies, index) => {
                    return (
                        <div key={index} className = 'movieContainer' id = {movies.id}>
                            <div className = 'movieImages'><img src={movies.image} alt='' /></div>
                            <h3>{movies.title}</h3>
                        </div>
                    )
                })}
                </>
                </div>
            </div>
        )
    }
}

export default MovieSuggestions