import React from 'react'
import axios from 'axios'
import PersonInfo from '../../../components/PersonInfo'

const PersonIndex = ({ personData }: { personData: any}) => {
  return (
    <div>
      <PersonInfo personData={personData}/>
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  const { data: movieData } = await axios.get(
    `https://api.themoviedb.org/3/person/${context.params.id}?api_key=cbf7e1167c533eaa4ed56af5cd8aeb85&language=en-US`
  )

  return {
    props: {
      movieData,
    },
  }
}

export default PersonIndex
