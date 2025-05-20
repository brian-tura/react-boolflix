import React from 'react'

const MovieCard = ({id, title, original_title, original_language, vote_average}) => {
    return (
        <div key={id}>
            <h4>{title}</h4>
            <p>{original_title}</p>
            <p>{original_language}</p>
            <p>{vote_average}</p>
        </div>
    )
}

export default MovieCard