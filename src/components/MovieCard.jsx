import React from 'react'
import MovieRating from './MovieRating'

const MovieCard = ({ id, title, original_title, original_language, vote_average, src, overview }) => {

    const image = `https://image.tmdb.org/t/p/w342/${src}`
    const rating = Math.round(vote_average / 2)

    return (
        <div key={id} className='col-3 card info-card'>
            <div className='film-img'>
                <img className='img-fluid' src={image} alt="" />
            </div>
            <div className='info'>
                <h4>Titolo: {title}</h4>
                <p>Titolo originale: {original_title}</p>
                <p>Lingua originale: {original_language === "it" ? <span className='fi fi-it'></span> : <span className='fi fi-us'></span>}</p>
                <p>Voto: <MovieRating vote={rating} /></p>
                <p>Overview: {overview}</p>
            </div>
        </div>
    )
}

export default MovieCard