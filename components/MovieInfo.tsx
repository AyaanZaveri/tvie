import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import moment from 'moment'

interface MovieInfoProps {
  title: string
  poster_path: string
  original_language: string
  release_date: string
  vote_average: number
  id: number
  overview: string
  imdb_id: string
  tagline: string
  runtime: number
  revenue: number
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

  function numToTime(value: number) {
    return Math.floor(value / 60) + ':' + (value % 60 ? value % 60 : '00')
  }

  function numberWithCommas(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const longDate = (date: any) => {
    var check = moment(date, 'YYYY/MM/DD')
    var month = check.format('MMMM')
    var day = check.format('D')
    var year = check.format('YYYY')

    return `${month} ${day}, ${year}`
  }

  return (
    <div className="ml-24 flex h-screen flex-wrap justify-start">
      <div className="mt-16 flex flex-row items-start gap-8 pb-5">
        <img
          className="w-72 rounded-lg shadow-2xl brightness-110 transition-all hover:brightness-125"
          src={
            movieData.poster_path
              ? `https://image.tmdb.org/t/p/w1280${movieData.poster_path}`
              : 'https://via.placeholder.com/1280x720'
          }
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-3">
            <span className="text-4xl font-bold text-slate-100">
              {movieData.title}
            </span>
            <span className="h-min rounded-sm px-1.5 text-sm text-slate-200 ring-1 ring-slate-300">
              <CountUp end={movieData.vote_average} duration={1} decimals={1} />
            </span>
            <span className="h-min rounded-sm px-1.5 text-sm text-slate-200 ring-1 ring-slate-300">
              {numToTime(movieData.runtime)} hours
            </span>
            <span className="w-10 transition-all hover:brightness-110">
              <a
                target="_blank"
                href={`https://www.imdb.com/title/${movieData.imdb_id}/`}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                  alt=""
                />
              </a>
            </span>
          </div>
          <span className="w-[48rem] italic text-slate-200">
            "{movieData.tagline}"
          </span>
          <span className="w-[48rem] text-slate-100">{movieData.overview}</span>
          <span className="text-2xl font-bold text-slate-100">Cast</span>
          <div>
            <div className="mb-5 flex flex-col gap-5">
              {slicedCastData
                ? slicedCastData.map((member: any) => (
                    <div className="flex w-full flex-row items-center justify-center break-words">
                      <img
                        src={
                          member.profile_path
                            ? `https://image.tmdb.org/t/p/w300_and_h300_bestv2${member.profile_path}`
                            : 'https://via.placeholder.com/150'
                        }
                        className="h-12 w-12 rounded-full object-cover shadow-xl transition-all hover:brightness-125"
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
            <div className="flex flex-col gap-3">
              <span className="text-2xl font-bold text-slate-100">
                Information
              </span>

              <div className="flex flex-col gap-3">
                <span className="font-bold text-slate-100">
                  Revenue:{' '}
                  <span className="font-normal">
                    ${numberWithCommas(movieData.revenue)} USD
                  </span>
                </span>
                <span className="font-bold text-slate-100">
                  Release Date:{' '}
                  <span className="font-normal">
                    {longDate(movieData.release_date)}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
