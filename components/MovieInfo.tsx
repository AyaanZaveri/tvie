import React from 'react'

interface MovieInfoProps {
  title: string
  backdrop_path: string
  original_language: string
  release_date: string
  vote_average: number
  id: number
}

const MovieInfo = ({movieData} : {movieData: MovieInfoProps}) => {
  return (
    <div>MovieInfo</div>
  )
}

export default MovieInfo