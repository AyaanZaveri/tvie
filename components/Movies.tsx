import React, { useState } from 'react'
import moment from 'moment'
import { AiFillStar } from 'react-icons/ai'
interface MovieProps {
  title: string
  backdrop_path: string
  original_language: string
  release_date: string
  vote_average: number
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

  return (
    <div className="relative rounded-lg shadow-2xl backdrop-brightness-0 group">
      <img
        className="w-96 rounded-lg shadow-sm"
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
            : 'https://via.placeholder.com/1280x720'
        }
      />
      <div className={`absolute top-0 right-0 p-2 m-1 rounded-lg ${favorited ? 'text-amber-500' : 'text-slate-100'} backdrop-blur-lg hover:cursor-pointer hover:text-amber-400 transition-colors delay-150`}>
        <AiFillStar />
      </div>
      <div className="absolute bottom-0 left-0 flex w-full flex-col rounded-lg bg-slate-50 bg-opacity-10 py-3 px-4 group-hover:py-4 shadow-2xl backdrop-blur transition-all">
        <span className="font-medium text-slate-200">{movie.title}</span>
        <span className="text-sm font-light text-slate-300">
          {longDate(movie.release_date)}
        </span>
      </div>
    </div>
  )
}

export default Movies
