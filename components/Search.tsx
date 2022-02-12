import React from 'react'

interface SearchProps {
  handleSearch: any
  query: string
  setQuery: (query: string) => void
}

const Search = ({ handleSearch, query, setQuery }: SearchProps) => {
  return (
    <div className="flex flex-row justify-start bg-neutral-800 p-5 font-bold shadow-xl">
      <div className='ml-8'>
        <form className="w-96" onSubmit={handleSearch}>
          <input
            type="text"
            className="block w-full py-2 px-4 rounded-md border-neutral-300 shadow-sm focus:ring focus:ring-amber-400 outline-none"
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
