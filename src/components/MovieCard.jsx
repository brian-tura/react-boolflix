import React from 'react'

const MovieCard = ({ id, title, original_title, original_language, vote_average, src }) => {

    const image = `https://image.tmdb.org/t/p/w200/${src}`

    return (
        <div key={id}>
            <h4>{title}</h4>
            <img src={image} alt="" />
            <p>{original_title}</p>
            {original_language === "it" ? <span className='fi fi-it'></span> : <span className='fi fi-us'></span>}
            <p>{vote_average}</p>
        </div>
    )
}

export default MovieCard