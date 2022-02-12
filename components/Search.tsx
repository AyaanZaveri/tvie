import React from 'react'

interface SearchProps {
  handleSearch: any
  query: string
  setQuery: (query: string) => void
}

const Search = ({ handleSearch, query, setQuery }: SearchProps) => {
  return (
    <div className="flex w-screen flex-row justify-start bg-neutral-800 p-5 font-bold shadow-xl">
      <div className='ml-16'>
        <form className="w-96" onSubmit={handleSearch}>
          <input
            type="text"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
