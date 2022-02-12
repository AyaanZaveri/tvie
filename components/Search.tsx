import React from 'react'

const Search = () => {
  return (
    <div className="flex flex-row">
      <input
        type="text"
        className="block mt-3 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="Search..."
      />
    </div>
  )
}

export default Search
