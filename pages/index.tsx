import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import Movies from '../components/Movies'
import Search from '../components/Search'
import { HiChevronDown } from 'react-icons/hi'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [movies, setMovies] = useState<any>()
  const [query, setQuery] = useState<string>('')
  const [filter, setFilter] = useState<string>('')

  console.log(filter)

  const POPULAR_MOVIE_API =
    'https://api.themoviedb.org/4/discover/movie?api_key=cbf7e1167c533eaa4ed56af5cd8aeb85&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
  const SEARCH_MOVIE_API =
    'https://api.themoviedb.org/4/search/multi?api_key=cbf7e1167c533eaa4ed56af5cd8aeb85&query='

  const getMovies = (API: string) => {
    axios
      .get(API)
      .then((response: AxiosResponse) => setMovies(response.data.results))
  }

  useEffect(() => {
    getMovies(POPULAR_MOVIE_API)
    console.log(movies)
  }, [])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(query)
    console.log(movies)

    if (query) {
      getMovies(SEARCH_MOVIE_API + query)
    } else {
      getMovies(POPULAR_MOVIE_API)
    }
  }

  return (
    <div className="flex flex-row pb-12">
      {/* <Sidebar /> */}
      <div className='flex flex-col'>
        <div className="mt-24 flex flex-col items-center justify-center md:items-start md:justify-start">
        <Search handleSearch={handleSearch} query={query} setQuery={setQuery} />
          {/* <span className='text-white font-bold text-5xl'>ToVi</span> */}
          <h1 className="text-4xl font-bold text-slate-100 md:ml-12">Movies</h1>
        </div>
        <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-5 md:ml-12 md:items-start md:justify-start">
          {movies
            ? movies.map((movie: any) => (
                <Movies key={movie.id} movie={movie} />
              ))
            : null}
        </div>
      </div>
    </div>
  )
}

export default Home
