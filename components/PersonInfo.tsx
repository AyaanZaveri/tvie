import React from 'react'
import { HiChevronLeft } from 'react-icons/hi'
import Movies from './Movies'

interface PersonInfoProps {
  birthday: string
  known_for_department: string
  name: string
  gender: number
  biography: string
  place_of_birth: string
  profile_path: string
  imdb_id: string
}

interface MovieProps {
  title: string
  backdrop_path: string
  original_language: string
  release_date: string
  vote_average: number
  id: number
}

interface PersonMovieInfoProps {
  cast: MovieProps[]
}

const PersonInfo = ({
  personData,
  personMovieData,
}: {
  personData: PersonInfoProps
  personMovieData: PersonMovieInfoProps
}) => {
  console.log(personMovieData)

  // Sorting movies by popularity
  personMovieData.cast.sort((a: any, b: any) => b.popularity - a.popularity)

  const slicedCastData = personMovieData.cast.slice(0, 10)

  console.log(personMovieData)

  return (
    <div className="flex h-screen flex-wrap justify-start">
      <a href="/">
        <HiChevronLeft className="absolute top-0 left-0 m-3 h-8 w-8 text-slate-100 transition-all hover:text-slate-300" />
      </a>
      <div className="ml-24 mt-16 flex flex-row items-start gap-8 pb-10">
        <img
          className="w-72 rounded-lg shadow-2xl brightness-110 transition-all hover:brightness-125"
          src={
            personData.profile_path
              ? `https://image.tmdb.org/t/p/w1280${personData.profile_path}`
              : 'https://via.placeholder.com/1280x720'
          }
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-3">
            <span className="text-4xl font-bold text-slate-100">
              {personData.name}
            </span>
            <div className="flex items-center gap-3">
              <span className="w-10 cursor-pointer transition-all hover:brightness-110">
                <a
                  target="_blank"
                  href={`https://www.imdb.com/title/${personData.imdb_id}/`}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                    alt=""
                    className="transition-all hover:brightness-110"
                  />
                </a>
              </span>
            </div>
          </div>

          <span className="text-2xl font-bold text-slate-100">Popular Movies</span>
          <div className='flex flex-row gap-5 flex-wrap'>
            {slicedCastData.map((movieData: MovieProps) => (
              <div className="w-80 ">
                <Movies movie={movieData} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonInfo
