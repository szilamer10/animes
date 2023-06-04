import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import VideoPlaying from '../../videoplay/VideoPlaying'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

const MovieDetail = ({ movie, onClose }) => {

    // const [currentTrailer, setCurrentTrailer] = useState(null);
    // const viewTrailer = (clickedElement) => {
    //     setCurrentTrailer(clickedElement);
    // }
    // const closeClickedMovie = () => {
    //     setCurrentTrailer(null)
    // }
    return (
        <div className='moviePopupBackground'>
            <div className='moviePopup'>

                <div className='moviePopupContainer' key={movie.id}>
                    <FontAwesomeIcon icon={faClose} onClick={onClose} />
                    <Link to={`/video/${movie.id}`}>
                    <img src={movie.image}/>
                    </Link>
                    <div className='movieDetailsTitle'><span>{movie.title}</span></div>
                    <div className='movieDetails'>
                        <span className='movieDetailsDescription'>{movie.description.substring(0, 200) + '...'}</span>
                    </div>
                    <div className='movieDetailsShortInfo'>
                        <div>
                            <div className='movieDetails'>
                                <span>Duration:</span>
                                <span>{movie.duration}</span>
                            </div>
                            <div className='movieDetails'>
                                <span>Genre:</span>
                                <span>{movie.genre}</span>
                            </div>
                        </div>
                        <div>
                            <div className='movieDetails'>
                                <span>Actors:</span>
                                <span>{movie.actors}</span>
                            </div>
                            <div className='movieDetails'>
                                <span>Publicated at:</span>
                                <span>{movie.publicated_at}</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* {currentTrailer !== null ?  <VideoPlaying movie={currentTrailer} onClose={closeClickedMovie} />: null} */}
        </div>
    )
}

export default MovieDetail