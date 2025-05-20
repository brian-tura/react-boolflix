import React from 'react'

const MovieRating = ({vote}) => {
    const fullStars = []
    const emptyStars = []
    
    for(let i = 0; i<vote; i++){
        fullStars.push(<i key={i} class="fa-solid fa-star"></i>)
    } 
    
    for(let i = 0; i<5-vote; i++){
        emptyStars.push(<i key={`-${i}`} class="fa-regular fa-star"></i>)
    }

    return (
        <>
            <span>
                {fullStars.map((star) => (
                    star
                ))}
                {emptyStars.map((star) => (
                    star
                ))}
            </span>
        </>
    )
}

export default MovieRating