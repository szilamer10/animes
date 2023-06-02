import React, { useEffect, useState } from 'react'
import { MoviesData } from '../home/moviesuggestions/MoviesData'
import axios from 'axios'
function MovieCategory() {

  return (
    <div>
        <div>
            <span className ='movieContainerTitle'>Movies</span>
            <div className='movieCategoryContainer'>
                {MoviesData.map((movie,index) =>{
                    return (
                    <div key={movie.index}><img src={movie.image}/></div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}


// const MovieCategory = () => {

//     const [data, setData] = useState([]);
//     useEffect(() => {
//         // axios.get('https://api-gate2.movieglu.com/filmsNowShowing/?n=10')
//         axios.get('https://zilelibere.webventure.ro/api/2023')
//             .then(response => {
//                 // A kapott adatok beállítása a state-be
//                 setData(response.data);
//                 console.log(response.data);
//             })
//             .catch(error => {
//                 // Hiba kezelése
//                 console.error(error);
//                 console.log('h');
//             });
//     }, []);

//     return (
//         <div>
// {data.map((film, index) => (
//       <div key={index}>
//         <h3>{film.title}</h3>
//         <p>Director: {film.director}</p>
//         {/* További filmadatok */}
//       </div>
//     ))}
//         </div>
//     )
// }
export default MovieCategory