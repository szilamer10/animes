import React, { useState } from 'react'
import { MoviesData } from './MoviesData'
import MovieDetail from './MovieDetail';
const MovieSuggestions = () => {
    const [clickedMovie, setClickedMovie] = useState(null);
        
    const openClickedMovie = (clickedElement) => {
        setClickedMovie(clickedElement)
    }
    const closeClickedMovie = () => {
        setClickedMovie(null)
    }
    // console.log(clickedMovie); //erre visszaadta a rakattintott filmnek az objektumat
        return (
            <div>
            <div className='suggestionsContainer'>
                <h3 className='movieContainerTitle'>Movies</h3>
                <div className='movieSuggestionsContainer'>
                <> 
                {MoviesData.map((movie, index) => {
                    return (
                        <div key={index} className = 'movieContainer' id = {movie.id} onClick = {() => openClickedMovie(movie)}>
                            <div className = 'movieImages'><img src={movie.image} alt='' /></div>
                            <h3>{movie.title}</h3>
                        </div>
                    )
                })}
                </>
                </div>
            </div>
            
            {clickedMovie !== null ?  <MovieDetail movie ={clickedMovie} onClose = {closeClickedMovie}/> : null}
            </div>
        )
}

export default MovieSuggestions