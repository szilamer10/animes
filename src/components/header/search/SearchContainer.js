import React, { useState } from 'react'
import MovieListing from '../../home/moviesuggestions/MovieListing'
import MovieDetail from '../../home/moviesuggestions/MovieDetail';

const SearchContainer = ({ movies }) => {
    const [clickedMovie, setClickedMovie] = useState(null);
    const openClickedMovie = (clickedElement) => {
        setClickedMovie(clickedElement);
    }
    const closeClickedMovie = () => {
        setClickedMovie(null)
    }
    return (
        <>
            <div className='searchContainer'>
                <MovieListing movies={movies} openClickedMovie={openClickedMovie} />
            </div>

            {clickedMovie !== null ? <MovieDetail movie={clickedMovie} onClose={closeClickedMovie} /> : null}
        </>
    )
}

export default SearchContainer