import React from 'react'
import axios from 'axios'
import PersonInfo from '../../../components/PersonInfo'

const PersonIndex = ({ personData, personMovieData }: { personData: any, personMovieData: any }) => {
  return (
    <div>
      <PersonInfo personData={personData} personMovieData={personMovieData} />
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  const { data: personData } = await axios.get(
    `https://api.themoviedb.org/3/person/${context.params.id}?api_key=cbf7e1167c533eaa4ed56af5cd8aeb85&language=en-US`
  )

  const { data: personMovieData } = await axios.get(
    `https://api.themoviedb.org/3/person/${context.params.id}/movie_credits?api_key=cbf7e1167c533eaa4ed56af5cd8aeb85&language=en-US`
  )

  return {
    props: {
      personData,
      personMovieData,
    },
  }
}

export default PersonIndex
