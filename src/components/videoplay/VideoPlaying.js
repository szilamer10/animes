import React from 'react'
import { useParams } from 'react-router-dom';
import { MoviesData } from '../home/moviesuggestions/MoviesData';

const VideoPlaying = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            {MoviesData.map(movie => {
                console.log(movie.id);
                return (movie.id == id ?
                    <iframe width="560" height="315" key={movie.video_src} src={movie.video_src} allow='clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
                    : null)
            })}

        </div>
    )
}

export default VideoPlaying