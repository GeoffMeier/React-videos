import React from "react";
import PropTypes from 'prop-types'

export function Movie({movie}){
    return (
        <li>{movie.name}</li>
    )
}

Movie.prototypes = {
    movie: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
}