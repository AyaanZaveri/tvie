import React from 'react'
import axios from 'axios'
import Movies from '../../../components/Movies'
import MovieInfo from '../../../components/MovieInfo'

const MovieIndex = ({ movieData, castData }: { movieData: any, castData: any }) => {
  return (
    <div>
      <MovieInfo movieData={movieData} castData={castData.cast} />
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  const { data: movieData } = await axios.get(
    `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=cbf7e1167c533eaa4ed56af5cd8aeb85&language=en-US`
  )

  const { data: castData } = await axios.get(
    `https://api.themoviedb.org/3/movie/${context.params.id}/credits?api_key=cbf7e1167c533eaa4ed56af5cd8aeb85&language=en-US`
  )

  return {
    props: {
      movieData,
      castData,
    },
  }
}

export default MovieIndex
