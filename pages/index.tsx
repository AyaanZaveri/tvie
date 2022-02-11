import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import Movies from '../components/Movies'

const Home = () => {
  const [movies, setMovies] = useState<any>()

  const POPULAR_API =
    'https://api.themoviedb.org/4/discover/movie?api_key=cbf7e1167c533eaa4ed56af5cd8aeb85&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
  const SEARCH_API =
    'https://api.themoviedb.org/4/search/movie?api_key=cbf7e1167c533eaa4ed56af5cd8aeb85&query='

  const getMovies = (API: string) => {
    axios
      .get(API)
      .then((response: AxiosResponse) => setMovies(response.data.results))
  }

  useEffect(() => {
    getMovies(POPULAR_API)
  }, [])

  console.log(movies)

  return (
    <div>
      <div className='flex flex-row flex-wrap gap-3'>
        {movies
          ? movies.map((movie: any) => <Movies key={movie.id} movie={movie} />)
          : null}
      </div>
    </div>
  )
}

export default Home
