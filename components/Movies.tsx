import React from 'react'

interface MovieProps {
  title: string
  backdrop_path: string
  original_language: string
  release_date: string
  vote_average: number
}

const Movies = ({ movie }: { movie: MovieProps }) => {
  return (
    <div
      className={`cursor-pointer rounded-t-lg text-left font-semibold shadow-sm md:w-[26rem]`}
    >
      <img
        className="rounded-t-lg shadow-sm"
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
      ></img>
      <span className="ml-3">{movie.title}</span>
    </div>
  )
}

export default Movies
