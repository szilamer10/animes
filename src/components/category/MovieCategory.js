import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const MovieCategory = () => {
  const displayedMovieNumber = 9;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [currentNMovie, setCurrentNMovie ] = useState(displayedMovieNumber);
  const sliderRef = useRef(null);
  // const [isDataLoaded, setIsDataLoaded] = useState(false);
  const axiosConfig = {
    headers: {
      client: 'PERS_154',
      'x-api-key': 'JOLRrdLujmahEXQuvL5HK3uUDghjJHBPfGqZTcbg',
      authorization: 'Basic UEVSU18xNTRfWFg6dGNuVnVlMFlkR0Vw',
      territory: 'XX',
      'api-version': 'v200',
      geolocation: '-22.0;14.0',
      'device-datetime': '2023-06-03T06:47:02.228Z',
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    axios.get('https://api-gate2.movieglu.com/filmsNowShowing/?n='+ currentNMovie, axiosConfig)
      .then(response => {
        // A kapott adatok beállítása a state-be
        setData(response.data.films);
        setIsLoading(false);
      })
      .catch(error => {
        // Hiba kezelése
        setIsLoading(false);
      });
  }, [currentNMovie]); //A useEffect hook második paramétere egy tömb, amely felsorolja azokat a változókat vagy állapotokat, amelyekre figyelni szeretnénk. Amikor ezek közül bármelyik változik, újra le fog futni a useEffect-ben lévő függvény.

  const changeSliderLeft = () => {
    setCurrentNMovie(currentNMovie - displayedMovieNumber);
    sliderRef.current.slickPrev();
  }
  const changeSliderRight = () => {
    setCurrentNMovie(currentNMovie + displayedMovieNumber);
    sliderRef.current.slickNext();
   
  }
  // useEffect(() => {
  //   if (data.length > 0) {
  //     setIsDataLoaded(true);
  //   }
  // }, [data]);
  
 
  const sliderSettings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
  }

  return (
    <div>
      <div>
        <span className='movieContainerTitle'>Movies</span>
        <div className='movieCategoryContainer' >
        <Slider {...sliderSettings} ref={sliderRef}>
          {isLoading ? (<p>Loading..</p>) : (
            data.map((movie, index) => {
              return (
                
                <div key={index}>
                  {Object.values(movie.images.poster).map((poster, posterIndex) => {
                    return (
                      <div key={posterIndex}>
                        <img src={poster.medium.film_image} />
                      </div>
                    );
                  })}
                </div>
              )
            }))}
          </Slider>
            <div className='slider-arrows category'>
            <span><FontAwesomeIcon icon={faChevronLeft} onClick={changeSliderLeft} /></span>
            <span><FontAwesomeIcon icon={faChevronRight} onClick={changeSliderRight} /></span>
          </div>
        </div>
      </div>
    </div >
  )
}
export default MovieCategory