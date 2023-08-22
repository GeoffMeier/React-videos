import React from "react";
import PropTypes from 'prop-types'

export function Movie({movie}){
   
   
    return (
        <li>{movie.title}</li>
    )
}

Movie.prototypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired
}