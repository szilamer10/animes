import React, { useState } from 'react'
import { MoviesData } from './MoviesData'
import MovieDetail from './MovieDetail';
import MovieListing from './MovieListing';

const MovieSuggestions = () => {
    const [clickedMovie, setClickedMovie] = useState(null);

    const openClickedMovie = (clickedElement) => {
        setClickedMovie(clickedElement)
    }
    const closeClickedMovie = () => {
        setClickedMovie(null)
    }
    // console.log(clickedMovie); //erre visszaadta a rakattintott filmnek az objektumat

    // const sliderSettings = {
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     infinite: false,
    // }

    return (
        <>
            <div className='suggestionsContainer'>
                <h3 className='movieContainerTitle'>Movies</h3>
                <div className='movieSuggestionsContainer'>
                            <MovieListing movies={MoviesData} openClickedMovie={openClickedMovie} /> {/*kod ismetlodes elkerulese erdekeben, movielisting componens leterhozasa, bar a slick-slider nem mukodott jol,ha kulonbozo fileokban volt meghivva es props atadas az alcomponensnek*/}   
                </div>
            </div>

            {clickedMovie !== null ? <MovieDetail movie={clickedMovie} onClose={closeClickedMovie} /> : null}
        </>
    )
}

export default MovieSuggestions