import React from 'react'
import { HiStar } from 'react-icons/hi'

interface SearchProps {
  handleSearch: any
  query: string
  setQuery: (query: string) => void
}

const Search = ({ handleSearch, query, setQuery }: SearchProps) => {
  return (
    <div className="fixed top-0 z-20 flex w-full flex-row items-center justify-center bg-neutral-800 py-5 font-bold shadow-xl md:justify-start">
      <div className="flex w-80 items-center md:ml-12 md:w-1/3">
        <form className="w-full" onSubmit={handleSearch}>
          <input
            type="text"
            className="block w-full rounded-md border-neutral-300 py-2 px-4 shadow-2xl outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        <HiStar onClick={() => window.location.href = "/favorites"} className="absolute right-0 mr-8 h-7 w-7 text-white hover:cursor-pointer hover:text-amber-400 transition-all delay-150" />
      </div>
    </div>
  )
}

export default Search
