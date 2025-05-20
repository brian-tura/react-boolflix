import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

const MovieList = () => {

    const [filteredMovies, setFilteredMovies] = useState([])
    const [searchTitle, setSearchTitle] = useState("")
    const [filteredSeries, setFilteredSeries] = useState([])
    let list = []

    const filterMovies = (title) => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cfa1c2512131556ae3745fb4b4ed3338&query=${title}`)
            .then((res) => {
                setFilteredMovies(res.data.results)
                // console.log(res.data.results)
            })
    }

    const filterSeries = (title) => {
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=cfa1c2512131556ae3745fb4b4ed3338&query=${title}`)
            .then((res) => {
                setFilteredSeries(res.data.results)
                console.log(res.data.results)
            })
    }

    function handleChange(e) {
        setSearchTitle(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        filterMovies(searchTitle);
        filterSeries(searchTitle);
    }


    return (
        <>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Titolo</label>
                    <input type="text" id='title' name='title' onChange={handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
                <div>
                    {filteredMovies.map((movie) => (
                       <MovieCard id={`movie-${movie.id}`} title={movie.title} original_title={movie.original_title} original_language={movie.original_language} vote_average={movie.vote_average} src={movie.poster_path}/>
                    ))}
                    {filteredSeries.map((serie) => (
                       <MovieCard id={`serie-${serie.id}`} title={serie.name} original_title={serie.original_name} original_language={serie.original_language} vote_average={serie.vote_average} src={serie.poster_path}/>
                    ))}
                </div>
            </div>
        </>

    )
}

export default MovieList