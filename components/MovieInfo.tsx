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
  console.log(castData)

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
          </div>
          <span className="w-[48rem] text-slate-100">{movieData.overview}</span>
          <div>
            {castData
              ? castData.map((member: any) => (
                  <div>
                    <span>{member.name}</span>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
