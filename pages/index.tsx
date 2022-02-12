import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import Movies from '../components/Movies'
import Search from '../components/Search'

const Home = () => {
  const [movies, setMovies] = useState<any>()
  const [query, setQuery] = useState<string>('')

  const POPULAR_API =
    'https://api.themoviedb.org/4/discover/movie?api_key=cbf7e1167c533eaa4ed56af5cd8aeb85&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
  const SEARCH_API =
    'https://api.themoviedb.org/4/search/movie?api_key=cbf7e1167c533eaa4ed56af5cd8aeb85&query='

  const getMovies = (API: string) => {
    axios
      .get(API)
      .then((response: AxiosResponse) => setMovies(response.data.results))
  }

  const searchMovies = (API: string) => {
    axios
      .get(API)
      .then((response: AxiosResponse) => setMovies(response.data.results))
  }

  useEffect(() => {
    getMovies(POPULAR_API)
    console.log(movies)
  }, [])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(query)
    console.log(movies)

    if (query) {
      getMovies(SEARCH_API + query)
    } else {
      getMovies(POPULAR_API)
    }
  }

  return (
    <div>
      <Search handleSearch={handleSearch} query={query} setQuery={setQuery} />
      <div className="mt-6 flex flex-col items-center justify-center md:items-start md:justify-start">
        {/* <span className='text-white font-bold text-5xl'>ToVi</span> */}
      </div>
      <div className="mt-3 flex flex-row flex-wrap items-center justify-center gap-3 md:ml-12 md:items-start md:justify-start">
        {movies
          ? movies.map((movie: any) => <Movies key={movie.id} movie={movie} />)
          : null}
      </div>
    </div>
  )
}

export default Home
