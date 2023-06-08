import React, { useState } from 'react'
import FilterListing from './FilterListing';
import { SeriesData } from '../SeriesData'
import MovieDetail from '../../home/moviesuggestions/MovieDetail';

const FilterContainer = ({ movieType }) => {
  const [clickedMovie, setClickedMovie] = useState(null);
  const openClickedMovie = (clickedElement) => {
    setClickedMovie(clickedElement);
  }
  const closeClickedMovie = () => {
    setClickedMovie(null);
  }
  // console.log(clickedMovie); 

  return (
    <>
      <div className="filterContainer">
        <FilterListing movies={SeriesData} openClickedMovie={openClickedMovie} movieType={movieType} />
      </div>
      {clickedMovie ? <MovieDetail movie={clickedMovie} onClose={closeClickedMovie} /> : null}
    </>
  )
}

export default FilterContainer