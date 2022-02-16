import React from 'react'
import { HiChevronLeft } from 'react-icons/hi'

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
interface Props {
  personData: PersonInfoProps
  personMovieData: any
}

const PersonInfo = ({ personData, personMovieData }: Props) => {
  console.log(personData)
  return (
    <div>
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
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-3">
            <span className="text-4xl font-bold text-slate-100">
              {personData.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonInfo
