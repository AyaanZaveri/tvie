import React from 'react'

const Search = () => {
  return (
    <div className="flex flex-row">
      <input
        type="text"
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="Search..."
      />
      <div className='w-screen flex justify-center'>
        <button className="font-bold text-white">Movies</button>
        <button className="font-bold text-white">TV</button>
      </div>
    </div>
  )
}

export default Search
