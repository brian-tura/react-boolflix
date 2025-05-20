import React from 'react'
import { useState } from 'react'

const MovieCard = ({ id, title, original_title, original_language, vote_average }) => {
    return (
        <div key={id}>
            <h4>{title}</h4>
            <p>{original_title}</p>
            {original_language === "it" ? <span className='fi fi-it'></span> : <span className='fi fi-us'></span>}
            <p>{vote_average}</p>
        </div>
    )
}

export default MovieCard