import React, { useState } from 'react'
import { MoviesData } from './MoviesData'
import MovieDetail from './MovieDetail';
import Slider from 'react-slick'

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
    //   }

        return (
            <div>
            <div className='suggestionsContainer'>
                <h3 className='movieContainerTitle'>Movies</h3>
                <div className='movieSuggestionsContainer'>
                <> 
                {/* <Slider {...sliderSettings}> */}
                {MoviesData.map((movie, index) => {
                    return (
                        <div key={index} className = 'movieContainer' id = {movie.id} onClick = {() => openClickedMovie(movie)}>
                            <div className = 'movieImages'><img src={movie.image} alt='' /></div>
                            <h3>{movie.title}</h3>
                        </div>
                    )
                })}
                {/* </Slider> */}
                </>
                </div>
            </div>
            
            {clickedMovie !== null ?  <MovieDetail movie ={clickedMovie} onClose = {closeClickedMovie}/> : null}
            </div>
        )
}

export default MovieSuggestions