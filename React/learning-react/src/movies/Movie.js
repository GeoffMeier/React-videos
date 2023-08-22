import React from "react";
import PropTypes from 'prop-types'

export function Movie({movie, config}){
   
   
    return (
        <li>
            {console.log(movie.poster_path)}
            {config.images?.base_url && (
                
                <img src={config.images.base_url + "w342" + movie.poster_path} 
                alt={movie.title + " Poster"}/>
            )}
            
            <h3>{movie.title}</h3>

        
        </li>
    )
}

Movie.prototypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired
    }).isRequired
}