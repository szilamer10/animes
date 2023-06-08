import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FilterListing = ({ movies, openClickedMovie, movieType }) => {

  return (
    <>
      {movies.map((movie, index) =>
        movieType == movie.genre ? (
          <div key={index} className="movieContainer" id={movie.id} onClick={() => openClickedMovie(movie)}>
            <div className="movieImages">
              <img src={movie.image} alt="" />
            </div>
            <h3>{movie.title}</h3>
          </div>
        ) : null
      )}
    </>
  );
};

export default FilterListing;
