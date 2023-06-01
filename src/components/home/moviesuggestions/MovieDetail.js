import React, { useState } from 'react'
import { MoviesData } from './MoviesData';
const MovieDetail = () => {
    const [clickedMovie, setClickedMovie] = useState();
    const movieLength = MoviesData.length;

    const openSlider = () => {
        // setClickedMovie(clickedMovie)
        console.log(clickedMovie);
    }

    return (
        <div className='moviePopup'>
            {MoviesData.map((movie, index) => {
                <div className='moviePopupContainer' key={index}>
                    <img src={movie.image} />
                    <span>{movie.title}</span>
                    <div className = 'movieDetails'>
                        <span>Genre:</span>
                        <span>{movie.genre}</span>
                    </div>
                    <div className = 'movieDetails'>
                        <span>Actors:</span>
                        <span>{movie.actors}</span>
                    </div>
                    <div className = 'movieDetails'>
                        <span>Publicated at:</span>
                        <span>{movie.publicated_at}</span>
                    </div>
                    
                </div>
            })}
        </div>
    )
}

export default MovieDetail