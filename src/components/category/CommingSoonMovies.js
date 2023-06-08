import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CommingSoonMovies = () => {
    const [data, setData] = useState([])
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
        axios.get('https://api-gate2.movieglu.com/filmsComingSoon/', axiosConfig)
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
    return (
        <div>
            <div>
                <div>
                    <span className='movieContainerTitle'>Comming soon</span>
                    <div className='movieCategoryContainer commingSoon'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommingSoonMovies