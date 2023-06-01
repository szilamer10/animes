import React from 'react'
const MovieDetail = ({movie, onClose}) => {

    console.log(movie);
    return (
        <div className='moviePopup'>
            
                <div className='moviePopupContainer' key={movie.id}>
                    <img src={movie.image} />
                    <span>{movie.title}</span>
                    <div className = 'movieDetails'>
                        <span>Genre:</span>
                        <span>{movie.genre}</span>
                    </div>
                    <div className = 'movieDetails'>
                        <span>Actors:</span>
                        <span>{movie.actors}</span>
                    </div>
                    <div className = 'movieDetails'>
                        <span>Publicated at:</span>
                        <span>{movie.publicated_at}</span>
                    </div>
                    <button onClick={onClose}>X</button>
                    
                </div>
        </div>
    )
}

export default MovieDetail