import React from 'react'
import axios from 'axios'
import Movies from '../../../components/Movies'
import MovieInfo from '../../../components/MovieInfo'

const MovieIndex = ({movieData} : {movieData:any}) => {
  return (
    <div><MovieInfo movieData={movieData} /></div>
  )
}

export const getServerSideProps = async (context:any) => {
    const { data: movieData } = await axios.get(
      `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=cbf7e1167c533eaa4ed56af5cd8aeb85&language=en-US`
    );
  
    return {
      props: {
        movieData,
      },
    };
  };

export default MovieIndex