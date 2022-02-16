import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { HiStar } from 'react-icons/hi'

interface MovieInfoProps {
  title: string
  poster_path: string
  original_language: string
  release_date: string
  vote_average: number
  id: number
  overview: string
  imdb_id: string
}

interface CastInfoProps {
  name: string
  character: string
  profile_path: string
}

interface Props {
  movieData: MovieInfoProps
  castData: CastInfoProps[]
}

const MovieInfo = ({ movieData, castData }: Props) => {
  console.log(movieData)

  const slicedCastData = castData.slice(0, 5)

  return (
    <div className="flex h-screen flex-wrap items-center justify-center">
      <div className="flex flex-row items-start gap-5">
        <img
          className="w-64 rounded-lg shadow-2xl brightness-110 transition-all hover:brightness-125"
          src={
            movieData.poster_path
              ? `https://image.tmdb.org/t/p/w1280${movieData.poster_path}`
              : 'https://via.placeholder.com/1280x720'
          }
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-3">
            <span className="text-3xl font-bold text-slate-100">
              {movieData.title}
            </span>
            <span className="h-min rounded-sm px-1.5 text-sm text-slate-200 ring-1 ring-slate-300">
              <CountUp end={movieData.vote_average} duration={1} decimals={1} />
            </span>
            <span className="w-10">
              <a
                target="_blank"
                href={`https://www.imdb.com/title/${movieData.imdb_id}/`}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                  alt=""
                  className='hover:brightness-110 transition-all'
                />
              </a>
            </span>
          </div>
          <div className='w-9/12'>
            <span className="w-full text-slate-100">{movieData.overview}</span>
          </div>
          <span className="text-2xl font-bold text-slate-100">Cast</span>
          <div>
            <div className="flex flex-col gap-5">
              {slicedCastData
                ? slicedCastData.map((member: any) => (
                    <div className="flex w-full flex-row items-center break-words">
                      <img
                        src={`https://image.tmdb.org/t/p/w300_and_h300_bestv2${member.profile_path}`}
                        className="h-12 w-12 rounded-full object-cover shadow-xl brightness-110 transition-all hover:brightness-125"
                        alt=""
                      />
                      <div className="ml-2 flex w-full flex-col">
                        <span className="text-sm font-semibold text-slate-100">
                          {member.name}
                        </span>
                        <span className="rounded-b-lg text-sm text-slate-300">
                          {member.character}
                        </span>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
