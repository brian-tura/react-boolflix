import React from 'react'

const MovieRating = ({vote}) => {
    const fullStars = []
    const emptyStars = []
    
    for(let i = 0; i<vote; i++){
        fullStars.push(<i key={i} className="fa-solid fa-star"></i>)
    } 
    
    for(let j = 0; j<5-vote; j++){
        emptyStars.push(<i key={`-${j}`} className="fa-regular fa-star"></i>)
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