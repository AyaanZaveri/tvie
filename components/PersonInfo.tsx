import React from 'react'

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

const PersonInfo = ({ personData }: { personData: PersonInfoProps }) => {
  console.log(personData)
  return (
    <div>
      <span className="text-white">{JSON.stringify(personData)}</span>
    </div>
  )
}

export default PersonInfo
