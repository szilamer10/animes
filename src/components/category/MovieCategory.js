import React, { useEffect, useState } from 'react'
import { MoviesData } from '../home/moviesuggestions/MoviesData'
import axios from 'axios'



const MovieCategory = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
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
    axios.get('https://api-gate2.movieglu.com/filmsNowShowing/?n=10', axiosConfig)
      .then(response => {
        // A kapott adatok beállítása a state-be
        setData(response.data.films);
        
        setIsLoading(false);
      })
      .catch(error => {
        // Hiba kezelése
        console.error(error);
        setIsLoading(false);
      });
  }, []);
  // console.log(data);
  return (
    <div>
      <div>
        <span className='movieContainerTitle'>Movies</span>
        <div className='movieCategoryContainer'>
          {console.log(data)}
          {isLoading ?  (<p>Loading..</p>) :(
            
            data.map((movie, index) => {
              return (
                <div key={movie.index}>{movie.film_name}<img src={movie.image} /></div>
              )
            }))}
        </div>
      </div>
    </div>
  )
}
export default MovieCategory