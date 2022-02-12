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
    <div className="relative shadow-md rounded-lg backdrop-brightness-0">
      <img
        className="w-96 rounded-lg shadow-sm"
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
      />
      <div className="absolute bottom-0 left-0 flex w-full flex-col rounded-b-lg bg-slate-50 bg-opacity-10 shadow-2xl py-3 px-4 backdrop-blur">
        <span className="font-medium text-slate-200">{movie.title}</span>
        <span className="text-sm font-light text-slate-300">
          {movie.release_date}
        </span>
      </div>
    </div>
  )
}

export default Movies
