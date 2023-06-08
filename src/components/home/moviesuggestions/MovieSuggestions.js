import React, { useState, useEffect } from 'react'
import { MoviesData } from './MoviesData'
import MovieDetail from './MovieDetail';
import MovieListing from './MovieListing';
import { useLocation } from 'react-router-dom';
import { SeriesData } from '../../category/SeriesData';

const MovieSuggestions = () => {
    const [clickedMovie, setClickedMovie] = useState(null);
    const [isCategoryPage, setIsCategoryPage] = useState(false);

    const location = useLocation();
    const currentPath = location.pathname;

    const openClickedMovie = (clickedElement) => {
        setClickedMovie(clickedElement)
    }
    const closeClickedMovie = () => {
        setClickedMovie(null)
    }
    
    // console.log(clickedMovie); //erre visszaadta a rakattintott filmnek az objektumat
    
    useEffect(() => {
        currentPath === '/movies' ? setIsCategoryPage(true) : setIsCategoryPage(false)
      }, [currentPath]); //ha ures a parameter csak rendereleskor (1x) fut le. ha van erteke, akkor az ertek valtozasakor fut le
    
    return (
        <>
            <div className='suggestionsContainer'>
                <h3 className='movieContainerTitle'>Movies</h3>
                <div className='movieSuggestionsContainer'>
                      {!isCategoryPage ?  
                      (<MovieListing movies={MoviesData} openClickedMovie={openClickedMovie} />  /*kod ismetlodes elkerulese erdekeben, movielisting componens leterhozasa, bar a slick-slider nem mukodott jol,ha kulonbozo fileokban volt meghivva,ezert ismetlem es props atadas az alcomponensnek*/
                      ) : (
                        <MovieListing movies={SeriesData} openClickedMovie={openClickedMovie} />
                      )}
                      </div>
            </div>
            {clickedMovie !== null ? <MovieDetail movie={clickedMovie} onClose={closeClickedMovie} /> : null}
        </>
    )
}

export default MovieSuggestions