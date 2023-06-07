import React from 'react'
import Slider from 'react-slick'
import { isMobile } from "react-device-detect";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const MovieListing = ({ movies, openClickedMovie }) => {
    const sliderSettings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
    }
    return (
        <>
            {isMobile ? (
                <Slider {...sliderSettings}>
                    {movies.map((movie, index) => (
                        <div key={index} className='movieContainer' id={movie.id} onClick={() => openClickedMovie(movie)}>
                            <div className='movieImages'><img src={movie.image} alt='' /></div>
                            <h3>{movie.title}</h3>
                        </div>
                    ))}
                </Slider>
            ) : (
                movies.map((movie, index) => (
                    <div key={index} className='movieContainer' id={movie.id} onClick={() => openClickedMovie(movie)}>
                        <div className='movieImages'><img src={movie.image} alt='' /></div>
                        <h3>{movie.title}</h3>
                    </div>
                ))
            )}
        </>
    )
}

export default MovieListing