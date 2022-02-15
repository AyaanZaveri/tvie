import React from 'react'
import axios from 'axios'

const MovieIndex = ({data} : {data:any}) => {
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export const getServerSideProps = async (context:any) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${context.params.id}/?api_key=cbf7e1167c533eaa4ed56af5cd8aeb85&language=en-US`
    );
  
    return {
      props: {
        data,
      },
    };
  };

export default MovieIndex