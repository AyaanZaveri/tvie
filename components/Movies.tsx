import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { HiStar } from 'react-icons/hi'
import CountUp from 'react-countup'

interface MovieProps {
  title: string
  backdrop_path: string
  original_language: string
  release_date: string
  vote_average: number
  id: number
}

const Movies = ({ movie }: { movie: MovieProps }) => {
  const [favorited, setFavorited] = useState<boolean>(false)

  const longDate = (date: any) => {
    var check = moment(date, 'YYYY/MM/DD')
    var month = check.format('MMMM')
    var day = check.format('D')
    var year = check.format('YYYY')

    return `${month} ${day}, ${year}`
  }

  const handleFavorite = () => {
    if (favorited) {
      localStorage.removeItem(movie.id.toString())
      setFavorited(false)
    } else {
      localStorage.setItem(movie.id.toString(), movie.id.toString())
      setFavorited(true)
    }
  }

  useEffect(() => {
    if (localStorage.getItem(movie.id.toString())) {
      setFavorited(true)
    } else {
      setFavorited(false)
    }
  }, [])

  return (
    <div
      className={`group relative rounded-lg shadow-2xl backdrop-brightness-0`}
    >
      <div>
        <img
          className="w-80 rounded-lg shadow-sm transition-all group-hover:cursor-pointer group-hover:brightness-110"
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
              : 'https://via.placeholder.com/1280x720'
          }
          onClick={() => (window.location.href = `/movie/${movie.id}`)}
        />
        <div
          onClick={handleFavorite}
          className={`absolute top-0 right-0 m-1 rounded-lg p-2 ${
            favorited ? 'text-amber-400' : 'text-slate-100'
          } backdrop-blur transition-colors delay-150 hover:cursor-pointer hover:text-amber-400`}
        >
          <HiStar />
        </div>
        <div className="absolute bottom-0 left-0 flex w-full flex-row justify-between rounded-lg bg-slate-50 bg-opacity-10 py-3 px-4 shadow-2xl backdrop-blur transition-all group-hover:py-4">
          <div className="flex flex-col">
            <span
              className="cursor-pointer font-medium text-slate-200 transition-all hover:underline"
              onClick={() => (window.location.href = `/movie/${movie.id}`)}
            >
              {movie.title}
            </span>
            <span className="text-sm font-light text-slate-300">
              {longDate(movie.release_date)}
            </span>
          </div>

          <span className="h-min rounded-sm px-1.5 text-sm text-slate-200 ring-1 ring-slate-300">
            <CountUp end={movie.vote_average} duration={1} decimals={1} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Movies
