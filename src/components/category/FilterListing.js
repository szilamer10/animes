import React from "react";
import Slider from "react-slick";
import { isMobile } from "react-device-detect";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FilterListing = ({ movies, openClickedMovie, movieType }) => {
  const sliderSettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
  };
  return (
    <>
      {isMobile ? (
        <Slider {...sliderSettings}>
          {movies.map((movie, index) =>
            movieType == movie.genre ? (
              <div
                key={index}
                className="movieContainer"
                id={movie.id}
                onClick={() => openClickedMovie(movie)}
              >
                <div className="movieImages">
                  <img src={movie.image} alt="" />
                </div>
                <h3>{movie.title}</h3>
              </div>
            ) : null
          )}
        </Slider>
      ) : (
        movies.map((movie, index) =>
          movieType == movie.genre ? (
            <div
              key={index}
              className="movieContainer"
              id={movie.id}
              onClick={() => openClickedMovie(movie)}
            >
              <div className="movieImages">
                <img src={movie.image} alt="" />
              </div>
              <h3>{movie.title}</h3>
            </div>
          ) : null
        )
      )}
    </>
  );
};

export default FilterListing;
