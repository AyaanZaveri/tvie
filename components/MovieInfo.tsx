import React from 'react'
import CountUp from 'react-countup'

interface MovieInfoProps {
  title: string
  poster_path: string
  original_language: string
  release_date: string
  vote_average: number
  id: number
}

const MovieInfo = ({ movieData }: { movieData: MovieInfoProps }) => {
  return (
    <div className="mr-96 flex h-screen flex-wrap items-center justify-center">
      <div className="flex flex-row items-start gap-5">
        <img
          className="w-64 rounded-lg shadow-2xl brightness-110 transition-all hover:brightness-125"
          src={
            movieData.poster_path
              ? `https://image.tmdb.org/t/p/w1280${movieData.poster_path}`
              : 'https://via.placeholder.com/1280x720'
          }
        />
        <div className='flex flex-col gap-5'>
          <div className="flex flex-row items-center gap-3">
            <span className="text-3xl font-bold text-slate-100">
              {movieData.title}
            </span>
            <span className="h-min rounded-sm px-1.5 text-sm text-slate-200 ring-1 ring-slate-300">
              <CountUp end={movieData.vote_average} duration={1} decimals={1} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
