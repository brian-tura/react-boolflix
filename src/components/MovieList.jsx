import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

const MovieList = () => {

    const [filteredMovies, setFilteredMovies] = useState([])
    const [searchTitle, setSearchTitle] = useState("")

    const filterMovies = (title) => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cfa1c2512131556ae3745fb4b4ed3338&query=${title}&language=it-IT`)
            .then((res) => {
                setFilteredMovies(res.data.results)
                console.log(res.data.results)
            })
    }

    function handleSubmit(e) {
        setSearchTitle(e.target.value);
    }

    useEffect(() => {
        filterMovies(searchTitle)
    }, [searchTitle])

    return (
        <>
            <div>
                <form action="" onChange={handleSubmit}>
                    <label htmlFor="">Titolo</label>
                    <input type="text" id='title' name='title' />
                </form>
                <div>
                    {filteredMovies.map((movie) => (
                       <MovieCard id={movie.id} title={movie.title} original_title={movie.original_title} original_language={movie.original_language} vote_average={movie.vote_average} />
                    ))}
                </div>
            </div>
        </>

    )
}

export default MovieList