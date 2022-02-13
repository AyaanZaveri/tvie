import React from 'react'

interface SearchProps {
  handleSearch: any
  query: string
  setQuery: (query: string) => void
}

const Search = ({ handleSearch, query, setQuery }: SearchProps) => {
  return (
    <div className="fixed top-0 z-20 flex w-8/12 flex-row items-center justify-center bg-neutral-800 py-5 font-bold md:justify-start">
      <div className="w-9/12 md:ml-12">
        <form className="" onSubmit={handleSearch}>
          <input
            type="text"
            className="block w-full rounded-md border-neutral-300 py-2 px-4 shadow-2xl outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

export default Search
